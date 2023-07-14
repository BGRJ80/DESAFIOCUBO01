//preciso somar todos os itens do array
// para fazer eu preciso saber qual é o numero que está sendo lido
// armazenar em uma variavel a soma dos itens
// somar os itens nesta nova variavel


const numeroInteiros = [2, 3, 4,];

function solucao(lista) {

    let soma = 0

    for (item of lista) {

        soma = soma + item
    }


    let media = soma / numeroInteiros.length;

    console.log(media);

}

solucao(numeroInteiros);