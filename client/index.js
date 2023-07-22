async function getWeatherData() {
    try {
      const response = await fetch('http://localhost:3000/weather'); // Change the endpoint URL to match your server route
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Update the DOM elements with the fetched data
      document.querySelector('.city').innerText = data.name;
      document.querySelector('.temp').innerText = `${data.main.temp.toFixed(0)}ºF`;
      document.querySelector('.humidity').innerText = data.main.humidity;
      document.querySelector('.wind').innerText = data.wind.speed;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  // index.js

// Get references to the search input and button elements
const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');

// Function to fetch weather data and update the UI
async function getWeatherDataCity(city) {
  try {
    const response = await fetch(`http://localhost:3000/weather/${city}`);
    if (!response.ok) {
      throw new Error('Error fetching weather data');
    }
    const data = await response.json();
    // Update weather information on the page
    document.querySelector('.city').innerText = data.name;
    document.querySelector('.temp').innerText = `${data.main.temp.toFixed(0)}°F`;
    document.querySelector('.humidity').innerText = `${data.main.humidity}%`;
    document.querySelector('.wind').innerText = `${data.wind.speed} mph`;
  } catch (error) {
    console.error('Error handling weather data request:', error);
    // Handle errors or display an error message on the page if needed
  }
}

// Event listener for the button click
searchButton.addEventListener('click', () => {
  const city = searchInput.value.trim(); // Get the value from the search input and remove leading/trailing spaces
  if (city) {
    getWeatherDataCity(city);
  }
});

  // Call the getWeatherData function when the DOM has loaded
  document.addEventListener('DOMContentLoaded', () => {
    getWeatherData(); // Call getWeatherData here to display weather data by default
  });