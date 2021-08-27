const h1 = document.querySelector('div.hello:first-child h1');

function handleh1Click() {
   if(h1.className === 'active') {//css의 .active class이름과 같아야 한다
    h1.className = '';
    } else{
        h1.className = 'active';//문제는 여기도 active 2번 쓰고 있음
    }
}

h1.addEventListener('click', handleh1Click);
