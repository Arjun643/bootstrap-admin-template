import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserDetailsApi, User } from "utility";
import { ArrowLeft } from "react-bootstrap-icons";
import {
  CustomButton,
  CustomCard,
  CustomCardBody,
  CustomCol,
  CustomForm,
  CustomFormGroup,
  CustomFormLabel,
  CustomImage,
  CustomInput,
  CustomRow,
  DynamicHtmlTag,
} from "components";

const EditUser = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<User>({
    id: 0,
    fullName: "",
    email: "",
    bio: "",
    profileImageUrl: "",
  });
  const [previewImage, setPreviewImage] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const response = await getUserDetailsApi(Number(id));
      setFormData(response[0]);
      setPreviewImage(response[0].profileImageUrl);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      console.log("Updated User Data:", formData);
      setSubmitting(false);
      navigate("/user");
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setTimeout(() => {
        setFormData(prev => ({
          ...prev,
          profileImageUrl: imageUrl,
        }));
      }, 500);
    }
  };

  return (
    <CustomRow className="mt-4">
      <CustomCol lg={12}>
        <CustomCard className="shadow-sm" style={{ maxHeight: "auto", height: "fit-content" }}>
          <CustomCardBody className="p-4">
            {/* Header Row */}
            <CustomRow className="align-items-center mb-4">
              <CustomCol xs="auto">
                <CustomButton variant="outline-primary" onClick={() => navigate("/user")} className="rounded-pill px-3 py-1">
                  <ArrowLeft size={18} className="me-2" />
                  Back
                </CustomButton>
              </CustomCol>
              <CustomCol>
                <h4 className="mb-0">Edit User</h4>
              </CustomCol>
            </CustomRow>

            {/* Profile Image UI */}
            <CustomRow className="justify-content-between align-items-center mb-4">
              <CustomCol xs="auto">
                <DynamicHtmlTag type="div" className="d-flex align-items-center">
                  <DynamicHtmlTag type="div" className="avatar me-3">
                    <label htmlFor="imageUpload">
                      <CustomImage
                        className="avatar-img rounded-circle"
                        height={100}
                        width={100}
                        src={previewImage || "./images/profile-avatar.jpg"} // Default image if no preview is set
                        alt="User Avatar"
                      />
                    </label>
                    <input type="file" id="imageUpload" name="image" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
                    {/* Pencil icon - hidden by default */}
                    <DynamicHtmlTag type="div" className="position-absolute top-50 start-50 translate-middle p-2 bg-light rounded-circle pencil-icon">
                      <label htmlFor="imageUpload" className="text-primary" style={{ cursor: "pointer" }}>
                        <i className="bi bi-pencil-fill"></i> {/* Bootstrap Icons */}
                      </label>
                    </DynamicHtmlTag>
                  </DynamicHtmlTag>

                  <DynamicHtmlTag type="div">
                    <DynamicHtmlTag type="h4" className="mb-1">
                      {formData.fullName}
                    </DynamicHtmlTag>
                    <small className="text-body-secondary">PNG or JPG no bigger than 1000px wide and tall.</small>
                  </DynamicHtmlTag>
                </DynamicHtmlTag>
              </CustomCol>
            </CustomRow>

            {/* Form */}
            <CustomForm onSubmit={handleSubmit}>
              <CustomFormGroup className="mb-3">
                <CustomFormLabel>Full Name</CustomFormLabel>
                <CustomInput type="text" name="fullName" placeholder="Enter full name" value={formData.fullName} onChange={handleChange} />
              </CustomFormGroup>

              <CustomFormGroup className="mb-3">
                <CustomFormLabel>Email</CustomFormLabel>
                <CustomInput type="email" name="email" placeholder="Enter email address" value={formData.email} onChange={handleChange} />
              </CustomFormGroup>

              <CustomFormGroup className="mb-3">
                <CustomFormLabel>Bio</CustomFormLabel>
                <CustomInput type="textarea" name="bio" placeholder="Enter a brief bio" value={formData.bio} onChange={handleChange} />
              </CustomFormGroup>

              {/* Buttons */}
              <DynamicHtmlTag type="div" className="d-flex gap-2">
                <CustomButton variant="primary" type="submit" disabled={submitting}>
                  {submitting ? "Updating..." : "Update User"}
                </CustomButton>
                <CustomButton variant="secondary" type="button" onClick={() => navigate("/user")} disabled={submitting}>
                  Cancel
                </CustomButton>
              </DynamicHtmlTag>
            </CustomForm>
          </CustomCardBody>
        </CustomCard>
      </CustomCol>
    </CustomRow>
  );
};

export default EditUser;
