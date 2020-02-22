export const setPicture = (url, width, height) => ({
  type: 'SET_PHOTO',
  payload: {url, width, height},
});

export const loadData = () => ({type: 'LOAD_DATA'});

export const putData = data => ({type: 'PUT_DATA', payload: {data}});
