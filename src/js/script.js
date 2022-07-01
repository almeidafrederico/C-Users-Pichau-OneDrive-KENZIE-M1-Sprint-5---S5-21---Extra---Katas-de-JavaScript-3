// Kata 1 - Retornar os números de 1 a 25: (1, 2, 3, …, 24, 25)
function kataOne(){
    let meuRetorno = [];
    for (let index = 0; index < 25; index++) {
        meuRetorno.push(index+1);
    }
    return meuRetorno;
}
console.log(kataOne());

// Kata 2- Retornar os números de 25 a 1: (25, 24, 23, …, 2, 1)
function kataTwo(){
    let meuRetorno = [];
    for (let index = 25; index > 0; index--) {
            meuRetorno.push(index);
    }
    return meuRetorno;
}
console.log(kataTwo());

//Kata 3- Retornar os números de -1 a -25: (-1, -2, -3, …, -24, -25)
function kataThree(){
    let meuRetorno = [];
    for (let index = -1; index >=-25; index--) {
            meuRetorno.push(index);
    }
    return meuRetorno;
}
console.log(kataThree())

//Kata 4- Retornar os números de -25 a -1: (-25, -24, -23, …, -2, -1)
function katafour(){
    let meuRetorno = [];
    for (let index = -25; index < 0; index++) {
        meuRetorno.push(index);
    }
    return meuRetorno;
}
console.log(katafour());