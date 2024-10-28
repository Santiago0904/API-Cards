fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(response => 
  {
    const limit=8
    const character=response.results.slice(0,limit)

    character.forEach(element => {
        
        makeCard(element)
    });
    })
  .catch(err => console.error(err));

  function makeCard(element){
    const container = document.createElement('div')
    container.id = 'card'
    container.classList.add('card')

    const imgCard = document.createElement('img')
    imgCard.src=element.image

    const charactersDiv = document.createElement('div')
    charactersDiv.id = 'character'
    charactersDiv.classList.add('character')

    const titleCard = document.createElement('h2')
    titleCard.id = 'name'
    titleCard.classList.add('name')
    titleCard.innerHTML = element.name

    const status = document.createElement('h3')
    status.id = 'statusCard'
    status.classList.add('statusCard')
    status.innerHTML = element.status

    const specie = document.createElement('h4')
    specie.id = 'specieCard'
    specie.classList.add('specieCard')
    specie.innerHTML = element.species

    container.appendChild(imgCard)
    container.appendChild(charactersDiv)
    charactersDiv.appendChild(titleCard)
    charactersDiv.appendChild(status)
    charactersDiv.appendChild(specie)
    document.querySelector('main').appendChild(container) 
  }