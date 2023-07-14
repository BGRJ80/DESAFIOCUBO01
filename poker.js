
const valoresPermitidos = [];

let valores = [0, 2, 5, 6, 10, 11];
let minimo = 2;
let maximo = 10;


function solucao(minimo, maximo, valores) {



    for (const numero of valores) {


        if (numero >= minimo && numero <= maximo) {
            valoresPermitidos.push(numero);
        }
    }

    console.log(valoresPermitidos);



}

solucao(minimo, maximo, valores);