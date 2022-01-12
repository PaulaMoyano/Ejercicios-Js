// Vamos a la loteria y queremos comprar tickets para hacernos millonarios. Los precios de los tickets estan definidos. Tenemos que ver para cuantos tickets nos alcanza, mostrar cuantos compramos y el vuelto.

const precioTicket = 115;
let plata = parseInt(prompt ("El ticket cuesta 115$. ¿Cuanta plata tenes actualmente?"));


if (plata >= precioTicket) {
    let cantidadTickets = Math.floor(plata/precioTicket);
    let vuelto = plata % precioTicket;
    alert ("Pudiste comprar " + cantidadTickets + " tickets, felicidades! Tu vuelto es " + vuelto);
} else {
    alert ("No te alcanza para comprar tickets.");
}