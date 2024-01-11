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

//26 - sum of floating value

let amount0 = 3.14e7; //exponential (10 ** 7)
console.log(amount0); //31400000 .... 3.14 * (10**7)

let amount1 = 5e-7; //5 divide it by 10.000.000
console.log(amount1);
//0.0000005Code language: CSS (css)

let amount2 = 0.0000005;
console.log(amount2);
//5e-7

let amount3 = 0.2 + 0.1;
console.log(amount3);
//0.30000000000000004

//27. separator of Numbers

let oi = 1000000;

//or

let io = 1_000_000;

//integers floating
let amount4 = 120_201_123.05;
//120201123.05
let expense = 123_450
//123450
let fee = 12345_00
//1234500

//all value for javascript is floating.

//28 - separator for bigint/octal/binary/hexadecimal

//BigInt
const max = 9_223_372_036_854_775_807n;

//binary
let nibbles = 0b1011_0101_0101;

//octal
let val = 0o1234_5670;

//hex
let message = 0xD0_E0_F0;

//29 - octal literal 0 - 7   
let a = 051;
console.log(a); //41

let b = 058; //0 - 7
console.log(b); //58

//strict mode
'use strict'
let b = 058;
console.log(b);
//Legacy octal literals cannot be used in strict mode

//prefixed 0o
let c = 0o51;
console.log(c); //41

let d = 0o58;
console.log(d); //58 not octal


//30 - Binary number - using parseInt()
let e = parseInt('111', 2); //number, base
console.log(e); //7

//prefix 0b for binaries
let f = 0b111;
console.log(f);//7

//31 - boolean - true or false - function Boolean()
let error = 'An Error ocurred';
let anError = Boolean(error);
console.log(anError); //true - string not empty - true

let error = '';
if error {
    console.log(error);
}
// Expected "(" but found "error"

//32 - string
let name1 = 'carlos';
let message = `hi, my name is ${name1}`;
console.log(message);
//Hi, my name is carlos

// 'r\n' '\t' '\n' '\'

let str = "'I\n'am string";
console.log(str);
//'I
//'m a string!

//.length (size)
let str1 = "Good Morning!";
console.log(str1.length); //13 letters, spaces and point

console.log(str1[0]); //G - first

console.log(str[str.length-1]);//! - final

//concatenation
let name1 = ' Carlos';
let str = 'Hello' + name1;
console.log(str); //Hello Carlos;

//33-string with increment
let className = 'btn';
className += ' btn-primary';
className += ' none';

console.lolg(className); //btn btn-primary none

//33 - function string - toString()
String(n)
"+ n"
n.toString();

let status1 = false; //boolean
let str = status1.toString() // 'false'

let back = Boolen(str); //true ñ é uma string vazia

//34 - string based on dictionary;
let result = 'a' < 'b';
console.log(result); //true

let result1 = 'a' < 'B';
console.log(result1); //false

//35 - Literal Objects

let empty = {};

//create objects with properties;
let name2 = {
    firstName: 'carlos',
    phone: 92847948,
};

//entry property in objects
console.log(name2.firstName);
console.log(name2.phone);

console.log(name2['firstName']);
console.log(['phone']);

//36- Object properties contain key-pair with namespace, use string format
let adress10 = {
    'rua x': 'abc',
    referencia: 'próximo ao porte',
};

console.log(adress10.['rua x']); //entry with array - like

console.log(adress.'rua x'); //Syntax Error

console.log(adress.fim);//undefined

//37 - [objects]change value of a property with operator (=)
adress.referencia = 'silva';

console.log(adress);
//'rua x': 'abc', referencia: 'silva'

//38 - add property and delete property
let b = {
    a: 'c'
    e: 'f',
};
b.g = 'h'; 

console.log(b); 
//(3) {a: "c", e: "f", g: "h"}

delete b.g;
console.log(b);
//(2) {a: "c", e: "f"};

//verifying if property exist.
console.log('a' in b); //true
console.log('d' in b); // false

//39 - primitive variables

//is not possible add property to primitive variables.
//only objects, it's saw one up topic.

let h = 'dsds';
h.alias = 'dssd';
console.log(h);
//undefined.

//40.variables is not depends of other variables.
let age = 25;
let newAge = age;

newAge = newAge + 1;
console.log(age, newAge);
//25
//26

//for objects this add property, it's change to value variable.

let person = {
    noun: 'harold',
    age: 31,
}

let members = person;
members.age = 26;
console.log(person);
console.log(members);   
//(2) {noun: "harold", age: 26}
//(2) {noun: "harold", age: 26}

//41 - arrays

let scores = new Array();

//add elements for this array
let scores = new Array(10);
//or
let scores = new Array(1,4,5,677,545,323,4434,5577);

//with strings elements
let athletes = new Array ('red', 'blue');

//rarely to used
let artists = Array();

//more used
let arrayName = [element1, element2,]; //brackets

let colors = ['red', 'blue', 'gray'];

//empty array
let emptyArray = [];

//41 - Entry array element
//syntax - emptyArray[index];
let mountains = ['everest', 'fuji'];
console.log(mountains[0]); //everest

//42 - change to value of array index
let mountains[1] = 'nanga Parbat';
console.log(mountains);
//['everest', 'nanga Parbat'];

//43 - show the array length
console.log(mountains.length); //2

//44 - operations with array
//add in final array
let seas = ['Black Sea', 'Caribean Sea', 'North Sea'];
seas.push('Red Sea');
console.log(seas);
//[ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ]

//add in initial - unshift();
seas.unshift('mar morto');
//['mar morto, 'Red Sea', 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea' ]

//remove element in final array - pop()
const lastElement = seas.pop;
console.log(lastElement);
//Baltic Sea - this variable store element

//remove element in initial array - shift()
const firstElement1 = seas.shift;
console.log(firstElement1);
//Black Sea

//Finding by index  of on Element in Array - indexOf
let index = seas.indexOf('north sea');
console.log(index); //2

//check if the variable is array on boolean type - Array.isArray()
console.log(Array.isArray(seas)); true

//45 - arithmetic operation

let sum = 10 + 20;
console.log(sum); //30

let netPrice = 9.99;
let shippingFee = 1.99;
let grossPrice = netPrice + shippingFee;
console.log(grossPrice); //11.98

//with strings
let x = '10';
let y = '20';
let equal = x + y;
console.log(equal); //1020

let conc = 10 + '12';
console.log(conc); //1012

let result = '5' * 2;
console.log(result); //10

let divider = '20' / 10;
console.log(divider); //2

//46 - Infinity with numbers
//Infinity * (-100) = -Infinity
//-Infinity * 100 = -Infinity
// Infinity * Infinity = Infinity

//Infinity / -2 = -Infinity

//47 - Number work to objects
let energy = {
    valueOf(){
        return 100;
    }
};

let currentEnergy = energy - 10;
console.log(currentEnergy); //90

currentEnergy = energy + 100;
console.log(currentEnergy); //200

currentEnergy = energy / 2;
console.log(currentEnergy); //50

currentEnergy = energy * 1.5;
console.log(currentEnergy); //150

//48 - % logic operators
let c = 5 % -2;
console.log(c); //-1

let d = 5 % 2;
console.log(d); //-1

let remainder = -5 % -3;
console.log(remainder); //-2

//nan - not a number - NaN
let remainder1 = Infinity % 2;
console.log(remainder1); //nan

let remainder2 = Infinity % Infinity;
console.log(remainder2); //nan

let remainder4 = 10 % Infinity;
console.log(remainder4); //10

let remainder5 = 0 % 10;
console.log(remainder5); //0

let remainder6 = '10' % 2;
console.log(remainder6); //0

//49 - verify if number is odd through of function

let num = 13;
let isOdd = num % 2;
console.log(isOdd); // 1 is odd

function odd(num) {
    return num % 2;
}
//const =  (arguments) => (return)
const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;
console.log('remainder: ', 5 % 3); // remainder: 2
console.log('modulo:', mod(5,3)); // modulo: 2 
console.log('remainder:', -5 % 3); // remainder: -2
console.log('modulo:', mod(-5, 3)); //modulo: 1  - different signs - dividend

//50 - add value in variables
let a = 10, b = 20, c = 30;
a = b = c; //all variables have the number 30;

let a = 10, b = 20, c = 30;
b = c; // b is 30;
a = b; // a is 20;

//51 - unary operators