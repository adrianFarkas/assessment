import React, { useEffect, useContext } from "react";
import { getUsers } from "utils/dataHandler";
import { RootContext } from "contexts/RootContext";

function Users() {
  const { dispatch } = useContext(RootContext);

  useEffect(() => {
    getUsers().then(users => dispatch({ type: "STORE_USERS", payload: users }));
  }, [dispatch]);

  return <div></div>;
}

export default Users;
