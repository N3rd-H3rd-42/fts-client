import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewPatient } from '../../redux/actions/patientActions';
import {
  NewPatientModalContainer,
  ModalContentWrapper,
  ModalHeader,
  ModalFormBody,
  ModalFooter,
  FormGroupRow,
  InputLabel,
  InputElement,
  Button,
} from './style';

const NewPatientModal = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({});

  const onChangeHandler = (e) => {
    setFormValues((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(createNewPatient({ ...formValues }));
  };

  return isOpen ? (
    <NewPatientModalContainer className="new-patient-modal">
      <ModalContentWrapper>
        <ModalHeader>
          <div>
            <h3>Add new patient</h3>
          </div>
          <div>
            <Button onClick={setIsOpen}>X</Button>
          </div>
        </ModalHeader>
        <ModalFormBody>
          <FormGroupRow width={33.3}>
            <InputLabel>First name:</InputLabel>
            <InputElement
              type="text"
              name="firstName"
              onChange={onChangeHandler}
            />
          </FormGroupRow>
          <FormGroupRow width={33.4}>
            <InputLabel>Last name:</InputLabel>
            <InputElement
              type="text"
              name="lastName"
              onChange={onChangeHandler}
            />
          </FormGroupRow>
          <FormGroupRow width={33.3}>
            <InputLabel>AHCCCS ID:</InputLabel>
            <InputElement
              type="text"
              name="ahcccsId"
              onChange={onChangeHandler}
            />
          </FormGroupRow>
          <FormGroupRow width={100}>
            <InputLabel>Pickup location name:</InputLabel>
            <InputElement
              type="text"
              name="locationName"
              onChange={onChangeHandler}
            />
          </FormGroupRow>
          <FormGroupRow width={50}>
            <InputLabel>Pickup address</InputLabel>
            <InputElement
              type="text"
              name="locationAddress1"
              onChange={onChangeHandler}
            />
          </FormGroupRow>
          <FormGroupRow width={50}>
            <InputLabel>City</InputLabel>
            <InputElement type="text" name="city" onChange={onChangeHandler} />
          </FormGroupRow>
          <FormGroupRow width={50}>
            <InputLabel>address 2</InputLabel>
            <InputElement
              type="text"
              name="locationAddress2"
              onChange={onChangeHandler}
            />
          </FormGroupRow>
          <FormGroupRow width={50}>
            <InputLabel>zip code</InputLabel>
            <InputElement
              type="text"
              name="zipCode"
              onChange={onChangeHandler}
            />
          </FormGroupRow>
          <FormGroupRow width={50}>
            <InputLabel>contact phone number</InputLabel>
            <InputElement
              type="text"
              name="phoneNumber"
              onChange={onChangeHandler}
            />
          </FormGroupRow>
          <FormGroupRow width={50}>
            <InputLabel>Prefferd Driver</InputLabel>
            <InputElement
              type="text"
              name="prefferedDriver"
              onChange={onChangeHandler}
            />
          </FormGroupRow>
        </ModalFormBody>
        <ModalFooter>
          <span>
            <Button onClick={setIsOpen}>Cancel</Button>
          </span>
          <span>
            <Button onClick={handleSubmit}>Submit</Button>
          </span>
        </ModalFooter>
      </ModalContentWrapper>
    </NewPatientModalContainer>
  ) : null;
};

export default NewPatientModal;
