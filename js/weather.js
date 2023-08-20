// navigator() => 
// getCurrentPosition(a, b) : 유저의 위치를 나타내는 함수 => 위치를 찾는데 성공시 메소드 a, 실패시 b 실행

const API_KEY = '8aedc297ea76388a88b0335396d7b21f';
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    // 실제로 URL에 갈 필요 없이 JavaScript 가 대신 URL을 부름 ; fetch()
    fetch(url).then(response => response.json()).then((data) => {
        const weather = document.querySelector('#weather span:last-child');
        const city = document.querySelector('#weather span:first-child');
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} /  ${data.main.temp}`;
    });
};

function onGeoError() {
    alert("Can't find you");
};



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)