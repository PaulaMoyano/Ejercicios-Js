// Programa en Js para detectar mentiras. 1 si esta mintiendo, 2 si esta diciendo la verdad, y 3 en caso de indecision.

const completarPorDetective = prompt ("¿El sospechoso esta mintiendo o no?");
const opcionesValidas = ["1", "2", "3"];

if (opcionesValidas.includes(completarPorDetective)) {
    if (completarPorDetective === "1") {
        alert ("El sospechoso esta mintiendo.");
    } else if (completarPorDetective === "2") {
        alert ("El sospechoso esta diciendo la verdad.");
    } else {
        alert ("Indecision. La pregunta debe ser mas clara.");
    }
} 

else {
    alert ("Opcion incorrecta. Unicamente validos 1, 2 o 3.");
}
