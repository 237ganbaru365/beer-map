import React, { useReducer } from "react";

import reducer from "./reducer";

const initialState = {
  favoriteList: [],
};

const userContext = React.createContext(initialState);

export const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //action
  const addFavoriteHandler = (store) => {
    dispatch({ type: "ADD_FAV", payload: store });
  };

  const removeFavoriteHandler = (id) => {
    dispatch({ type: "REMOVE_FAV", payload: id });
  };

  return (
    <userContext.Provider
      value={{
        favoriteList: state.favoriteList,
        addFavoriteHandler,
        removeFavoriteHandler,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default userContext;
