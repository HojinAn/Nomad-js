function onGeoOk(position) {
  const lat = position.coords.latitude; //GeolocationPosition 정보의 위도 좌표값
  const lng = position.coords.longitude; //경도 좌표값을 받아올 수 있다.
  console.log("You live in ", lat, lng);
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //getCurrentPosition함수는 (성공, 실패) 변수를 필요로 한다.
