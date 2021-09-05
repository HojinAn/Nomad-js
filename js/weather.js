const API_KEY = "36780319e663e961cb0030d779805837";

function onGeoOk(position) {
  const lat = position.coords.latitude; //GeolocationPosition 정보의 위도 좌표값
  const lon = position.coords.longitude; //경도 좌표값을 받아올 수 있다.
  //console.log("You live in ", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) =>
      response.json()
    ) /*서버에 뭘 물어봤는데 응답하는데 시간이 걸려서 응답을 기다려야할때 쓰는게 then. URL을 fetch하고 response를 받아야 하는데. response 이하 이것들은 다른 강의에서 설명한다고.. 암튼 url로 들어갔을 때 나와있는 정보들이 response.json()이다.*/
    .then((data) => {
      /*console.log(data.name, data.weather[0].main); /*이렇게 console.log하면 그 도시, 맑음 구름 등등 그런거 나온다.*/
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //getCurrentPosition함수는 (성공, 실패) 변수를 필요로 한다.
