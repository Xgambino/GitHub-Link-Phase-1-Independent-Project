// Utility function to create and append an element to a parent element
const appendElement = (parent, element, className) => {
   const newElement = document.createElement(element);
   if (className) newElement.classList.add(className);
   parent.appendChild(newElement);
   return newElement;
 };
 
 // Function to create and append a location card
 const createLocationCard = (location) => {
   const mainDiv = appendElement(locationContainer, 'div', 'location-card');
   const image = appendElement(mainDiv, 'img', 'location-image');
   image.src = location.image;
 
   const cardBody = appendElement(mainDiv, 'div', 'card-body');
 
   appendElement(cardBody, 'h2', 'card-title').textContent = location.title;
 
   const button = appendElement(cardBody, 'button', 'view-button');
   button.textContent = 'View Location';
 };
 
 // Add event listener to menu button
 const menuButton = document.querySelector('.view-button');
 menuButton.addEventListener('click', () => {
   const locationsSection = document.getElementById('locations');
   window.scrollTo({
     top: locationsSection.offsetTop,
     behavior: 'smooth'
   });
 });
 
 // Add event listener to menu link
 const menulink = document.querySelector('.menu-link');
 menulink.addEventListener('click', () => {
   const locationsSection = document.querySelector('.hotel-menu');
   window.scrollTo({
     top: locationsSection.offsetTop,
     behavior: 'smooth'
   });
   menulink.classList.add('active');
 });
 
 // Add event listener to about link
 const aboutlink = document.querySelector('.about-link');