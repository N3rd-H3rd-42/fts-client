import React from "react";
import { Admin } from "react-admin";
import restProvider from "ra-data-simple-rest";
// import PostList from './PostList';
// import PostCreate from './PostCreate';
// import PostEdit from './PostEdit';
// import ClientList from './ClientList';
// import ClientEdit from './ClientEdit';
// import ClientCreate from './ClientCreate';

const AdminDashboard = () => {
  return (
    <Admin dataProvider={restProvider("http://localhost:8080")}>
      {/* <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} /> */}
      {/* <Resource name="clients" list={ClientList} create={ClientCreate} edit={ClientEdit} /> */}
    </Admin>
  );
};

export default AdminDashboard;
