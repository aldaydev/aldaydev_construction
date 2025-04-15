const palabra = "ldayDev";
const contenedor = document.getElementById("texto");

let actual = "A";
let i = 0;

setTimeout(() => {
    const intervalo = setInterval(() => {
        actual += palabra[i];
        contenedor.textContent = `{${actual}}`;
        i++;
        if (i === palabra.length) {
            clearInterval(intervalo);
        }
    }, 80); // Velocidad entre letras
}, 800); // Espera inicial antes de empezar