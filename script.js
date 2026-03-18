
const button = document.getElementById('miButton');

let contador = 0;


button.addEventListener('click', function() {
    contador++;

   
    alert('Has fet clic ' + contador + ' vegades 🎉');


});


function getRandomColor() {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#1dd1a1', '#ff9ff3'];
    return colors[Math.floor(Math.random() * colors.length)];
}