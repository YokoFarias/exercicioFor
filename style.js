function contagemSimples(){
    for (let numeros = 1; numeros <= 10; numeros++){
    console.log("O número é:", numeros)
    }
}
contagemSimples()

function numerosPares(){
    for (let pares = 1; pares <= 20; pares++){
        if (pares % 2 == 0){
            console.log("Número par", pares++)
        }
    }
}
numerosPares()

function contagemRegressiva(){
    let contador = 10;
    while (contador >= 0) {
        console.log(contador);
        contador--;
    }
}

contagemRegressiva();

