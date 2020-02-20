const url = 'api.unsplash.com/photos/?client_id={{token}}';
const token =
  'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';
const _urlUser = url + token;

const getAllDocuments = (urlUser = _urlUser) => {
  return fetch(urlUser).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
};

export default getAllDocuments;
