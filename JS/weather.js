const API_KEY = "7ec2f4a7e418c364eb3dd2c5047ffe17"

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then((Response) => Response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:nth-child(2)");
        const temp = document.querySelector("#weather span:last-child");
        const name = data.name;
        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
        temp.innerText = `${Math.floor(data.main.temp)}˚C`;})
}

function onGeoFail() {
    alert("ERROR - coordinates not found");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);