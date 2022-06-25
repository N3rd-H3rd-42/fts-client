import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

const ClientEdit = (props) => {
  return (
    <Edit title="Edit a Client" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="email" />
        {/* <DateInput label="Published" source="PublishedAt" /> */}
      </SimpleForm>
    </Edit>
  );
};

export default ClientEdit;
