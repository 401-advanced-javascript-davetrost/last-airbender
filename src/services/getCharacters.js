const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

export const getCharacters = (options = {}) => {
  let url = `${URL}`;

  if(options.getARandomOne) {
    url += '/random';
  }
  if(options.search) {
    url += `?name=${options.search}&perPage=10&page=${options.page || '1'}`;
  }
  
  return fetch(url)
    .then(res => {
      return res.json();
    });
};
