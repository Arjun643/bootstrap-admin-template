import { getLocalStorageData, setLocalStorageData, clearLocalStorageData, loginApi, LoginDetailsError, ApiError, ValidationError, ValidationErrorItem } from "utility";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { CustomForm, CustomFormLabel, CustomLink, DynamicHtmlTag, CustomInput } from "components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "utility";


export default function Login() {
  const navigate = useNavigate();

  const loginUserData = getLocalStorageData("loginData", null);

  const [loginCredentials, setLoginCredentials] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState<LoginDetailsError>({});
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginCredentials(prevState => ({ ...prevState, [name]: value }));
    setErrors(prevState => ({ ...prevState, [name]: "" }));
  };

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      await loginSchema.validate(loginCredentials, { abortEarly: false });
      const response = await loginApi(loginCredentials);
      if (response.message) {
        toast.success(response.message);
      }
      setLocalStorageData("loginData", response);
      if (rememberMe) {
        setLocalStorageData("remember-me", loginCredentials);
      } else {
        clearLocalStorageData("remember-me");
      }
      navigate("/");
    } catch (err) {
      if ((err as ApiError).response?.data?.message) {
        toast.error((err as ApiError).response.data.message);
      } else if ((err as ValidationError).inner) {
        const validationErrors = (err as ValidationError).inner.reduce(
          (acc: LoginDetailsError, { path, message }: ValidationErrorItem) => 
            path ? { ...acc, [path]: message } : acc,
          {}
        );
        setErrors(validationErrors);
      }
    } finally {
    }
  };

  useEffect(() => {
    if (loginUserData) {
      navigate("/");
    }
  }, [navigate, loginUserData]);

  return (
    <DynamicHtmlTag type="div">
      <DynamicHtmlTag type="div" className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <DynamicHtmlTag type="div" className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "10px" }}>
          <DynamicHtmlTag type="div" className="text-center mb-4">
            <DynamicHtmlTag type="h3" className="fw-bold">
              Welcome Back
            </DynamicHtmlTag>
            <DynamicHtmlTag type="p" className="text-muted">
              Access your Exiliensoft Admin Dashboard
            </DynamicHtmlTag>
          </DynamicHtmlTag>
          <CustomForm onSubmit={handleLogin}>
            {/* Email Field */}
            <DynamicHtmlTag type="div" className="mb-3">
              <CustomFormLabel htmlFor="username" className="form-label">
                User Name
              </CustomFormLabel>
              <CustomInput
                type="text"
                id="username"
                name="username"
                value={loginCredentials.username}
                onChange={onFieldChange}
                placeholder="username"
                className="form-control"
              />
              {errors.username && <div className="text-danger">{errors.username}</div>}
            </DynamicHtmlTag>

            {/* Password Field */}
            <DynamicHtmlTag type="div" className="mb-3">
              <CustomFormLabel htmlFor="password" className="form-label">
                Password
              </CustomFormLabel>
              <div style={{ position: "relative" }}>
                <CustomInput
                  type={showPassword ? "text" : "password"}
                  value={loginCredentials.password}
                  onChange={onFieldChange}
                  id="password"
                  name="password"
                  className="form-control pr-5"
                  placeholder="Enter your password"
                />
                <DynamicHtmlTag
                  type="span"
                  className="cursor-pointer eye-icon-cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)} 
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-muted" />
                </DynamicHtmlTag>
              </div>
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </DynamicHtmlTag>

            {/* Remember Me and Forgot Password */}
            <DynamicHtmlTag type="div" className="d-flex justify-content-between align-items-center mb-3">
              <DynamicHtmlTag type="div" className="form-check">
                <CustomInput type="checkbox" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} className="form-check-input" />
                <CustomFormLabel htmlFor="rememberMe" className="form-check-label">
                  Remember Me
                </CustomFormLabel>
              </DynamicHtmlTag>
              <CustomLink to="#" className="text-decoration-none text-primary">
                Forgot Password?
              </CustomLink>
            </DynamicHtmlTag>

            {/* Login Button */}
            <DynamicHtmlTag type="div" className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </DynamicHtmlTag>
          </CustomForm>
        </DynamicHtmlTag>
      </DynamicHtmlTag>
    </DynamicHtmlTag>
  );
}
