import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPatients } from '../../redux/actions/patientActions';

import {
  DashboardContainer,
  Table,
  TableHead,
  TableBody,
  BodyRow,
  BodyCell,
} from './style';

const NewAdminDashboard = () => {
  const patientsList = useSelector(({ patients: { list } }) => list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPatients());
  }, [dispatch]);

  return (
    <DashboardContainer>
      <Table>
        <TableHead>
          <tr>
            <th>name</th>
            <th>ahcccs id</th>
            <th>phone #</th>
          </tr>
        </TableHead>
        <TableBody>
          {patientsList.map((patient, index) => {
            const { firstName, lastName, phoneNumber, ahcccsId } = patient;
            return (
              <BodyRow key={index}>
                <BodyCell>{`${firstName} ${lastName}`}</BodyCell>
                <BodyCell>{ahcccsId}</BodyCell>
                <BodyCell>{phoneNumber}</BodyCell>
              </BodyRow>
            );
          })}
        </TableBody>
      </Table>
    </DashboardContainer>
  );
};

export default NewAdminDashboard;
