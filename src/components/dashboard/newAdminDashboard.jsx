import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPatients } from '../../redux/actions/patientActions';
import NewPatientModal from './NewPatientModal';
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
  PatientDetailsCard,
  CardGroupRow,
  ValueLabel,
  ValueText,
  CardHeader,
  CardFooter,
  StatusBadge,
} from './style';

const NewAdminDashboard = () => {
  const dispatch = useDispatch();

  const patientsList = useSelector(({ patients: { list } }) => list);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState({});

  // const notifiy = () => {
  //   toast('test');
  // };

  const toggleNewPatientModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(!isModalOpen);
    // notifiy();
  };

  const handleSelectPatientDetails = (patient) => {
    setSelectedPatient(patient);
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
                        onClick={() => handleSelectPatientDetails(patient)}
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
          <CardHeader>
            <h3>patient details</h3>
            <StatusBadge isActive={selectedPatient?.isActive}>
              {selectedPatient?.isActive ? 'Active' : 'Inactive'}
            </StatusBadge>
          </CardHeader>
          <PatientDetailsCard>
            <CardGroupRow groupWidth={33.3}>
              <ValueLabel>First name:</ValueLabel>
              <ValueText>{selectedPatient?.firstName}</ValueText>
            </CardGroupRow>
            <CardGroupRow groupWidth={33.3}>
              <ValueLabel>Last name:</ValueLabel>
              <ValueText>{selectedPatient?.lastName}</ValueText>
            </CardGroupRow>
            <CardGroupRow groupWidth={33.4}>
              <ValueLabel>ahcccs id:</ValueLabel>
              <ValueText>{selectedPatient?.ahcccsId}</ValueText>
            </CardGroupRow>

            <CardGroupRow groupWidth={100}>
              <ValueLabel>Pickup location name:</ValueLabel>
              <ValueText>{selectedPatient?.locationName}</ValueText>
            </CardGroupRow>

            <CardGroupRow groupWidth={50}>
              <ValueLabel>Pickup location address:</ValueLabel>
              <ValueText>{selectedPatient?.locationAddress1}</ValueText>
            </CardGroupRow>
            <CardGroupRow groupWidth={50}>
              <ValueLabel>Pick up city zip:</ValueLabel>
              <ValueText>{selectedPatient?.city}</ValueText>
            </CardGroupRow>

            <CardGroupRow groupWidth={50}>
              <ValueLabel>Address 2:</ValueLabel>
              <ValueText>
                {!selectedPatient?.locationAddress2
                  ? 'N/A'
                  : selectedPatient?.locationAddress2}
              </ValueText>
            </CardGroupRow>
            <CardGroupRow groupWidth={50}>
              <ValueLabel>Zipcode:</ValueLabel>
              <ValueText>{selectedPatient?.zipCode}</ValueText>
            </CardGroupRow>

            <CardGroupRow groupWidth={50}>
              <ValueLabel>Patient contact number:</ValueLabel>
              <ValueText>{selectedPatient?.phoneNumber}</ValueText>
            </CardGroupRow>
            <CardGroupRow groupWidth={50}>
              <ValueLabel>Patients prefered driver:</ValueLabel>
              <ValueText>{selectedPatient?.prefferedDriver}</ValueText>
            </CardGroupRow>
            <CardGroupRow groupWidth={100}>
              <ValueLabel>Register Date:</ValueLabel>
              <ValueText>{selectedPatient?.registerDate.toString()}</ValueText>
            </CardGroupRow>

            <CardFooter>
              <Button>Deactivate</Button>
              <Button>Edit Patient</Button>
              <Button>Delete</Button>
            </CardFooter>
          </PatientDetailsCard>
        </RightSideDetailsWrapper>
      </DashboardContainer>
    </>
  );
};

export default NewAdminDashboard;
