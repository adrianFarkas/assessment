import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  padding: 10px;

  :hover {
    background: #f9f9f9;
  }
`;

const User = ({ id, first_name, last_name, created_at, status }) => {
  return (
    <Card to={`/edit/${id}`}>
      <div>{first_name}</div>
      <div>{last_name}</div>
      <div>{created_at}</div>
    </Card>
  );
};

export default User;
