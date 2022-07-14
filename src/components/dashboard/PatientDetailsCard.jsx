import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  PatientDetailsCardContainer,
  CardHeader,
  StatusBadge,
  CardGroupRow,
  ValueLabel,
  ValueText,
  CardFooter,
  Button,
  InputElement,
} from './style';

const PatientDetailsCard = () => {
  const selectedPatient = useSelector(
    ({ patients: { selectedPatient } }) => selectedPatient
  );
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => setEditMode(!editMode);

  return (
    <PatientDetailsCardContainer>
      <CardHeader>
        <h3>patient details</h3>
        <StatusBadge isActive={selectedPatient?.isActive}>
          {selectedPatient?.isActive ? 'Active' : 'Inactive'}
        </StatusBadge>
      </CardHeader>
      <CardGroupRow groupWidth={33.3}>
        <ValueLabel>First name:</ValueLabel>
        {editMode ? (
          <InputElement />
        ) : (
          <ValueText>{selectedPatient?.firstName}</ValueText>
        )}
      </CardGroupRow>
      <CardGroupRow groupWidth={33.3}>
        <ValueLabel>Last name:</ValueLabel>
        {editMode ? (
          <InputElement />
        ) : (
          <ValueText>{selectedPatient?.lastName}</ValueText>
        )}
      </CardGroupRow>
      <CardGroupRow groupWidth={33.4}>
        <ValueLabel>ahcccs id:</ValueLabel>
        {editMode ? (
          <InputElement />
        ) : (
          <ValueText>{selectedPatient?.ahcccsId}</ValueText>
        )}
      </CardGroupRow>

      <CardGroupRow groupWidth={100}>
        <ValueLabel>Pickup location name:</ValueLabel>
        {editMode ? (
          <InputElement />
        ) : (
          <ValueText>{selectedPatient?.locationName}</ValueText>
        )}
      </CardGroupRow>

      <CardGroupRow groupWidth={50}>
        <ValueLabel>Pickup location address:</ValueLabel>
        {editMode ? (
          <InputElement />
        ) : (
          <ValueText>{selectedPatient?.locationAddress1}</ValueText>
        )}
      </CardGroupRow>
      <CardGroupRow groupWidth={50}>
        <ValueLabel>Pick up city:</ValueLabel>
        {editMode ? (
          <InputElement />
        ) : (
          <ValueText>{selectedPatient?.city}</ValueText>
        )}
      </CardGroupRow>

      <CardGroupRow groupWidth={50}>
        <ValueLabel>Address 2:</ValueLabel>
        {editMode ? (
          <InputElement />
        ) : (
          <ValueText>
            {!selectedPatient?.locationAddress2
              ? 'N/A'
              : selectedPatient?.locationAddress2}
          </ValueText>
        )}
      </CardGroupRow>
      <CardGroupRow groupWidth={50}>
        <ValueLabel>Zipcode:</ValueLabel>
        {editMode ? (
          <InputElement />
        ) : (
          <ValueText>{selectedPatient?.zipCode}</ValueText>
        )}
      </CardGroupRow>

      <CardGroupRow groupWidth={50}>
        <ValueLabel>Patient contact number:</ValueLabel>
        {editMode ? (
          <InputElement />
        ) : (
          <ValueText>{selectedPatient?.phoneNumber}</ValueText>
        )}
      </CardGroupRow>
      <CardGroupRow groupWidth={50}>
        <ValueLabel>Patients prefered driver:</ValueLabel>
        {editMode ? (
          <InputElement />
        ) : (
          <ValueText>{selectedPatient?.prefferedDriver}</ValueText>
        )}
      </CardGroupRow>
      <CardGroupRow groupWidth={100}>
        <ValueLabel>Register Date:</ValueLabel>
        <ValueText>{selectedPatient?.registerDate?.toString()}</ValueText>
      </CardGroupRow>

      <CardFooter>
        {editMode ? (
          <>
            <Button>Update</Button>
            <Button onClick={toggleEditMode}>Cancel</Button>
          </>
        ) : (
          <>
            <Button>Deactivate</Button>
            <Button onClick={toggleEditMode}>Edit Patient</Button>
            <Button>Delete</Button>
          </>
        )}
      </CardFooter>
    </PatientDetailsCardContainer>
  );
};

export default PatientDetailsCard;
