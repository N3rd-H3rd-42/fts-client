import React from 'react';
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
} from './style';

const PatientDetailsCard = () => {
  const selectedPatient = useSelector(({ patients: { selectedPatient }}) => selectedPatient)

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
        <ValueText>{selectedPatient?.registerDate?.toString()}</ValueText>
      </CardGroupRow>

      <CardFooter>
        <Button>Deactivate</Button>
        <Button>Edit Patient</Button>
        <Button>Delete</Button>
      </CardFooter>
    </PatientDetailsCardContainer>
  );
};

export default PatientDetailsCard;
