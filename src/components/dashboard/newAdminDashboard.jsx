import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllPatients } from '../../redux/actions/patientActions';

const NewAdminDashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPatients());
  }, [dispatch]);
  return <div>newAdminDashboard</div>;
};

export default NewAdminDashboard;
