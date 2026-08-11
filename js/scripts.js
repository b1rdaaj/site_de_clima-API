const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () =>{
    const APIKey = '6359c740822ebc7e243e4bc6f27e018c';
    const city = document.querySelector('search-box input').ariaValueMax;

    if (city === ' ')
        return;

    fetch ('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}').then(response => response.json()).then(json => {
        if(json.cod === '404'){
            container.style.height = '400px';
        }
    })
})