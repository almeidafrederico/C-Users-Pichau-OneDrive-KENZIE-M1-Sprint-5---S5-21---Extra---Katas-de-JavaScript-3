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

//Kata 5- Retornar os números ímpares de 25 a -25: (25, 23, 21, …, -23, -25)
function kataFive(){
    let meuRetorno = [];
    for (let index = 25; index > -26; index--) {
            meuRetorno.push(index);
    }
    return meuRetorno;
}
console.log(kataFive());

//Kata 6- Retornar os números divisíveis por 3 até o 100: (3, 6, 9, …, 96, 99)
function kataSix(){
    let meuRetorno = [];
    for (let index = 1; index < 100; index++) {
        if(index%3===0){
            meuRetorno.push(index);
        }
    }
    return meuRetorno;
}
console.log(kataSix());
