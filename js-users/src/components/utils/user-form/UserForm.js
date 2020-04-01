import React from "react";

const UserForm = ({
  onSubmit,
  onChange,
  errorMessages = {},
  values = {},
  btnText
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <div>First Name</div>
        {errorMessages.first_name && <div>{errorMessages.first_name}</div>}
        <input
          name="first_name"
          type="text"
          value={values.first_name}
          onChange={onChange}
        />
      </div>
      <div>
        <div>Last Name</div>
        {errorMessages.last_name && <div>{errorMessages.last_name}</div>}
        <input
          name="last_name"
          type="text"
          value={values.last_name}
          onChange={onChange}
        />
      </div>
      <button type="submit">{btnText}</button>
    </form>
  );
};

export default UserForm;
