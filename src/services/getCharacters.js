const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

export const getCharacters = (options) => {
  let url = `${URL}`;

  if(options.getARandomOne) {
    url += '/random';
  }
  else if(options.id) {
    url += `/${options.id}`;
  }
  else if(options.search && options.search === '*') {
    url += `?perPage=${options.perPage || 10}&page=${options.page || 1}`;
  }
  else {
    url += `?name=${options.search}&perPage=${options.perPage || 10}&page=${options.page || 1}`;
  }
  
  return fetch(url)
    .then(res => {
      return res.json();
    });
};
