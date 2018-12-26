import './home_10.scss';

function changeCircle() {
    var circle_1 = document.querySelector('.circle_1');
    circle_1.style.backgroundColor = 'rgb(' + randColor(0, 255) + ', ' + randColor(0, 255) + ', ' + randColor(0, 255) + ')';
};

function randColor(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
random.onclick = changeCircle;