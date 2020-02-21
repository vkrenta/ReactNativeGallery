const picturesReducer = (state = 'no_url', action) => {
  switch (action.type) {
    case 'SET_PHOTO':
      return action.url;
    default:
      return state;
  }
};

export default picturesReducer;
