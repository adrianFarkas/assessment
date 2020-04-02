import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import useQueryParams from "hooks/useQueryParams";
import { getUsers } from "utils/dataHandler";
import { pagination } from "utils/util";
import { RootContext } from "contexts/RootContext";
import { PageSelector } from "components/utils";
import User from "components/user";
import { Link } from "react-router-dom";
import { Container, IconCotnainer } from "style/global.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled(Container)`
  width: 50%;
  padding: 20px;
  min-height: 100vh;
  flex-direction: column;
  background: ${props => props.theme.colors.shadow};
`;

const UserList = styled.div`
  width: 100%;
  overflow: hidden;
`;

const IconButton = styled(IconCotnainer)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: ${props => props.theme.colors.light};
  background: ${props => props.theme.colors.transparentBlue};
  box-shadow: 5px 5px 10px ${props => props.theme.colors.shadow},
    -5px -5px 10px ${props => props.theme.colors.lightShadow};
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
      <Wrapper>
        <Link style={{ alignSelf: "flex-start" }} to="/new">
          <IconButton>
            <FontAwesomeIcon icon={faUserPlus} />
          </IconButton>
        </Link>
        <UserList>
          {pagination(state, actPage, limit).map(user => (
            <User key={user.id} {...user} />
          ))}
        </UserList>
        <PageSelector totalItems={state.length} itemPerPage={limit} />
      </Wrapper>
    </Container>
  );
}

export default Users;
