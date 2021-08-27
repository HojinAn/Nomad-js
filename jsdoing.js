const h1 = document.querySelector('div.hello:first-child h1');

function handleh1Click() {
    const clickedClass = 'active';//raw value는 오류나기 쉬움
   if(h1.className === clickedClass) {//이걸 오타내면 변수는 js가 문제를 알려준다
    h1.className = '';
    } else{
        h1.className = clickedClass;//html의 class가 얘땜에 대체되어버린다 문제 -> html의 class는 변경하지 않을 방법을 찾아야한다
    }
}

h1.addEventListener('click', handleh1Click);
