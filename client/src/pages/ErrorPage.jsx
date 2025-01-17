// React Router Imports
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="error-page">
      <div className="center">
        <Link to="/" className="btn primary">
          Return to Home Page
        </Link>
        <h2>Page Not Found</h2>
      </div>
    </section>
  );
};

export default ErrorPage;
