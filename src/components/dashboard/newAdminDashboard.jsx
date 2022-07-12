import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPatients } from '../../redux/actions/patientActions';

import {
  DashboardContainer,
  LeftSideNavWrapper,
  MainCenterWrapper,
  RightSideDetailsWrapper,
  Table,
  TableHead,
  TableBody,
  BodyRow,
  BodyCell,
  Button,
  NewPatientModalContainer,
  ModalContentWrapper,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from './style';

const NewAdminDashboard = () => {
  const dispatch = useDispatch();

  const patientsList = useSelector(({ patients: { list } }) => list);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleNewPatientModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    dispatch(getAllPatients());
  }, [dispatch]);

  return (
    <>
      {isModalOpen && (
        <NewPatientModalContainer>
          <ModalContentWrapper>
            <ModalHeader>
              <div>
                <h3>Add new patient</h3>
              </div>
              <div>
                <Button onClick={toggleNewPatientModal}>X</Button>
              </div>
            </ModalHeader>
            <ModalBody>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContentWrapper>
        </NewPatientModalContainer>
      )}
      <DashboardContainer>
        <LeftSideNavWrapper>
          <h1>Coming soon?</h1>
          <Button onClick={toggleNewPatientModal}>Add new patient</Button>
        </LeftSideNavWrapper>
        <MainCenterWrapper>
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
        </MainCenterWrapper>
        <RightSideDetailsWrapper>
          <h3>details</h3>
        </RightSideDetailsWrapper>
      </DashboardContainer>
    </>
  );
};

export default NewAdminDashboard;
