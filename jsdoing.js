const h1 = document.querySelector('div.hello:first-child h1');

function handleh1Click() {
    h1.style.color='blue';
}

function handleMouseEnter() {
    h1.innerText = 'Mouse is here!';
}

function handleMouseLeave() {
    h1.innerText = 'Mouse is gone!';
}

function handleWindowResize() {
    document.body.style.backgroundColor = 'tomato';
}

function handleWindowCopy() {
    alert('copier!');
}

function handleWindowOffline() {
    alert('SOS no WIFI');
}

function handleWindowOnline() {
    alert('ALL GOOD');
}

h1.addEventListener('click', handleh1Click);
h1.addEventListener('mouseenter', handleMouseEnter);
h1.addEventListener('mouseleave', handleMouseLeave);// onmoustleave보다 이걸 더 선호하는 이유? .removeEventListener로 event listener르르 지울 수 있음

//document처럼 window도 기본적으로 제공하는 object다
window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);

