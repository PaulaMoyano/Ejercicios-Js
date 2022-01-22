class Celular {
    constructor(color,peso,resolucionPantalla,camara,memoriaRam){
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.camara = camara;
        this.memoriaRam = memoriaRam;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false) {
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true) {
            alert("el celular se esta reiniciando");
        } else {
            alert("no puede reiniciarse ya que esta apagado");
        }
    }
    tomarFoto(){
        if (this.encendido == true) {
            alert(`el celular puede tomar fotos en ${this.camara}`);
        } else {
            alert("el celular esta apagado y no puede tomar fotos");
        }
    }
    grabarVideo(){
        if (this.encendido == true) {
            alert("el celular puede grabar");
        } else {
            alert("el celular no puede grabar");
        }
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Resolucion: <b>${this.resolucionPantalla}</b></br>
        Camara: <b>${this.camara}</b></br>
        Memoria: <b>${this.memoriaRam}</b></br>
        `
    }
}

//equipo1 = new Celular ("rojo","150gr","5 pulgadas","full hd","2GB");
//equipo2 = new Celular ("negro","120gr","3 pulgadas","4k","3GB");
//equipo3 = new Celular ("celeste","200gr","10 pulgadas","4k","4GB");

// equipo1.presionarBotonEncendido()
// equipo1.tomarFoto()
// equipo1.grabarVideo()
// equipo1.reiniciar()
// equipo1.presionarBotonEncendido()

/*
document.write (`
    ${equipo1.mobileInfo()} <br>
    ${equipo2.mobileInfo()} <br>
    ${equipo3.mobileInfo()} <br>
`);
*/

class CelularAltaGama extends Celular {
    constructor(color,peso,resolucionPantalla,camara,memoriaRam,resolucionAlta){
        super(color,peso,resolucionPantalla,camara,memoriaRam);
        this.resolucionAlta = resolucionAlta;
    }
    grabarVideoLento(){
        alert("grabacion en camara lenta");
    }
    reconocimientoFacial(){
        alert("estas teniendo reconocimiento facial");
    }
    altaGamaInfo(){
        return this.mobileInfo() + `Resolucion de camara extra: ${this.resolucionAlta}`;
    }
}

celular1 = new CelularAltaGama("blanco","50gr","4k","2 camaras","5GB","Excelente resolucion");
celular2 = new CelularAltaGama("verde","60gr","4k","3 camaras","6GB","Excelente resolucion");

document.write(`
        ${celular1.altaGamaInfo()} <br> <br>
        ${celular2.altaGamaInfo()} <br>    
        `);