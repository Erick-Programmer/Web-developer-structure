//1. declarar uma variável


var a = 10;
var b = 20;

let a = 10;
let b = 20;

////////////////////////////


//2. declarar uma função

function add(a, b) {
    return a + b;
}


//3. chamar a função

let result = add(x,y);

/////////////////////////////////////////
//4. mostrar resultado no console log - web browser

console.log(result);


//5. Declarando if-else and switch.

let a = 10;

let b = 0;

function divide (a, b) {
    if(b==0) {
        throw 'Division by zero'
    }
    
    return a / b;
}

let ok = divide (a,b);

console.log(ok);

