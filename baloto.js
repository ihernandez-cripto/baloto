
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
    let mezcla = Math.floor((Math.random() * 1000 + 1));
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
    if (cantidadBalota == 44){
        document.getElementById('superbalota').removeAttribute('disabled');
        document.querySelector('.input-1').value=apostar;
        document.getElementById('baloto').setAttribute('disabled','true');
    }else if (cantidadBalota == 17) {
        document.getElementById('superbalota').setAttribute('disabled','true');
        document.querySelector('.input-3').value=apostar;
        document.getElementById('baloto').removeAttribute('disabled');
    }else{
        document.querySelector('.input-1').value=apostar;
    }
 }
