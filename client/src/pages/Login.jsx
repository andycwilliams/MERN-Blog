// React Imports
import { useContext, useState } from "react";
// React Router Imports
import { Link, useNavigate } from "react-router-dom";
// Axios Import
import axios from "axios";
// Context Imports
import { UserContext } from "../context/userContext";


const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/login`,
        userData
      );
      const user = await response.data;
      console.log(user);
      setCurrentUser(user);
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form login__form" onSubmit={loginUser}>
          {error && <div className="form__error-message">{error}</div>}
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
          <button type="submit" className="btn primary">
            Log In
          </button>
          <small>
            Don't have an account? <Link to="/register">Sign up</Link>
          </small>
        </form>
      </div>
    </section>
  );
};

export default Login;
