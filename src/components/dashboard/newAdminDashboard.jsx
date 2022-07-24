import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPatients, getSinglePatientDetails } from '../../redux/actions/patientActions';
import NewPatientModal from './NewPatientModal';
import PatientDetailsCard from './PatientDetailsCard';
// import { toast } from 'react-toastify';

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
} from './style';

const NewAdminDashboard = () => {
  const dispatch = useDispatch();

  const patientsList = useSelector(({ patients: { list } }) => list);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const notifiy = () => {
  //   toast('test');
  // };

  const toggleNewPatientModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(!isModalOpen);
    // notifiy();
  };

  const handleSelectPatientDetails = (patientId) => {
    dispatch(getSinglePatientDetails(patientId))
  };

  useEffect(() => {
    dispatch(getAllPatients());
  }, [dispatch]);

  return (
    <>
      {/* <ToastContainer position='bottom-right' newestOnTop /> */}
      <NewPatientModal isOpen={isModalOpen} setIsOpen={toggleNewPatientModal} />
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
                <th></th>
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
                    <BodyCell>
                      <Button
                        onClick={() => handleSelectPatientDetails(patient._id)}
                      >
                        View Details
                      </Button>
                    </BodyCell>
                  </BodyRow>
                );
              })}
            </TableBody>
          </Table>
        </MainCenterWrapper>
        <RightSideDetailsWrapper>
          <PatientDetailsCard />
        </RightSideDetailsWrapper>
      </DashboardContainer>
    </>
  );
};

export default NewAdminDashboard;
