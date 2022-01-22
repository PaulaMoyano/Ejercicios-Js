class Aplicaciones {
    constructor(cantidadDescargas,puntuacion,peso){
    this.cantidadDescargas = cantidadDescargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false;
    this.instalada = false;
}
abrir (){
    if (this.iniciada == false && this.instalada == true) {
        this.iniciada = true;
        alert("La aplicacion esta iniciada");
    }
}

cerrar () {
    if (this.iniciada == true && this.instalada == true) {
        this.iniciada = false;
        alert("la aplicacion esta cerrada");
    }
}

instalar() {
    if (this.instalada == false) {
        this.instalada = true;
        alert("la app esta instalada");
    }
}

desinstalar() {
    if (this.instalada == true) {
        this.instalada = false;
        alert("la app esta desinstalada");
    }
}

appInfo() {
    return `
    Descargas: <b>${this.cantidadDescargas}</b><br>
    Puntuacion: <b>${this.puntuacion}</b><br>
    Peso: <b>${this.peso}</b><br>
    `
}

}

app = new Aplicaciones("15mil descargas","9 estrellas","1GB");
app2 = new Aplicaciones("10mil descargas","4 estrellas","1GB");
app3 = new Aplicaciones("1mil descargas","7 estrellas","1GB");
app4 = new Aplicaciones("12mil descargas","3 estrellas","1GB");
app5 = new Aplicaciones("2mil descargas","1 estrellas","1GB");
app6 = new Aplicaciones("19mil descargas","2 estrellas","1GB");
app7 = new Aplicaciones("13mil descargas","8 estrellas","1GB");


//app.instalar()
//app.abrir()
//app.cerrar()
//app.desinstalar()

document.write (`
${app.appInfo()} <br>
${app2.appInfo()} <br>
${app3.appInfo()} <br>
${app4.appInfo()} <br>
${app5.appInfo()} <br>
${app6.appInfo()} <br>
${app7.appInfo()} <br>
`);
