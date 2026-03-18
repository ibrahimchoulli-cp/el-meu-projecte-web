// Agafar el botó i el missatge
const button = document.getElementById('miButton');
const missatge = document.getElementById('missatge');

// Comptador de clics
let contador = 0;

// Afegir funcionalitat al botó
button.addEventListener('click', function() {
    contador++;

    // Mostrar alerta
    alert('Has fet clic al botó! 🎉');

    // Mostrar missatge a la pàgina
    missatge.textContent = "Has fet clic " + contador + " vegades 👀";

    // Canviar color del botó cada clic
    button.style.backgroundColor = getRandomColor();
});

// Funció per generar colors aleatoris (simple)
function getRandomColor() {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#1dd1a1', '#ff9ff3'];
    return colors[Math.floor(Math.random() * colors.length)];
}