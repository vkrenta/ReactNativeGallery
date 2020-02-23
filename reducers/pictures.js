const picturesReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_PHOTO':
      const {uri, width, height} = action.payload;
      console.log(action.payload);
      return {uri, width, height};
    default:
      return state;
  }
};

export default picturesReducer;
