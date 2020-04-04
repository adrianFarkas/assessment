import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getUser, updateUser } from "utils/dataHandler";
import { UserForm, Loader } from "components/utils";
import { Wrapper, Container, CenteredCard, Title } from "style/global.styled";

const Edit = () => {
  const history = useHistory();
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    updateUser(userId, user)
      .then(() => setUpdated(true))
      .catch(errMsg => {
        setError(errMsg);
        setLoading(false);
      });
  };

  if (!user)
    return (
      <Container>
        <Wrapper>
          <Loader />
        </Wrapper>
      </Container>
    );

  if (updated) history.goBack();

  return (
    <Container>
      <Wrapper>
        <CenteredCard>
          <Title>Edit User</Title>
          <UserForm
            onSubmit={handleSubmit}
            onChange={handleChange}
            errorMessages={error}
            values={{
              first_name: user.first_name,
              last_name: user.last_name,
            }}
            btnText="Edit"
            loading={loading}
          />
        </CenteredCard>
      </Wrapper>
    </Container>
  );
};

export default Edit;
