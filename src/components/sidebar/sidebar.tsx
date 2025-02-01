import { useState } from "react";
import { FaHome, FaCog, FaChartPie, FaBars, FaUsers, FaClipboardList } from "react-icons/fa";
import { CustomNav, CustomNavLink, DynamicHtmlTag } from "components";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false); // State to toggle sidebar visibility
  const location = useLocation(); // Get current location/path
  const { t } = useTranslation();

  const toggleSidebar = () => {
    setCollapsed(!collapsed); // Toggle the collapsed state on hamburger click
    // Add class to main content for margin adjustment
    document.querySelector(".main-content")?.classList.toggle("sidebar-collapsed");
  };

  return (
    <DynamicHtmlTag
      type="div"
      className={`bg-light text-dark p-3 d-flex flex-column ${collapsed ? "collapsed" : ""}`}
      style={{
        width: collapsed ? "80px" : "250px",
        transition: "all 0.3s ease",
        position: "fixed",
        height: "100vh",
        overflowY: "auto",
      }}>
      <DynamicHtmlTag type="div" className="d-flex justify-content-between align-items-center mb-4">
        <DynamicHtmlTag type="h4" className={`mb-0 ${collapsed ? "d-none" : ""}`}>
          {t("sidebar.title")}
        </DynamicHtmlTag>
        <button className="btn btn-link" onClick={toggleSidebar} aria-label="Toggle Sidebar">
          <FaBars size={20} />
        </button>
      </DynamicHtmlTag>

      <CustomNav className="flex-column">
        <CustomNavLink href="/" className={`custom-nav-link ${location.pathname === "/" ? "active" : ""}`} style={{ pointerEvents: "auto" }}>
          <FaHome /> {!collapsed && <span>{t("sidebar.menu.dashboard")}</span>}
        </CustomNavLink>
        <CustomNavLink href="/user" className={`custom-nav-link ${location.pathname === "/user" ? "active" : ""}`} style={{ pointerEvents: "auto" }}>
          <FaUsers /> {!collapsed && <span>{t("sidebar.menu.users")}</span>}
        </CustomNavLink>
        <CustomNavLink
          href="/analytics"
          className={`custom-nav-link ${location.pathname === "/analytics" ? "active" : ""}`}
          style={{ pointerEvents: "auto" }}>
          <FaChartPie /> {!collapsed && <span>{t("sidebar.menu.analytics")}</span>}
        </CustomNavLink>
        <CustomNavLink
          href="/reports"
          className={`custom-nav-link ${location.pathname === "/reports" ? "active" : ""}`}
          style={{ pointerEvents: "auto" }}>
          <FaClipboardList /> {!collapsed && <span>{t("sidebar.menu.reports")}</span>}
        </CustomNavLink>
        <CustomNavLink
          href="/settings"
          className={`custom-nav-link ${location.pathname === "/settings" ? "active" : ""}`}
          style={{ pointerEvents: "auto" }}>
          <FaCog /> {!collapsed && <span>{t("sidebar.menu.settings")}</span>}
        </CustomNavLink>
      </CustomNav>
    </DynamicHtmlTag>
  );
};

export default Sidebar;
