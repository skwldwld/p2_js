const images = ["0.JPG", "1.JPG", "2.JPG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.style.backgroundImage = `url("${bgImage.src}")`; // CSS로 배경화면 설정

// document.body.appendChild(bgImage); // body에 html 추가해주는 역할
