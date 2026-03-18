// Agafar el botó
const button = document.getElementById('miButton');

// Comptador de clics
let contador = 0;

// Afegir funcionalitat al botó
button.addEventListener('click', function() {
    contador++;

    // Mostrar alerta amb el número de clics
    alert('Has fet clic ' + contador + ' vegades 🎉');

    // Canviar color del botó cada clic
    button.style.backgroundColor = getRandomColor();
});

// Funció per generar colors aleatoris
function getRandomColor() {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#1dd1a1', '#ff9ff3'];
    return colors[Math.floor(Math.random() * colors.length)];
}