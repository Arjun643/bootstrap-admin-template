import {
  getLocalStorageData,
  setLocalStorageData,
  clearLocalStorageData,
  loginApi,
  LoginDetailsError,
  ApiError,
  ValidationError,
  ValidationErrorItem,
} from "utility";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "utility";
import "./login.scss";

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
          (acc: LoginDetailsError, { path, message }: ValidationErrorItem) => (path ? { ...acc, [path]: message } : acc),
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
    <div className="login-container">
      <div className="login-card">
        <div className="login-illustration">
          <img src="./images/login-image.jpg" alt="Login illustration" />
        </div>

        <div className="login-form-section">
          <h1 className="login-title">Login to Dashboard</h1>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email Address"
                name="username"
                value={loginCredentials.username}
                onChange={onFieldChange}
              />
              {errors.username && <div className="text-danger">{errors.username}</div>}
            </div>

            <div className="form-group">
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={loginCredentials.password}
                  onChange={onFieldChange}
                />
                <span
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowPassword(!showPassword)}>
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-muted" />
                </span>
              </div>
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="login-btn">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
