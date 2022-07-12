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
  ModalFormBody,
  ModalFooter,
  FormGroupRow,
  InputLabel,
  InputElement,
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
        <NewPatientModalContainer className="new-patient-modal">
          <ModalContentWrapper>
            <ModalHeader>
              <div>
                <h3>Add new patient</h3>
              </div>
              <div>
                <Button onClick={toggleNewPatientModal}>X</Button>
              </div>
            </ModalHeader>
            <ModalFormBody>
              <FormGroupRow width={33.3}>
                <InputLabel>First name:</InputLabel>
                <InputElement type="text" name="firstName" />
              </FormGroupRow>
              <FormGroupRow width={33.4}>
                <InputLabel>Last name:</InputLabel>
                <InputElement type="text" name="lastName" />
              </FormGroupRow>
              <FormGroupRow width={33.3}>
                <InputLabel>ACCCHS ID:</InputLabel>
                <InputElement type="text" name="accchsId" />
              </FormGroupRow>
              <FormGroupRow width={100}>
                <InputLabel>Pickup location name:</InputLabel>
                <InputElement type="text" name="locationName" />
              </FormGroupRow>
              <FormGroupRow width={50}>
                <InputLabel>Pickup address</InputLabel>
                <InputElement type="text" name="locationAddress1" />
              </FormGroupRow>
              <FormGroupRow width={50}>
                <InputLabel>City</InputLabel>
                <InputElement type="text" name="city" />
              </FormGroupRow>
              <FormGroupRow width={50}>
                <InputLabel>address 2</InputLabel>
                <InputElement type="text" name="locationAddress2" />
              </FormGroupRow>
              <FormGroupRow width={50}>
                <InputLabel>zip code</InputLabel>
                <InputElement type="text" name="zipCode" />
              </FormGroupRow>
              <FormGroupRow width={50}>
                <InputLabel>contact phone number</InputLabel>
                <InputElement type="text" name="phoneNumber" />
              </FormGroupRow>
              <FormGroupRow width={50}>
                <InputLabel>Prefferd Driver</InputLabel>
                <InputElement type="text" name="prefferedDriver" />
              </FormGroupRow>
            </ModalFormBody>
            <ModalFooter>
              <span>
                <Button>Cancel</Button>
              </span>
              <span>
                <Button>Submit</Button>
              </span>
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
