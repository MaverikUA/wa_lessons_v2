import './home_lights.scss';

function global() {

  function addRed() {

    document.querySelector('.light-yellow').classList.remove('yellow');

    document.querySelector('.light-red').classList.add('red');
  };
  setTimeout(addRed, 2000);

  function addYellow() {
    document.querySelector('.light-red').classList.remove('red');
    document.querySelector('.light-yellow').classList.add('yellow');
  }
  setTimeout(addYellow, 8000);

  function addGreen() {
    document.querySelector('.light-yellow').classList.remove('yellow');
    document.querySelector('.light-green').classList.add('green');
  }
  setTimeout(addGreen, 11000);

  function addGreenY() {
    document.querySelector('.light-green').classList.remove('green');
    document.querySelector('.light-yellow').classList.add('yellow');
  }
  setTimeout(addGreenY, 14000);

}
setInterval(global, 14000)