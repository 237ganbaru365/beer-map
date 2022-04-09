const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        favoriteList: [action.payload, ...state.favoriteList],
      };

    case "REMOVE_FAV":
      return {
        ...state,
        favoriteList: state.favoriteList.filter(
          (store) => store.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default reducer;
