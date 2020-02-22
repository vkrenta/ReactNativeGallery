import {UNSPLASH_URI} from 'react-native-dotenv';

const getAllDocuments = (urlUser = UNSPLASH_URI) => {
  return fetch(urlUser)
    .then(response => {
      if (response.ok) {
        response.json().then(r => console.log(r));
        return response.json();
      }

      throw new Error('Opps, something wrong!');
    })
    .catch(err => console.error(err));
};

export default getAllDocuments;
