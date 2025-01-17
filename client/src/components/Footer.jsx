// React Router Imports
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="footer__categories">
        <li>
          <Link to="posts/categories/Action%20%26%20Advocacy">
            Action & Advocacy
          </Link>
        </li>
        <li>
          <Link to="posts/categories/Community%20Impact">Community Impact</Link>
        </li>
        <li>
          <Link to="posts/categories/Education%20%26%20Resources">
            Education & Resources
          </Link>
        </li>
        <li>
          <Link to="posts/categories/Events%20%26%20Fundraising">
            Events & Fundraising
          </Link>
        </li>
        <li>
          <Link to="posts/categories/Uncategorized">Uncategorized</Link>
        </li>
        <li>
          <Link to="posts/categories/Volunteer%20Stories">
            Volunteer Stories
          </Link>
        </li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()}. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
