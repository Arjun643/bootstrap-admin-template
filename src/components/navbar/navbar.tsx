import { Dropdown } from "react-bootstrap";
import { FaBell, FaGlobe } from "react-icons/fa";
import { CustomImage, DynamicHtmlTag } from "components";
import { setLocalStorageData, clearLocalStorageData, getLocalStorageData } from "utility";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const navigate = useNavigate();
  const adminUserData = getLocalStorageData("loginData", null);
  const { t, i18n } = useTranslation();

  const handleLogout = () => {
    setLocalStorageData("isLoggedIn", "false");
    clearLocalStorageData("loginData");
    navigate("/login");
  };

  const getInitials = (firstName?: string, lastName?: string) => {
    if (!firstName && !lastName) return "AD";
    return `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`;
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLocalStorageData("language", lng);
  };

  const getCurrentLanguage = () => {
    return i18n.language === "hi" ? "हि" : "EN";
  };

  return (
    <nav className="navbar">
      <DynamicHtmlTag type="div" className="navbar-brand">
        {t("navbar.dashboard")}
      </DynamicHtmlTag>

      <div className="navbar-right">
        <Dropdown align="end" className="me-3">
          <Dropdown.Toggle variant="link" className="language-switcher">
            <FaGlobe size={16} />
            <span className="current-lang">{getCurrentLanguage()}</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => changeLanguage("en")} active={i18n.language === "en"} className="d-flex align-items-center">
              <span className="lang-code">EN</span>
              English
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage("hi")} active={i18n.language === "hi"} className="d-flex align-items-center">
              <span className="lang-code">हि</span>
              हिंदी
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="notification-badge">
          <FaBell size={20} />
          <span className="badge">3</span>
        </div>

        <Dropdown align="end">
          <Dropdown.Toggle variant="link" className="admin-profile p-0 border-0">
            <div className="profile-info">
              <p className="admin-name">
                {adminUserData?.firstName} {adminUserData?.lastName}
              </p>
              <p className="admin-role">{t("navbar.profile.admin")}</p>
            </div>
            <div className="profile-image">
              {adminUserData?.image ? (
                <CustomImage src={adminUserData.image} alt="Profile" className="rounded-circle" width={40} height={40} />
              ) : (
                <span>{getInitials(adminUserData?.firstName, adminUserData?.lastName)}</span>
              )}
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu className="p-3 shadow-sm border-0 rounded-3">
            <div className="text-center mb-3">
              <div className="profile-image mx-auto mb-2">
                {adminUserData?.image ? (
                  <CustomImage src={adminUserData.image} alt="Profile" className="rounded-circle" width={80} height={80} />
                ) : (
                  <span>{getInitials(adminUserData?.firstName, adminUserData?.lastName)}</span>
                )}
              </div>
              <h6 className="fw-bold mb-0">
                {adminUserData?.firstName} {adminUserData?.lastName}
              </h6>
              <small className="text-muted">{t("navbar.profile.admin")}</small>
            </div>

            <Dropdown.Item className="d-flex align-items-center" onClick={() => navigate("/settings")}>
              <i className="bi bi-gear me-2"></i>
              {t("navbar.profile.settings")}
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item className="d-flex align-items-center text-danger" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right me-2"></i>
              {t("navbar.profile.logout")}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
