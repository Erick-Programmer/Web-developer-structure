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

//Division by zero

/////////////////////////////////////////////////////

//6. list declaration / .length properties

let itemsA = [];

let itemsX = [1, 2, 3, 4];

console.log(itemsA.length);

console.log(itemsX.length);

//0
//4

//7. for and for-of
let items = [1, 2, 3, 4]; //length == 4

for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}

for (let item of items) {
    console.log(item);
}

/*
1
2
3
4

1
2
3
4 */

//8 - show javascript in header 

//<header>
  //   <script></script>
//</header>

//9. upload javascript before or after of the html document

/*after 
<header>
     <script async src="document.js"></script> 
</header>
*/
//before
//<header>
  //   <script defer src="document.js"></script>
//</header>


//10 - more of one variable declaration using nesting

let message = "10",
    counter = 100;

//11 - variable undefined;

let message1;
console.log(message1);

//undefined

//12 - variable no declaration;
console.log(mouse);

/*
ReferenceError: mouse is not defined
    at <anonymous>:2:13
    at mn (<anonymous>:16:5455)    
*/

//13 - constants variables

const variable = 1;

//value can't change;

//14 - typeof variables value and it's can to change too.

let exit = 120; 
console.log(typeof(exit)); //number

exit = false;
console.log(typeof(exit)); //boolean

exit = 'hello';
console.log(typeof(exit)); //string

//15 - typeof - null type

console.log(typeof(undeclaredVar)); //undefined

let obj = null;
console.log(typeof(obj)); //object

console.log(null == undefined); //true

