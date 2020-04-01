import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getUser, updateUser } from "utils/dataHandler";

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
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="first_name"
          type="text"
          value={user.first_name}
          onChange={handleChange}
        />
        {error.first_name && <div>{error.first_name}</div>}
      </div>
      <div>
        <input
          name="last_name"
          type="text"
          value={user.last_name}
          onChange={handleChange}
        />
        {error.last_name && <div>{error.last_name}</div>}
      </div>
      <button type="submit">Edit</button>
    </form>
  );
};

export default Edit;
