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
  //  <script src="document.js"></script>
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

///******************************************* */

//16.float and integers numbers

console.log(Number.MAX_VALUE);
//1.7976969869866 e+ 389

console.log(Number.MIN_VALUE);
//5e -324

//17 - infinity number

console.log(Number.MAX_VALUE + Number.MAX_VALUE);
//Infinity

console.log(Number.MAX_VALUE - Number.MAX_VALUE);
//0

//18 - Divide string by number - nan
console.log('a'/2);
//NaN 
console.log(NaN == NaN); //Each call is different
//false

//19 - String immutables but it's change by concatenation;
let str = 'Javascript';
str = str + ' String';
console.log(str);
//Javascript String

let s = 'Javascript';
s[0] = 'j'; //index==0 (initial)
console.log(s);
//Javascript

//20. type Boolean tiny, true or false

let inProgress = true;
let completed = false;
console.log(typeof(inProgress));
//boolean

//string - true --- (false: string empty) let string = '';
//numero - true -- (false: numero 0 ou NaN) let number = 0 or nan;
//object - true --- (false: object null boolean(null) => false);

console.log(Boolean(20)); //true
console.log(Boolean('hi'));//true
console.log(Boolean(0)); //false
console.log(Boolean(''));//false
console.log(Boolean(null)); //false
console.log(Boolean({foo:100})); //object not empty = true

//21. unique symbol

let a = Symbol(); //syntax
console.log(Symbol() == Symbol()); //each call this object is unique.
//false

//22. big int - wide number
let pageView = 2938293823;
console.log(typeof(pageView));
//'bigint'

//23 - javascript object is key-pair, without value it's become undefined

let emptyObject = {};

//defining
let person = {
    firstName: 'Carlos',
    lastName: 'rosario'
};

//23.1 - Object declaration within of one property.

let contact = {
    firstName: 'carlos',
    lastName: 'rosario',
    email: 'xxx@gmail.com',
    phone: '121 29 2929',
    adress: {
        building: '3999',
        street: '3232',
        city: '32323',
        state: 'C323',
        country: 'ds-23'
    }
};

//23.2 object property entry with point notation,
console.log(contact.firstName); //carlos
console.log(contact.lastName); //rosario
console.log(contact.age); // property not exist
//undefined

//using array like
console.log(contact['phone']);//121 29 2929
console.log(contact['email']); //xxx@gmail.com
console.log(contact.adress['building']); //3999

//24 - Numbers base octal(8), 0 - 7 

let num5 = 071;
console.log(num5); //57 

let lsls = 080;
console.log(lsls); //80 because octal base 0 = 7

let num2 = 0o71;
console.log(num2); //57 

let num3 = 0o80;
console.log(num3); //Syntax Error: Invalid of unexpected

//25. hexadecimal - 0 - 9
let num4 = 0x1a;
console.log(num4); //26

//floating
let amount0 = 3.14e7; //exponential (10 ** 7)
console.log(amount0); //31400000 .... 3.14 * (10**7)

let amount2 = 5e-7; //5 divide it by 10.000.000
console.log(amount2);
//0.0000005Code language: CSS (css)

let amount = 0.0000005;
console.log(amount);
//5e-7

//26. SOMA DE VALORES FLOATING!
