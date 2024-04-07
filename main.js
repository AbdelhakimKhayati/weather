const apiKey = '337c55504c0fb3eae30cf8c6989e5612';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

let btn = document.querySelector('button');
let city = document.querySelector('input');

async function checkWeather(city){
    const responce = await fetch(apiUrl + city +`&appid=${apiKey}`);
    
    if (responce.status === 200 ) {
        let data = await responce.json();
        document.querySelector('.weather').classList.remove('hide');
        document.querySelector('.erreur').classList.add('hide');
        
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+ '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) +'km/h';
        document.querySelector('.weather-icon').src = `images/${data.weather[0].main}.png`;
    }else{
        document.querySelector('.weather').classList.add('hide');
        document.querySelector('.erreur').classList.remove('hide');
        document.querySelector('.erreur h5').innerHTML = 'city not found';
        console.log(data);
    }

    

}
console.log(apiUrl);

btn.addEventListener('click', ()=>{
    checkWeather(city.value);
});
