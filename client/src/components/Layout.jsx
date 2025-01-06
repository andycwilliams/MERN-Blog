// React Router Imports
import { Outlet } from "react-router-dom";
// Component Imports
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
