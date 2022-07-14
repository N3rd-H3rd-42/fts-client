import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePatientDetails } from '../../redux/actions/patientActions';
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
  const dispatch = useDispatch();
  const selectedPatient = useSelector(
    ({ patients: { selectedPatient } }) => selectedPatient
  );
  const [editMode, setEditMode] = useState(false);
  const [formVaules, setFormValues] = useState({});

  const toggleEditMode = () => {
    setFormValues({});
    setEditMode(!editMode);
  };

  const handleInputChange = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sumbitUpdatePatientDetails = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (selectedPatient?._id) {
      dispatch(updatePatientDetails(selectedPatient._id, formVaules));
      setEditMode(false);
    }
  };

  return selectedPatient?._id ? (
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
          <InputElement
            name="firstName"
            onChange={handleInputChange}
            value={
              formVaules?.firstName !== undefined
                ? formVaules?.firstName
                : selectedPatient?.firstName
            }
          />
        ) : (
          <ValueText>{selectedPatient?.firstName}</ValueText>
        )}
      </CardGroupRow>
      <CardGroupRow groupWidth={33.3}>
        <ValueLabel>Last name:</ValueLabel>
        {editMode ? (
          <InputElement
            name="lastName"
            onChange={handleInputChange}
            value={
              formVaules?.lastName !== undefined
                ? formVaules?.lastName
                : selectedPatient?.lastName
            }
          />
        ) : (
          <ValueText>{selectedPatient?.lastName}</ValueText>
        )}
      </CardGroupRow>
      <CardGroupRow groupWidth={33.4}>
        <ValueLabel>ahcccs id:</ValueLabel>
        {editMode ? (
          <InputElement
            name="ahcccsId"
            onChange={handleInputChange}
            value={
              formVaules?.ahcccsId !== undefined
                ? formVaules?.ahcccsId
                : selectedPatient?.ahcccsId
            }
          />
        ) : (
          <ValueText>{selectedPatient?.ahcccsId}</ValueText>
        )}
      </CardGroupRow>

      <CardGroupRow groupWidth={100}>
        <ValueLabel>Pickup location name:</ValueLabel>
        {editMode ? (
          <InputElement
            name="locationName"
            onChange={handleInputChange}
            value={
              formVaules?.locationName !== undefined
                ? formVaules?.locationName
                : selectedPatient?.locationName
            }
          />
        ) : (
          <ValueText>{selectedPatient?.locationName}</ValueText>
        )}
      </CardGroupRow>

      <CardGroupRow groupWidth={50}>
        <ValueLabel>Pickup location address:</ValueLabel>
        {editMode ? (
          <InputElement
            name="locationAddress1"
            onChange={handleInputChange}
            value={
              formVaules?.locationAddress1 !== undefined
                ? formVaules?.locationAddress1
                : selectedPatient?.locationAddress1
            }
          />
        ) : (
          <ValueText>{selectedPatient?.locationAddress1}</ValueText>
        )}
      </CardGroupRow>
      <CardGroupRow groupWidth={50}>
        <ValueLabel>Pick up city:</ValueLabel>
        {editMode ? (
          <InputElement
            name="city"
            onChange={handleInputChange}
            value={
              formVaules?.city !== undefined
                ? formVaules?.city
                : selectedPatient?.city
            }
          />
        ) : (
          <ValueText>{selectedPatient?.city}</ValueText>
        )}
      </CardGroupRow>

      <CardGroupRow groupWidth={50}>
        <ValueLabel>Address 2:</ValueLabel>
        {editMode ? (
          <InputElement
            name="locationAddress2"
            onChange={handleInputChange}
            value={
              formVaules?.locationAddress2 !== undefined
                ? formVaules?.locationAddress2
                : selectedPatient?.locationAddress2
            }
          />
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
          <InputElement
            name="zipCode"
            onChange={handleInputChange}
            value={
              formVaules?.zipCode !== undefined
                ? formVaules?.zipCode
                : selectedPatient?.zipCode
            }
          />
        ) : (
          <ValueText>{selectedPatient?.zipCode}</ValueText>
        )}
      </CardGroupRow>

      <CardGroupRow groupWidth={50}>
        <ValueLabel>Patient contact number:</ValueLabel>
        {editMode ? (
          <InputElement
            name="phoneNumber"
            onChange={handleInputChange}
            value={
              formVaules?.phoneNumber !== undefined
                ? formVaules?.phoneNumber
                : selectedPatient?.phoneNumber
            }
          />
        ) : (
          <ValueText>{selectedPatient?.phoneNumber}</ValueText>
        )}
      </CardGroupRow>
      <CardGroupRow groupWidth={50}>
        <ValueLabel>Patients prefered driver:</ValueLabel>
        {editMode ? (
          <InputElement
            name="prefferedDriver"
            onChange={handleInputChange}
            value={
              formVaules?.prefferedDriver !== undefined
                ? formVaules?.prefferedDriver
                : selectedPatient?.prefferedDriver
            }
          />
        ) : (
          <ValueText>{selectedPatient?.prefferedDriver}</ValueText>
        )}
      </CardGroupRow>
      <CardGroupRow groupWidth={100}>
        <ValueLabel>Register Date:</ValueLabel>
        <ValueText>
          {new Date(selectedPatient?.registerDate).toDateString()}
        </ValueText>
      </CardGroupRow>

      <CardFooter>
        {editMode ? (
          <>
            <Button onClick={sumbitUpdatePatientDetails}>Update</Button>
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
  ) : (
    <div>
      <h3>Select patient to view details</h3>
    </div>
  );
};

export default PatientDetailsCard;
