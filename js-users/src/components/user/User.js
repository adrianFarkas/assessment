import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faLockOpen,
  faLock,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { updateUser } from "utils/dataHandler";
import { RootContext } from "contexts/RootContext";
import { IconCotnainer, Card } from "style/global.styled";
import moment from "moment";

const Wrapper = styled.div`
  display: flex;
  margin: 20px 0;
  cursor: default;
  color: ${props => props.theme.colors.blue};
`;

const Content = styled(Card)`
  display: flex;
  position: relative;
`;

const Icon = styled(IconCotnainer)`
  border-radius: 6px 50% 50% 6px;
  font-size: 30px;
  color: ${props => props.theme.colors.light};
  background: ${props => props.theme.colors.transparentBlue};
  padding: 20px 25px 20px 20px;
`;

const Details = styled.div`
  font-size: 25px;
  font-weight: bold;
  width: 100%;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.div`
  max-height: 60px;
  overflow: auto;
  max-width: 300px;
`;

const Date = styled.div`
  font-size: 20px;
  align-self: flex-end;
  text-align: right;
  div {
    text-align: right;
    font-weight: normal;
  }
`;

const Buttons = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100px;
  margin-left: 10px;
  ${IconCotnainer} {
    cursor: pointer;
    transition: opacity 0.3s;
    :hover {
      opacity: 0.8;
    }
  }
`;
const StrikeThrough = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: ${props => props.theme.colors.shadow};
  display: ${props => !props.locked && "none"};
  :after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 95%;
    height: 5px;
    transform: translate(-50%, -50%);
    background: ${props => props.theme.colors.blue};
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
  const date = moment(created_at).format("LL");

  return (
    <Wrapper>
      <Content>
        <Icon>
          <FontAwesomeIcon icon={faUser} />
        </Icon>
        <Details>
          <Name>
            <div>{first_name}</div>
            <div>{last_name}</div>
          </Name>
          <Date>
            <div>created on:</div> {date}
          </Date>
        </Details>
        <StrikeThrough locked={status === "locked"} />
      </Content>
      <Buttons>
        <Link to={`/edit/${id}`}>
          <IconCotnainer>
            <FontAwesomeIcon icon={faEdit} />
          </IconCotnainer>
        </Link>
        <IconCotnainer onClick={setStatus}>
          <FontAwesomeIcon icon={icon} />
        </IconCotnainer>
      </Buttons>
    </Wrapper>
  );
};

export default User;
