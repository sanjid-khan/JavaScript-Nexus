
const img=document.querySelector('.images');
const h3=document.querySelector('.del');
const btn=document.querySelector('button');

const data = [
    {
        src: "bangkok.webp",
        text: "Bangkok City"
    },
    {
        src: "KL.jpg",
        text: "Kuala Lumpur"
    },
    {
        src: "singapore.webp",
        text: "Singapore City"
    }
];

const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a8", "#33fff7", "#f4d03f", "#9b59b6"];

let index = 0;

btn.addEventListener('click', () => {
    index = (index + 1) % data.length;
    img.src = data[index].src;
    h3.innerText = data[index].text;
    img.style.border = '10px solid yellow';

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});


 