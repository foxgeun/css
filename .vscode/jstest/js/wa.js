
function onGeo0k(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = '1c2a00e9d03e3877fd4e717ae6aa353f';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data=> {
            const weathera= document.querySelector('#weather span:first-child');
            const city= document.querySelector('#weather span:last-child');
        city.innerText = data.name;
        weathera.innerText = data.weather[0].main;
    });


}


function onGeoError(){

 alert('can not')
}



navigator.geolocation.getCurrentPosition(onGeo0k, onGeoError);



