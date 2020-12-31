const colorHtml = document.querySelector('.color');
const grayHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.text h1');
const h2Html = document.querySelector('.text h2');

const colorImgs = ['./assets/s1.png', './assets/s2.png', './assets/s3.png'];
const grayImgs = ['./assets/s1gray.png', './assets/s2gray.png', './assets/s3gray.png'];
const names = ['Anna Zdolna', 'Piotr Dokładny', 'Krzysztof Mądry'];
const professions = ['React Developer', 'UX & UI Designer', 'Back-End Developer'];

let activeEl = 0;

function changeElement() {
    activeEl ++;
    if (activeEl == 3) {
        activeEl = 0
    };

    colorHtml.src = colorImgs[activeEl];
    grayHtml.src = grayImgs[activeEl];
    h1Html.textContent = names[activeEl];
    h2Html.textContent = professions[activeEl];
};

setInterval(changeElement, 4000);
