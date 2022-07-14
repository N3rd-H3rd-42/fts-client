import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/authActions";
import PageHeading from "../pages/pageHeading";

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const isAuthenticated = useSelector(({ auth: { isAuthenticated }}) => isAuthenticated);

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

    dispatch(loginAction(user));
  };

  let message = {
    error: "",
  };

  useEffect(() => {
    if (isAuthenticated) history.push("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <div className="login-container">
      <PageHeading>LOGIN</PageHeading>
      {message.error || message != null ? message.error : null}
      <div className="login-form-container">
        <h1 className="login-heading">Please Enter Your Credentials</h1>
          This portal is for Administrator use only. If you have trouble logging
        <p>
        <form id="login-form" action="/login" method="post">
          <div id="login-overlay"></div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Ener your username"
            value={user.username}
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
