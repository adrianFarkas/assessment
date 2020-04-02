import React from "react";
import styled from "styled-components";

const Field = styled.div`
  color: ${props => props.theme.colors.blue};
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;
`;

const Label = styled.div`
  width: 50%;
  padding: 0 3px;
`;

const Error = styled(Label)`
  text-align: right;
  color: #c62a2a;
`;

const Input = styled.input`
  width: 100%;
  border: 0;
  font-size: 25px;
  padding: 10px;
  margin: 5px 0;
  border-radius: 6px;
  background: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.blue};
  box-shadow: inset 2px 2px 7px ${props => props.theme.colors.shadow};
`;

const InputField = ({ name, type, label, value, onChange, error }) => {
  return (
    <Field>
      <Label>{label}</Label>
      {error && <Error>{error}</Error>}
      <Input name={name} type={type} value={value} onChange={onChange} />
    </Field>
  );
};

export default InputField;
