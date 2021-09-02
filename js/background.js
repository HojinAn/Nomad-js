const images = ["0.jpg", "1.jpg", "2.jpg"]; //img 폴더 안 사진 이름과 같아야 작동함을 주의

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //JS로 HTML에 tag를 넣어줄 수 있다!

bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage);
