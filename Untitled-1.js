const options = {method: 'GET'};

fetch('https://rickandmortyapi.com/api/character', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));