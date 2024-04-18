// const { error } = require("server/router");

const BASE_URL = "http://localhost:3000/location";

// FETCH LOCATIONS

document.addEventListener("DOMContentLoaded", () => {
  fetchLocation();
  const form = document.querySelector("#search-form");
  form.addEventListener("submit", (e) => {
    //prevent default behavior
    e.preventDefault();
    const input = document.querySelector("#search");
    if (fetchLocation(input.value));
  });
});

function fetchLocation(searchTerm = "") {
  fetch(`${BASE_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((locations) => {
      //if search term is available we filter
      if (searchTerm) {
        //clear locations
        document.querySelector("locations").innerHTML = "";
        //filter out locztions that match the search input
        locations
          .filter((location) =>
            location.name.toLowerCase().includes(searchTerm)
          )
          .forEach((location) => renderLocation(location));
      } else {
        locations.forEach((location) => renderLocation(location));
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
function renderLocation(location) {
  const locationsContainer = document.querySelector("#locations");

  const parentDiv = document.createElement("div");
  parentDiv.classList.add("card");
  const image = document.createElement("img");
  image.classList.add("card-img-top", "mt-2");
  image.height = 200;
  image.src = location.Photo;
  image.alt = location.Name;
  //append the image to the div
  parentDiv.appendChild(image);
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  //location name
  const name = document.createElement("h5");
  name.className = "card-title";
  name.innerText = location.Name;

  //location description
  const description = document.createElement("p");
  description.className = "card-text";
  description.innerText = location.Description;

  //button
  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary");
  button.innerText = "Book With This Location";
  button.addEventListener('click', () => {
    alert(`Here is the pin to your location: ${location.Address}`);
  })

  // //add location
  // const addLocationForm = document.querySelector("#add-location-form");
  // addLocationForm.addEventListener("submit", (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(addLocationForm);
  //   const data = Object.fromEntries(formData);
  //   addLocation(data);
  // })

  //append description to cardbody

  cardBody.append(name, description, button);

  //append cardbody to parent div
  parentDiv.appendChild(cardBody);

  //append each card to the location container
  locationsContainer.appendChild(parentDiv);

  // function addLocation(location) {
  //   fetch(`${BASE_URL}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     }
  //   body: JSON.stringify({ ...location, : 0 })
  //       .then((response) => response.json())
  //       .then((location) => {
  //         console.log(location);
  //         renderLocation(location);
  //       });
  //   .catch((error) => console.log(error));

  //   })
  }