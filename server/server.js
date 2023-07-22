import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();


const app = express();
const port = process.env.PORT || 3000;


const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.API_KEY;
app.use(cors())
// Define a route to handle weather data requests
app.get('/weather', async (req, res) => {
  try {
    // Replace 'Hawaii' with the city name you want to fetch weather data for
    const city = 'Clovis';
    const fullUrl = `${apiUrl}?q=${city}&appid=${API_KEY}&units=imperial`;
    console.log(fullUrl)
    const response = await fetch(fullUrl);
    if (!response.ok) {
      throw new Error('Error fetching weather data from OpenWeatherMap');
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error handling weather data request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/weather/:cityname', async (req, res) => {
  try {
    const city = req.params.cityname;
    const fullUrl = `${apiUrl}?q=${city}&appid=${API_KEY}&units=imperial`;
    console.log(fullUrl)
    const response = await fetch(fullUrl);
    if (!response.ok) {
      throw new Error('Error fetching weather data from OpenWeatherMap');
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Failed to grab cities weatber', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
