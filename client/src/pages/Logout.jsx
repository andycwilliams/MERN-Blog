// React Imports
import { useContext } from "react";
// React Router Imports
import { useNavigate } from "react-router-dom";
// Context Imports
import { UserContext } from "../context/userContext";

const Logout = () => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  setCurrentUser(null);
  navigate("/login");
  return <></>;
};

export default Logout;
