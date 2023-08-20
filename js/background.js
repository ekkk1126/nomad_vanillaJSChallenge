const images = [
    '1.jpg',
    '3.jpg',
    '5.jpg',
    '6.jpg',
    '8.jpg',
    '11.jpg',
    '13.jpg',
    '14.jpg',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = ` img/${chosenImage}`;
document.body.appendChild(bgImage);