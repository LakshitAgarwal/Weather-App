const apiKey = "e730e3724103c0121a830dcd67fe407c"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

var search = document.querySelector(".search input")
var button = document.querySelector(".search button")

async function getWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`)
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name; 
    
    let roundedTemp = Math.round((data.main.temp))
    document.querySelector(".temp").innerHTML = (roundedTemp+"°C"); 
    
    document.querySelector(".humid").innerHTML = data.main.humidity+"%"; 
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h"; 

    if(data.weather[0].main == "Clear"){
        document.querySelector(".weatherIcon").setAttribute("src", "/Weather App/images/clear.png")
    }else if(data.weather[0].main == "Clouds"){
        document.querySelector(".weatherIcon").setAttribute("src", "/Weather App/images/clouds.png")
    }else if(data.weather[0].main == "Rain"){
        document.querySelector(".weatherIcon").setAttribute("src", "/Weather App/images/rain.png")
    }else if(data.weather[0].main == "Drizzle"){
        document.querySelector(".weatherIcon").setAttribute("src", "/Weather App/images/drizzle.png")
    }else if(data.weather[0].main == "Mist"){
        document.querySelector(".weatherIcon").setAttribute("src", "/Weather App/images/mist.png")
    }else if(data.weather[0].main == "Snow"){
        document.querySelector(".weatherIcon").setAttribute("src", "/Weather App/images/snow.png")
    }

}

button.addEventListener("click", ()=>{
    getWeather(search.value)
})