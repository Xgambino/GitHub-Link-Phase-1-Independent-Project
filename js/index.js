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
  name.className.add('card-title');
  name.innerText = location.Name;

  cardBody.append(name);
  //append cardbody to parent div

  //append each card to the location container
  locationsContainer.appendChild(parentDiv);
}