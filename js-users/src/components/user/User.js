import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faLockOpen, faLock } from "@fortawesome/free-solid-svg-icons";
import { updateUser } from "utils/dataHandler";
import { RootContext } from "contexts/RootContext";

const Card = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: default;
  text-decoration: ${props => props.locked && "line-through"};
  :hover {
    background: #f9f9f9;
  }
`;

const User = ({ id, first_name, last_name, created_at, status }) => {
  const { dispatch } = useContext(RootContext);

  const setStatus = () => {
    const newStatus = status === "active" ? "locked" : "active";
    updateUser(id, { status: newStatus }).then(() =>
      dispatch({ type: "UPDATE_STATUS", payload: { id, status: newStatus } })
    );
  };

  const icon = status === "active" ? faLockOpen : faLock;

  return (
    <Card locked={status === "locked"}>
      <div>{first_name}</div>
      <div>{last_name}</div>
      <div>{created_at}</div>
      <div>
        <div onClick={setStatus}>
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
    </Card>
  );
};

export default User;
