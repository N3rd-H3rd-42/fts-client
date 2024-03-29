import React from "react";
import { useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";
import AdminDashboard from "../components/dashboard";

const Dashboard = () => {
  const isAuthenitcated = useSelector(({ auth: { isAuthenticated }}) => isAuthenticated);

  if (!isAuthenitcated) {
    return <Navigate to={'/login'} replace />
  } else {
    return <AdminDashboard />;
  }
};

export default Dashboard;
