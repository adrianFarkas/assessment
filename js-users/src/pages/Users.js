import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import useQueryParams from "hooks/useQueryParams";
import { getUsers } from "utils/dataHandler";
import { pagination, sortByDate } from "utils/util";
import { RootContext } from "contexts/RootContext";
import { PageSelector, Sorter } from "components/utils";
import User from "components/user";
import { Link } from "react-router-dom";
import { Container, IconCotnainer, Wrapper } from "style/global.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Head = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
  const { page = 1, date } = useQueryParams();
  const actPage = parseInt(page);
  const limit = 10;

  useEffect(() => {
    getUsers().then(users => dispatch({ type: "STORE_USERS", payload: users }));
  }, [dispatch]);

  if (!state) return <Container>Loading...</Container>;

  const sorted = sortByDate(state, date);

  return (
    <Container>
      <Wrapper>
        <Head>
          <Link style={{ alignSelf: "flex-start" }} to="/new">
            <IconButton>
              <FontAwesomeIcon icon={faUserPlus} />
            </IconButton>
          </Link>
          <Sorter />
        </Head>
        <UserList>
          {pagination(sorted, actPage, limit).map(user => (
            <User key={user.id} {...user} />
          ))}
        </UserList>
        <PageSelector totalItems={state.length} itemPerPage={limit} />
      </Wrapper>
    </Container>
  );
}

export default Users;
