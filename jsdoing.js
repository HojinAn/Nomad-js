const h1 = document.querySelector('div.hello:first-child h1');

function handleh1Click() {
    const clickedClass = 'active';
   if(h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);//classList를 사용함으로써 html에 원래 붙어있던 class='original'은 사라지지 않게 되었다.
    }
}

h1.addEventListener('click', handleh1Click);
