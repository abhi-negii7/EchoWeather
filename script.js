const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityName=document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");
const weatherIcon = document.getElementById("weather-icon");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const airQuality = document.getElementById("air-quality");


async function getData(cityName) {
  // To dynamically insert the city we will use -> `
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=4f6593c8a33b4bd4ac1130507252207&q=${cityName}&aqi=yes`
  );
  if(promise.status==400){
    alert("Invalid city name");
    return;
  }
  return await promise.json();
}
button.addEventListener("click", async () => {
  // get the value of input field
  // console.log(input.value);
  const value = input.value;
  const result =await getData(value);
  console.log(result);

cityName.innerHTML = `<img src="images/location.png" alt="location">${result.location.name},${result.location.region},${result.location.country}`;
cityTime.innerText=`${result.location.localtime}`;
cityTemp.innerHTML=`<img src="images/temp.png" alt="temp">${Math.round(result.current.temp_c)}°C`;
weatherIcon.src=result.current.condition.icon;
humidity.innerHTML = `<img src="images/humidity.png" alt="Humidity">Humidity: ${result.current.humidity}%`;
wind.innerHTML = `<img src="images/windy.png" alt="Wind">Wind: ${result.current.wind_kph} km/h`;
airQuality.innerHTML=`<img src="images/air-quality.png" alt="aqi">Air Quality: ${result.current.air_quality.co} ppm`;
});

// http://api.weatherapi.com/v1/current.json?key=4f6593c8a33b4bd4ac1130507252207&q=London&aqi=yes
