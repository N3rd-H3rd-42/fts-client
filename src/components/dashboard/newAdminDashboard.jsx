import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPatients } from '../../redux/actions/patientActions';

import { DashboardContainer } from './style';

const NewAdminDashboard = () => {
  const patientsList = useSelector(({ patients: { list }}) => list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPatients());
  }, [dispatch]);



  return (
    <DashboardContainer>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>ahcccs id</th>
            <th>phone #</th>
          </tr>
        </thead>
        <tbody>
          {patientsList.map((patient, index) => {
            const { firstName, lastName, phoneNumber, ahcccsId } = patient;
            return (
              <tr>
                <td>{`${firstName} ${lastName}`}</td>
                <td>{ahcccsId}</td>
                <td>{phoneNumber}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </DashboardContainer>
  );
};

export default NewAdminDashboard;
