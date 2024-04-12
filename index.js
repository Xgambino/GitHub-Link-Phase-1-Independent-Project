document .addEventListener('DOMContentLoaded', () => {

    fetchLocation()


})

const BASE_URL = 'http://localhost:3000/locations'


function fetchLocation(){

     fetch(${BASE_URL} , {
        method: 'GET',

        headers: {
            'Content-Type': 'application/json'
        }

     })
     .then(res => res.json())
     .then(location => {
        location.forEach((location) => renderLocation(location))
     })

     .catch(err => {
        console.log(err)
     })
    
}

function renderLocation(location){

    const locationContainer = document.querySelector('#locations')

    const mainDiv = document.createElement('div')

    mainDiv.classList.add('card')

    mainDiv.style.width = '320px';

    mainDiv.style.height = '310px';

    mainDiv.style.backgroundColor = '#6c757d';

    const image = document.createElement('img')
    
     image.classList.add('card-img-top','mt-2');

     image.height = 200;

     image.width = 200;

     image.src = location.strCategoryThumb

     image.alt = location.strCategory

     mainDiv.appendChild(image)

     const cardBody = document.createElement('div')

     cardBody.classList.add('card-body')

     const cardTitle = document.createElement('h5')

     cardTitle.classList.add('card-title')

     cardTitle.innerText = location.strCategory

     const button = document.createElement('button')

     button.classList.add('btn','btn-primary')

     button.textContent = 'Book Location';

     button.style.backgroundColor = '#f00';
    
    button.addEventListener('click', () => {
    alert('Location Booked');
    });

     cardBody.appendChild(cardTitle )

     document.body.appendChild(button);

     cardBody.appendChild(button)

    mainDiv.appendChild(image)

    mainDiv.appendChild(cardBody)

     locationContainer.appendChild(mainDiv)

}


