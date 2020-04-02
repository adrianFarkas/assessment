import React from "react";

const InputField = ({ name, type, label, value, onChange, error }) => {
  return (
    <div>
      <div>{label}</div>
      {error && <div>{error}</div>}
      <input name={name} type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
