export const setPicture = ({uri, width, height}) => ({
  type: 'SET_PHOTO',
  payload: {uri, width, height},
});

export const loadData = () => ({type: 'LOAD_DATA'});

export const putData = data => ({type: 'PUT_DATA', payload: {data}});
