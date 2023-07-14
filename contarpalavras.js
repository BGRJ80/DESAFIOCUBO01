//  const textoSemEspaco = texto.trim() remove espaço em branco

// .split(" ");    retorna uma lista  ordenada como array


const texto = "um texto qualquer";



function solucao(texto) {

    const textoSemEspaco = texto.trim().split(" ");

    let palavras = 0

    for (caracteres of textoSemEspaco) {


        if (caracteres) {
            palavras++
        }


    }

    console.log(palavras);


}






