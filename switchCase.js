let entrada = 4

switch (entrada) {
    case entrada >= 1 && entrada < 3:
        console.log("NOTA C")
        break
    case entrada >= 4 && entrada < 6:
        console.log("B")
        break
    case entrada > 6 && entrada < 10:
        console.log("A")
        break
    default:
        console.log("ALUNO NAO ENCONTRADO")
        break


}