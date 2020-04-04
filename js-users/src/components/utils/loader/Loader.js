import React from "react";
import { IconCotnainer } from "style/global.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";

const rotating = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled(IconCotnainer)`
  font-size: ${props => (props.size ? props.size : "50px")};
  color: ${props => props.theme.colors.light};
  animation: ${rotating} 2s linear infinite;
`;

const Loader = ({ size }) => {
  return (
    <Spinner size={size}>
      <FontAwesomeIcon icon={faSpinner} />
    </Spinner>
  );
};

export default Loader;
