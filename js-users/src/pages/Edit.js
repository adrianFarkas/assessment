import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getUser, updateUser } from "utils/dataHandler";
import { UserForm } from "components/utils";

const Edit = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState({});
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    getUser(userId).then(user => setUser(user));
  }, [userId]);

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateUser(userId, user)
      .then(() => setUpdated(true))
      .catch(errMsg => setError(errMsg));
  };

  if (!user) return <div>Loading...</div>;
  if (updated) return <Redirect to="/" />;

  return (
    <UserForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      errorMessages={error}
      values={{
        first_name: user.first_name,
        last_name: user.last_name
      }}
      btnText="Edit"
    />
  );
};

export default Edit;
