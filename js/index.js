const BASE_URL = 'http://localhost:3000/location';


// FETCH LOCATIONS

document.addEventListener('DOMContentLoaded', () => {

  fetchLocation();
});

function fetchLocation() {

  fetch(`${ BASE_URL }`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }

  })
    .then(res => res.json())
    .then(locations => {
      locations.forEach((location)=> renderLocation(location))
    }).catch(
      (error) => {
        console.log(error)
      }
    )
}
function renderLocation(location) {
  const locationsContainer = document.querySelector('#locations');

  const parentDiv =document.createElement('div');
  parentDiv.classList.add('card')
  const image =document.createElement('img');
  image.classList.add('card-img-top','mt-2');
  image.height = 200;
  image.src = location.Thumb;
  image.alt = location.Name;
  //append the image to the div
  parentDiv.appendChild(image);
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  //location name
  const name = document.createElement('h5')
  name.className = ('card-title');
  name.innerText = location.Name;

  //location description
  const description= document.createElement('p');
  description.className = ('card-text');
  description.innerText = location.Description;

  //button
  const button = document.createElement('button');
  button.classList.add('btn','btn-primary');
  button.innerText = 'Book With This Location';

  //append description to cardbody

  cardBody.append(name, description, button);

  //append cardbody to parent div
  parentDiv.appendChild(cardBody);

  //append each card to the location container
  locationsContainer.appendChild(parentDiv);
}