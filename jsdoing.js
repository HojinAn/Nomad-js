const h1 = document.querySelector('div.hello:first-child h1');

function handleh1Click() {
    const currntColor = h1.style.color;
    let newColor;
    if (currntColor==='blue') {
        newColor = 'tomato';
    } else {
        newColor = 'blue';
    }
    h1.style.color = newColor;//중복이 좀 줄긴 했다 하지만 여전히 style을 js에서 편집하는거는 바람직하지 못하다 css로 가져가서 할 수 있도록 해보자
}

h1.addEventListener('click', handleh1Click);
