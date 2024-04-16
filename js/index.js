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
    .then(location => {
      console.log(location)
    }).catch(
      (error) => {
        console.log(error)
      }
    )
}