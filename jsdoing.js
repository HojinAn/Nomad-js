const h1 = document.querySelector('div.hello:first-child h1');

function handleh1Click() {
    if (h1.style.color==='blue') {//js는 if문 돌릴때 ===로 같음을 표시 파이썬이랑 다르네
        h1.style.color = 'tomato';
    } else {
        h1.style.color = 'blue';//이렇게 하면 'blue'가 중복이라 별로임
    }
}

h1.addEventListener('click', handleh1Click);
