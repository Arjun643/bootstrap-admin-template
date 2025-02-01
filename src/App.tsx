import { RouterProvider } from "react-router-dom";
import { Router } from "./routes";
import { ToastContainer } from "react-toastify";
import "./i18n";
import "./styles/style.scss";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={Router} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        style={{ zIndex: 999999999 }}
      />
    </ThemeProvider>
  );
}
