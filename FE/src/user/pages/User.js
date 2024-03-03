import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Thanh",
      image: "https://a.cdn-hotels.com/gdcs/production2/d1963/0f6d0b5b-499c-4d1c-8995-1d2ea4f9a9a4.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
