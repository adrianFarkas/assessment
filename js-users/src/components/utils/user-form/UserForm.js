import React from "react";
import styled from "styled-components";
import InputField from "./input-field";
import Loader from "../loader";

const Form = styled.form`
  width: 100%;
  padding: 20px 10px;
`;

const Submit = styled.button`
  border: 0;
  width: 100px;
  height: 45px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.5s;
  text-align: center;
  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.light};
  box-shadow: 0px 12px 10px -10px ${props => props.theme.colors.transparentBlue};
  :hover {
    transform: translateY(-3px);
    opacity: 0.85;
  }
`;

const UserForm = ({
  onSubmit,
  onChange,
  errorMessages = {},
  values = {},
  btnText,
  loading = false,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <InputField
        name="first_name"
        type="text"
        label="First Name"
        error={errorMessages.first_name}
        value={values.first_name}
        onChange={onChange}
      />
      <InputField
        name="last_name"
        type="text"
        label="Last Name"
        error={errorMessages.last_name}
        value={values.last_name}
        onChange={onChange}
      />

      <Submit type="submit">
        {!loading ? btnText : <Loader size="20px" />}
      </Submit>
    </Form>
  );
};

export default UserForm;
