import React, { useState } from "react";

// import { useDispatch } from "react-redux";
// import { loginAction } from "../../Redux/actions/authActions/authAction";
import PageHeading from "../pages/pageHeading";

const Login = () => {
  // const dispatch = useDispatch();
  // const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await dispatch(loginAction(user));
  };

  let message = {
    error: "",
  };

  return (
    <div className="login-container">
    <PageHeading>LOGIN</PageHeading>
      {message.error || message != null ? message.error : null}
      <div className="login-form-container">
        <h1 className="login-heading">Please Enter Your Credentials</h1>
        <form id="login-form" action="/login" method="post">
          <div id="login-overlay"></div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Ener your email"
            value={user.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="admin-login-button"
            onClick={handleSubmit}
          >
            login
          </button>
        </form>
        <p>*If you are not authorized to enter, do not attempt to proceed.</p>
      </div>
    </div>
  );
};

export default Login;
