async function getWeatherData() {
    try {
      const response = await fetch('http://localhost:3000/weather'); // Change the endpoint URL to match your server route
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Update the DOM elements with the fetched data
      document.querySelector('.city').innerText = data.name;
      document.querySelector('.temp').innerText = data.main.temp;
      document.querySelector('.humidity').innerText = data.main.humidity;
      document.querySelector('.wind').innerText = data.wind.speed;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  
  // Call the getWeatherData function when the DOM has loaded
  document.addEventListener('DOMContentLoaded', () => {
    getWeatherData();
  });