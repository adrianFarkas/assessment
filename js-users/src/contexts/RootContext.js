import React, { createContext, useReducer } from "react";
import rootReducer from "reducers/rootReducer";

export const RootContext = createContext();

const RootContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, null);

  return (
    <RootContext.Provider value={{ state, dispatch }}>
      {children}
    </RootContext.Provider>
  );
};

export default RootContextProvider;
