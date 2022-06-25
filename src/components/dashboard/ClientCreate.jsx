import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

const ClientCreate = (props) => {
  return (
    <Create title="Create a Client" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="PublishedAt" />
      </SimpleForm>
    </Create>
  );
};

export default ClientCreate;
