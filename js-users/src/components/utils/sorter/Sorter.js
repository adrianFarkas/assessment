import React from "react";
import styled from "styled-components";
import { IconCotnainer } from "style/global.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import useQueryParams from "hooks/useQueryParams";

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 0 15px;
  border-radius: 6px;
  cursor: pointer;
  color: ${props => props.theme.colors.light};
  background: ${props => props.theme.colors.transparentBlue};
  box-shadow: 5px 5px 10px ${props => props.theme.colors.shadow},
    -5px -5px 10px ${props => props.theme.colors.lightShadow};
  & > * {
    margin: 0 5px;
  }
`;

const Sorter = () => {
  const queryParams = useQueryParams();

  const handleClick = () => {
    const { date } = queryParams;
    const next = date === "asc" ? "desc" : "asc";
    queryParams.set("date", next);
  };

  return (
    <Button onClick={handleClick}>
      <span>Date</span>
      <IconCotnainer>
        <FontAwesomeIcon icon={faSort} />
      </IconCotnainer>
    </Button>
  );
};

export default Sorter;
