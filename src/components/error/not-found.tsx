import { useNavigate } from "react-router-dom";
import { DynamicHtmlTag, CustomButton } from "components";

const Error = () => {
  const navigate = useNavigate();

  return (
    <DynamicHtmlTag type="div" className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <DynamicHtmlTag type="div" className="text-center">
        <DynamicHtmlTag type="h1" className="display-1 font-weight-bold">
          Oops! Page not found? 🙄
        </DynamicHtmlTag>
        <CustomButton type="button" onClick={() => navigate("/")} className="btn btn-primary">
          <DynamicHtmlTag type="span">Go to Homepage</DynamicHtmlTag>
        </CustomButton>
      </DynamicHtmlTag>
    </DynamicHtmlTag>
  );
};

export default Error;
