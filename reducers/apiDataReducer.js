const apiDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'PUT_DATA':
      //return action.payload.data;
      return 'put data triggered';
    default:
      return 'state';
    //return state
  }
};

export default apiDataReducer;
