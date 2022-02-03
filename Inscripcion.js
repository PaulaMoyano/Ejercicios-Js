let materias = {
    fisica: ["Perez", "paula", "aldana", "mariano", "julian"],
    biologia: ["Rodriguez", "paula", "pablo", "aldana", "mariano"],
    quimica: ["Hernandez", "paula", "pablo", "aldana", "mariano", "julian"],
    programacion: ["Martinez", "paula", "pablo", "aldana", "mariano", "julian"]
}

const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    personas.shift();
    alumnos = personas;
    if (alumno.length >= 20) {
        document.write(`Hola <b>${alumno}</b>, lamentablemente las clases de <b>${materia}</b> ya estan llenas`);
    } else if (materia == "programacion") {
        materias = {
                fisica: materias[`fisica`],
                biologia: materias[`biologia`],
                quimica: materias[`quimica`],
                programacion: alumnos
        }
    } else if (materia == "biologia") {
        materias = {
                fisica: materias[`fisica`],
                biologia: alumnos,
                quimica: materias[`quimica`],
                programacion: materias[`programacion`]
        }
    } else if (materia == "quimica") {
        materias = {
                fisica: materias[`fisica`],
                biologia: materias[materia],
                quimica: alumnos,
                programacion: materias[`programacion`]
            }
    } else {
        alumnos.push(alumno)
        if (materia == "fisica") {
            materias = {
                fisica: alumnos,
                biologia: materias[`biologia`],
                quimica: materias[`quimica`],
                programacion: materias[`programacion`]
            }
            
        }
    }
document.write("estas inscripto")


}

inscribir("paula","fisica")