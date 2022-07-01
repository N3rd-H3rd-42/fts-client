import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";


export const ProtectedRoute = ({ component: Component, ...rest }) => {
  // const { token } = useSelector(state => state.auth)

  // const isAuth = () => {
  //   let token = localStorage.getItem("token")
  //   return token
  // };

  const isAuthenitcated = useSelector(({ auth: { isAuthenitcated }}) => isAuthenitcated);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenitcated) {
          return <Component {...props} />;
        } else {
          return (
            <div>fail</div>
          );
        }
      }}
    />
  );
};
