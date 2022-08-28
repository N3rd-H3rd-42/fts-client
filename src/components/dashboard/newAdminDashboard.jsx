import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPatients,
  getSinglePatientDetails,
} from "../../redux/actions/patientActions";
import {
  getAllRides,
  getSingleRideDetails,
} from "../../redux/actions/rideRequestActions";
import NewPatientModal from "./NewPatientModal";
import PatientDetailsCard from "./PatientDetailsCard";
// import { toast } from 'react-toastify';

import {
  DashboardContainer,
  TopNavWrapper,
  MainCenterWrapper,
  RightSideDetailsWrapper,
  InputElement,
  Table,
  Thead,
  TableHead,
  TableBody,
  BodyRow,
  BodyCell,
  Button,
} from "./style";

const NewAdminDashboard = () => {
  const dispatch = useDispatch();

  // const rideRequestList = useSelector(({ rides: {list } }) => list);
  const patientsList = useSelector(({ patients: { list } }) => list);
  const selectedList = "";
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
    dispatch(getSinglePatientDetails(patientId));
  };

  const handleSelectRideDetails = (rideId) => {
    dispatch(getSingleRideDetails(rideId));
  };

  useEffect(() => {
    dispatch(getAllPatients());
    dispatch(getAllRides());
  }, [dispatch]);

  return (
    <>
      {/* <ToastContainer position='bottom-right' newestOnTop /> */}
        <TopNavWrapper>
          <Button onClick={''}>Patients</Button>
          <Button onClick={''}>Rides</Button>
        </TopNavWrapper>
      <NewPatientModal isOpen={isModalOpen} setIsOpen={toggleNewPatientModal} />
      <DashboardContainer>
        <MainCenterWrapper>
          <Table>
            <TableHead>
              <BodyRow>
                <Thead>NAME</Thead>
                <Thead>AHCCCS ID</Thead>
                <Thead>PHONE #</Thead>
                <Thead>
                  <Button onClick={toggleNewPatientModal}>
                    Add New Patient
                  </Button>
                </Thead>
                <Thead>
                  <InputElement
                    type="search"
                    placeholder="Enter patients name..."
                  />
                  <Button>Search</Button>
                </Thead>
              </BodyRow>
            </TableHead>
            <TableBody>
              {patientsList.map((patient, index) => {
                const { firstName, lastName, phoneNumber, ahcccsId } = patient;
                return (
                  <BodyRow key={index}>
                    <BodyCell>{`${firstName} ${lastName}`}</BodyCell>
                    <BodyCell>{ahcccsId}</BodyCell>
                    <BodyCell>{phoneNumber}</BodyCell>
                    <BodyCell></BodyCell>
                    <BodyCell></BodyCell>
                    <BodyCell></BodyCell>
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
