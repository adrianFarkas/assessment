import React, { useState } from "react";
import { addNewUser } from "utils/dataHandler";
import { UserForm } from "components/utils";
import { Redirect } from "react-router-dom";
import { Container, Wrapper, CenteredCard, Title } from "style/global.styled";

const New = () => {
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    status: "active",
  });

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    addNewUser(user)
      .then(() => setAdded(true))
      .catch(errMsg => {
        setLoading(false);
        setError(errMsg);
      });
  };

  if (added) return <Redirect to="/" />;

  return (
    <Container>
      <Wrapper>
        <CenteredCard>
          <Title>Create New User</Title>
          <UserForm
            onSubmit={handleSubmit}
            onChange={handleChange}
            errorMessages={error}
            values={{
              first_name: user.first_name,
              last_name: user.last_name,
            }}
            btnText="Create"
            loading={loading}
          />
        </CenteredCard>
      </Wrapper>
    </Container>
  );
};

export default New;
