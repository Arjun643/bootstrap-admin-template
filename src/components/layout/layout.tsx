import { Outlet } from "react-router-dom";
import { Header, Menu, DynamicHtmlTag } from "components";

export default function Layout() {
  return (
    <DynamicHtmlTag type="div" id="rootContainer" className="w-100 p-0 m-0 min-vh-100 d-flex flex-column">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <DynamicHtmlTag type="div" className="d-flex flex-grow-1 layoutheightManage">
        {/* Sidebar */}
        <DynamicHtmlTag type="div" className="layoutSidebarManage">
          <Menu />
        </DynamicHtmlTag>

        {/* Main Content */}
        <DynamicHtmlTag type="div" className="header-sidebar-scrollManage">
          <Outlet />
        </DynamicHtmlTag>
      </DynamicHtmlTag>
    </DynamicHtmlTag>
  );
}
