const h1 = document.querySelector('div.hello:first-child h1');

function handleh1Click() {
    h1.classList.toggle('active');
}
//toggle function은 앞선 과정들이 이미 많이 행해지고 있기때문에 기존에 이미 같은 방식으로 동작되도록 해주는 함수로 만들어져 있는것.. 이렇게 간단하게 1줄로 구현할 수 있다!
h1.addEventListener('click', handleh1Click);
