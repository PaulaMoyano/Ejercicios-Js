
const obtenerInformacion = (materia) => {
    materias = {
        fisica: ["Perez", "paula", "aldana", "mariano", "julian"],
        biologia: ["Rodriguez", "paula", "pablo", "aldana", "mariano"],
        quimica: ["Hernandez", "paula", "pablo", "aldana", "mariano", "julian"],
        programacion: ["Martinez", "paula", "pablo", "aldana", "mariano", "julian"]
    }
    if (materias[materia] !== undefined) {
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}


const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia);

    if (informacion !== false) {
        let profesor = obtenerInformacion(materia)[0][0];
        let alumnos = obtenerInformacion(materia)[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:blue">${profesor}</b><br>
        Los alumnos son: <b>${alumnos}</b><br><br>`);
    }
}


const catidadDeClases = (alumno)=> {
    let informacion = obtenerInformacion()
    let cantidadTotal = 0;
    for (info in informacion) {
        document.write(info)
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
        }
    }
    return cantidadTotal;
}


mostrarInformacion("fisica");
mostrarInformacion("biologia");
mostrarInformacion("quimica");
mostrarInformacion("programacion");

document.write(cantidadDeClases("paula"))