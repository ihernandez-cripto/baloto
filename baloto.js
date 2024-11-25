
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
            switch(cantidadBalota){
            case 40:
            apostar.push(mezclaFin[balotaSeleccionada]);
            break;
            case 43:
                switch (balotaSeleccionada){
                    case balotaSeleccionada >= 1 && balotaSeleccionada <= 7:
                        balotaSeleccionada = "B" + balotaSeleccionada;
                        apostar.push(mezclaFin[balotaSeleccionada]);
                        break;
                    case balotaSeleccionada >= 8 && balotaSeleccionada <= 14:
                        balotaSeleccionada -= 7;
                        balotaSeleccionada = "M" + balotaSeleccionada - 7;
                        apostar.push(mezclaFin[balotaSeleccionada]);
                        break;
                    case balotaSeleccionada >= 15 && balotaSeleccionada <= 21:
                        balotaSeleccionada -= 14;
                        balotaSeleccionada = "N" + balotaSeleccionada;
                        apostar.push(mezclaFin[balotaSeleccionada]);
                        break;
                    case balotaSeleccionada >= 22 && balotaSeleccionada <= 28:
                        balotaSeleccionada -= 21;
                        balotaSeleccionada = "R" + balotaSeleccionada;
                        apostar.push(mezclaFin[balotaSeleccionada]);
                        break;
                    case balotaSeleccionada >= 29 && balotaSeleccionada <= 35:
                        balotaSeleccionada -= 28;
                        balotaSeleccionada = "V" + balotaSeleccionada;
                        apostar.push(mezclaFin[balotaSeleccionada]);
                        break;
                    case balotaSeleccionada >= 36 && balotaSeleccionada <= 42:
                        balotaSeleccionada -= 35;
                        balotaSeleccionada = "Z" + balotaSeleccionada;
                        apostar.push(mezclaFin[balotaSeleccionada]);
                        break;
                }
            case 44:
                apostar.push(mezclaFin[balotaSeleccionada]); 
                document.getElementById('superbalota').removeAttribute('disabled');
                document.querySelector('.input-1').value=apostar;
                document.getElementById('baloto').setAttribute('disabled','true'); 
                break;
            case 17:
                document.getElementById('superbalota').setAttribute('disabled','true');
                document.querySelector('.input-3').value=apostar;
                document.getElementById('baloto').removeAttribute('disabled');
                break;
            default :
                document.querySelector('.input-1').value=apostar;
                break;
            }
        } 
    }
 }
