import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  EmailField,
  DeleteButton,
} from "react-admin";

const ClientList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        {/* API Path goes into basePath */}
        <EditButton basePath="/clients" />
        <DeleteButton basePath="/clients" />
      </Datagrid>
    </List>
  );
};

export default ClientList;
