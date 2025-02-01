import { useState, useEffect } from "react";
import { FaHome, FaCog, FaChartPie, FaBars, FaUsers, FaClipboardList } from "react-icons/fa";
import { CustomNav, CustomLink, DynamicHtmlTag } from "components";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  // Initialize state from localStorage or default to false
  const [collapsed, setCollapsed] = useState(() => {
    const savedState = localStorage.getItem("sidebarCollapsed");
    return savedState ? JSON.parse(savedState) : false;
  });

  const location = useLocation();
  const { t } = useTranslation();

  // Update localStorage when collapsed state changes
  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", JSON.stringify(collapsed));
    // Update main content margin
    document.querySelector(".main-content")?.classList.toggle("sidebar-collapsed", collapsed);
  }, [collapsed]);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <DynamicHtmlTag
      type="div"
      className={`sidebar bg-light text-dark p-3 d-flex flex-column ${collapsed ? "sidebar-collapsed" : ""}`}
      style={{
        width: collapsed ? "80px" : "250px",
        minWidth: collapsed ? "80px" : "250px",
        transition: "width 0.3s ease, min-width 0.3s ease",
        height: "100vh",
        overflowY: "auto",
        left: 0,
        top: 0,
        zIndex: 1000,
      }}>
      <DynamicHtmlTag type="div" className="d-flex justify-content-between align-items-center mb-4">
        {!collapsed && (
          <DynamicHtmlTag type="h4" className="mb-0">
            {t("sidebar.title")}
          </DynamicHtmlTag>
        )}
        <button className="btn btn-link p-0" onClick={toggleSidebar} aria-label="Toggle Sidebar">
          <FaBars size={20} />
        </button>
      </DynamicHtmlTag>

      <CustomNav className="flex-column">
        <CustomLink to="/" className={`custom-nav-link ${location.pathname === "/" ? "active" : ""}`}>
          <FaHome />
          {!collapsed && <span>{t("sidebar.menu.dashboard")}</span>}
        </CustomLink>
        <CustomLink to="/user" className={`custom-nav-link ${location.pathname === "/user" ? "active" : ""}`}>
          <FaUsers />
          {!collapsed && <span>{t("sidebar.menu.users")}</span>}
        </CustomLink>
        <CustomLink to="/analytics" className={`custom-nav-link ${location.pathname === "/analytics" ? "active" : ""}`}>
          <FaChartPie />
          {!collapsed && <span>{t("sidebar.menu.analytics")}</span>}
        </CustomLink>
        <CustomLink to="/reports" className={`custom-nav-link ${location.pathname === "/reports" ? "active" : ""}`}>
          <FaClipboardList />
          {!collapsed && <span>{t("sidebar.menu.reports")}</span>}
        </CustomLink>
        <CustomLink to="/settings" className={`custom-nav-link ${location.pathname === "/settings" ? "active" : ""}`}>
          <FaCog />
          {!collapsed && <span>{t("sidebar.menu.settings")}</span>}
        </CustomLink>
      </CustomNav>
    </DynamicHtmlTag>
  );
};

export default Sidebar;
