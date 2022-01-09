const alumnos = ["pablo", "paula", "aldana", "mariano", "silvia", "cristian", "julian", "graciela", "alberto", "diego", "romina", "agustina", "valentino", "vicky", "marcelo", "ariel"]
const ausentes = [] //cantidad de ausencias por alumno//

const DIAS = 30

for (let index = 0; index < alumnos.length; index++) {
    ausentes[index] = 0;
}

const tomarAsistencia = (dia) => {
    let ausente = prompt("¿Quien esta ausente en el dia " + dia + "?");

    while (ausente !== ""){
        // 1. Encontrar al alumno en la lista para obtener el indice
        const encontrarAusente = (alumno) => {
            const estaAusente = alumno === ausente
            //document.write("Esta ausente " + alumno + "? Respuesta: " + estaAusente + "<br>")
            return estaAusente

        }
        const alumnoIndex = alumnos.findIndex(encontrarAusente) // hace encontrarAusente("pablo"), despues encontrarAusente("paula") y asi
        
        // 2. Sumar uno a sus ausencias
        ausentes[alumnoIndex]++
        //document.write(ausentes + "<br>")

        // 3. Volve a preguntar quien esta ausente
        ausente = prompt("¿Quien esta ausente en el dia " + dia + "?");
    }

}


for (let index = 0; index < DIAS; index++) {
    // este IF es para contabilizar los sabados y domingos del mes y q no se tome asistencia esos dias. 
    // el % significa que divido index por 7 y el resto de la division me fijo si es diferente a 5 o 6, que son sabado y domingo.
    if(index % 7 !== 5 && index % 7 !== 6) {
        tomarAsistencia(index)
    } else {
        alert("es fin de semana, no hay clases")
    }
}

for (let index = 0; index < alumnos.length; index++) {
    //document.write(alumnos[index] + " falto " + ausentes[index] + " veces <br>")
    document.write (alumnos[index] + "<br>");
    document.write ("Faltas " + ausentes[index] + "<br>");
    document.write ("Asistencias " + (DIAS-ausentes[index]) + "<br>");
    document.write ("Condicion ")
    if(ausentes[index]>=DIAS/10) {
        document.write ("Faltaste el 10% o mas, estas desaprobado");
    }
    else {
        document.write ("No faltaste el 10% de las clases, estas aprobado");
    }
    document.write ("<br><br>")
}
