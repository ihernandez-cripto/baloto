
// Definición de los rangos con sus respectivas letras, para Colorloto
const rangosColorloto = [
    { min: 1, max: 7, letra: 'B' },
    { min: 8, max: 14, letra: 'M' },
    { min: 15, max: 21, letra: 'N' },
    { min: 22, max: 28, letra: 'R' },
    { min: 29, max: 35, letra: 'V' },
    { min: 36, max: 42, letra: 'Z' }
];

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

function generarColorloto(cantidadBalota, rangos) {
    const mezclaFin = inicializaBaloto(cantidadBalota);
    const apuestas = [];

    while (apuestas.length < numeroApostar) {
        const balotaSeleccionada = mezclaFin[Math.floor(Math.random() * cantidadBalota)];

        const rango = rangos.find(r => balotaSeleccionada >= r.min && balotaSeleccionada <= r.max);
        if (rango) {
            const valorConLetra = rango.letra + balotaSeleccionada;
            if (!apuestas.includes(valorConLetra)) {
                apuestas.push(valorConLetra);
            }
        }
    return apuestas;
    }
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
                break
            case 43:
                apostar = generarColorloto(43, rangosColorloto);
            case 44:
                apostar.push(mezclaFin[balotaSeleccionada]); 
                document.getElementById('superbalota').removeAttribute('disabled');
                document.querySelector('.input-1').value=apostar;
                document.getElementById('baloto').setAttribute('disabled','true'); 
                break
            case 17:
                document.getElementById('superbalota').setAttribute('disabled','true');
                document.querySelector('.input-3').value=apostar;
                document.getElementById('baloto').removeAttribute('disabled');
            }
        } 
    }
 }
