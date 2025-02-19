let weatherimg = document.querySelector('.weather-icon')
let  temprature = document.querySelector('.temp')
let cityname = document.querySelector('.city')
let wind = document.querySelector('.wind')
let humidity = document.querySelector('.humidity');


const apikey = '25b74f48a9ccee18c0c5aa6e880c2581';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const input = document.getElementById("inp")
const button= document.getElementById("btn")




async function fetchdata(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apikey}`);
       let  data = await response.json();
        console.log(data);
       

        cityname.innerHTML=data.name;
        temprature.innerHTML=data.main.temp+ "°C";
        humidity.innerHTML=data.main.humidity+ "%";
        wind.innerHTML=data.wind.speed+"Km/hr";

        
        if (data.weather[0].main =='Clouds') {
            weatherimg.src = "images/clouds.png"
        }

        if (data.weather[0].main =='Clear') {
            weatherimg.src = "images/clear.png"
        }

        if (data.weather[0].main =='Rain') {
            weatherimg.src = "images/rain.png"
        }

        if (data.weather[0].main =='Drizzle') {
            weatherimg.src = "images/drizzle.png"
        }
        if (data.weather[0].main =='Mist') {
            weatherimg.src = "images/mist.png"
        }
        
        }
         catch (error) {
        console.log("some error occured while fetching API");
    }
    
    document.querySelector(".weather").style.display = "block";
}
button.addEventListener('click' , () => {
    fetchdata(input.value);
}
)




