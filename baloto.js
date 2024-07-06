
console.log('Procesando los números para el Baloto: ');
mezclar(44,4);
console.log('Procesando la superbalota para el Baloto: ');
mezclar(17,0);
console.log('Procesando los números para el Miloto: ');
mezclar(40,4);

function inicializaBaloto(cantidadBalota) {
    let baloto = [0];
    let contador = 1;
    let asignaNumero = 0;
    while (contador < cantidadBalota) {
        asignaNumero = Math.floor((Math.random() * (cantidadBalota-1) + 1));
            if (baloto.includes(asignaNumero)) {
                contador = baloto.length;
            } else {
                baloto.push(asignaNumero);
                contador = baloto.length;
            } 
    }
return baloto;
}

function mezclar(cantidadBalota, numeroApostar){
    let apostar = [];
    let mezclaFin = [];
    let mezcla = Math.floor((Math.random() * 1000000 + 1));
    for (let balota = 1; apostar.length <= numeroApostar; balota++){
        let balotaSeleccionada = Math.floor((Math.random() * (cantidadBalota-1) + 1));
        for (let contador = 1;contador <= mezcla; contador++){
            mezclaFin = inicializaBaloto(cantidadBalota);  
        }
        if (apostar.includes(mezclaFin[balotaSeleccionada])) {
            balotaSeleccionada = Math.floor((Math.random() * (cantidadBalota-1) + 1));
        } else {
            apostar.push(mezclaFin[balotaSeleccionada]);
        } 
    }
 console.log(apostar);
}
