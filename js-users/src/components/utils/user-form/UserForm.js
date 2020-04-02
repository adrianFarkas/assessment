import React from "react";
import InputField from "./input-field";

const UserForm = ({
  onSubmit,
  onChange,
  errorMessages = {},
  values = {},
  btnText
}) => {
  return (
    <form onSubmit={onSubmit}>
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
      <button type="submit">{btnText}</button>
    </form>
  );
};

export default UserForm;
