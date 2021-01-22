const initialState = {
  user: {
    name: '/no user selected',
    street: '/no user selected',
    email: '/no user selected',
  },
};

const user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'user': {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};
export default user_reducer;
