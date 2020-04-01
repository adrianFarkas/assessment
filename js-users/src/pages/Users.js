import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import useQueryParams from "hooks/useQueryParams";
import { getUsers } from "utils/dataHandler";
import { pagination } from "utils/util";
import { RootContext } from "contexts/RootContext";
import User from "components/user";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserList = styled.div`
  overflow: hidden;
`;

function Users() {
  const { state, dispatch } = useContext(RootContext);
  const { page = 1 } = useQueryParams();
  const actPage = parseInt(page);
  const limit = 10;

  useEffect(() => {
    getUsers().then(users => dispatch({ type: "STORE_USERS", payload: users }));
  }, [dispatch]);

  if (!state) return <Container>Loading...</Container>;

  return (
    <Container>
      <UserList>
        {pagination(state, actPage, limit).map(user => (
          <User key={user.id} {...user} />
        ))}
      </UserList>
    </Container>
  );
}

export default Users;
