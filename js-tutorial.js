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
let x = 10;
let y = x+;
console.log(y); //10 (nothing happened)

let x = '10';
let y = +x; 
console.log (y); // 10 (it's changed in number), javascript engine transformed in number

let f = true;
let a = false;
console.log(+f); //1
console.log(+a); //0

//51.1 unary operator with objects

let uhu = {
    a:'c',
    toString: function() {
        return '25';
    },
}

console.log(+uhu); //25

let auhu = {
    a: 'c',
    toString: function() {
        return '25';
    },
    valueOf: function() {
        return '30';
    },
}

console.log(+auhu); //30

//52.unary operator with other examples
let x = 10;
let y = -x;
console.log(y); //-10

let age = 25;
++age;
console.log(age); //26

let weight = 90;
--weight;
console.log(weight); //89

let web = 90;
web = ++web + 5;
console.log(web); //96 //first increment after sum

let web = 90;
web = --web + 5;
console.log(web); //94 //first decrement after sum

let web = 90;
let newWeb = web++ + 5; //first sum after increment
console.log(newWeb); //95 
console.log(web); //91 //incremented 

//53. comparison operator

let r1 = 10 > 30; //false
let r2 = 30 > 10; //true
let r3 = 10 == 20; //false

let a = 10;
let b = 20;
console.log(a >= b); //false;
console.log(a == 10); //true;

//54. String comparison

//compare unique char by char
let result = 'name1' < 'name3';
console.log(result); //true;

//'b' high value that 'a' 
let f1 = 'apple',
    f2 = 'banana';
let result = f2 < f1;
console.log(result); //false

//first to convert in lowercase for after compare;
let f1 = 'apple',
    f2 = 'Banana';
let result = f2.toLowerCase() < f1.toLowerCase();
console.log(result); //false

//when this string with number, string convert for after compare
console.log(10 < '20'); //true;
console.log(10 == '10');//true;

//55. objects comparison

let apple = {
    valueOf: function() {
        return 10;
    }
};

let orange = {
    toString: function(){
        return '20';
    }
};

console.log(apple > 10); //false;
console.log(orange == 20); //true . first convert after compare it.

//56. Boolean comparison
console.log(true > 0); //true
console.log(false < 1); //true
console.log(true > false); //true
console.log(false > true); //false
console.log(true >= true); //true (OR)
console.log(true <= true); //true
console.log(false <= false); //true
console.log(false >= false); //true

//comparison null == undefined
console.log (null == undefined); //true

//NaN
console.log(NaN == 1);//false
console.log(NaN == NaN); //false
console.log(NaN != 1);//true
console.log(NaN != NaN) //true

//===e===
console.log('10' == 10) // true
console.log("10" === 10) //false value and type!

//57 - logic operators and && (and)
let a = true;
let b = false;
console.log(!a); //false
console.log(!b); //true

//first to convert after false change
console.log(!undefined); // true
console.log(!null); //true
console.log(!20); //false
console.log(!0)// true
console.log(!NaN) // true 
console.log(!{}); //true empty == undefined
console.log(!''); //true empty string == false
console.log(!'OK'); //false
console.log(!false); //true
console.log(!true); //false

//!! two times to convert
let counter = 10;
console.log(!!10); //true

//operator and &&
//true true  == true
//true false == false (-)
//false true == false (-)
//false false == false (-)

let a = true;
let b = false;
console.log(a && b); //false

//58 - logic operator with variables, || (or), respect order (not, and, or)
let b = true;
let result = b && (1/0);
console.log(result); //Infinity - last value return when it's true boolean.

let b = false;
let result = b && (1/0);
console.log(result); //false , value return when it's false boolean.

 //  a   b   ||
//true true == true
//true false == true
//false true == true
//false false == false.

let eligible = true,
    required = false;
console.log(eligible || required); //true

let eligible = false,
    required = false;
console.log(eligible || required); //true

//1. Logical NOT (!)
//2. Logical AND (&&)
//3. Logical OR (||)

//59 - logic operators assignment

 //Logical Assignment Operators Logical Operators
//x ||= y  => x || (x = y) -- if x is false => assign y on x.
//x &&= y  => x && (x = y) -- if x is true => assign y on x.
//x ??= y  => x ?? (x = y); -- if x is null or undefined =>  assign y on x.

let title;  //variable doesn't value is false // false/off
title ||= 'untitled'; // 1/on system
console.log(title); //untitled

let title = 'javascript awesome'; //1
title ||= 'untitled'; //1
console.log(title); //javascript awesome - true/on system

//real example if this class doesn't content. //false - not string == 0/off system - receive value.
document.querySelector('.search-result').textContent ||= "sorry not result found";

// x &&= y  => x && (x = y). if x is true, receive value of y variable

let person = {
    firstName: 'aaa',
    lastName: 'bbb',
};

person.lastName &&= 'smith'; //first name is true!
console.log(person); //(2) {firstName: "aaa", lastName: "smith"...}

//x => X??=y => x ?? (x=y); if x is null or undefined , x receive value of y.

let user = {
    username: 'Satoshi',
};

user.nickname ??= 'anonymous';
console.log(user); //nickname properties doesn't declare, nickname is null then received properties.
//{username: 'Satoshi', nickname: 'anopnymous'};

//60 - logic operator part II

//if value 1 is null it's return value 2;
let value1 = null,
    value2 = '2';
let variable1 = value1 ?? value2; //if value is null, return value 2.
console.log(variable1); // 2 

const nameR = null ?? 'John'; //if nameR is null it will return john
console.log(nameR); //John

const ageR = undefined ?? 28;
console.log(ageR); //28

//number 1 is true, not null then console.log('Hi') == false
let resultOne = 1 ?? console.log('Hi'); // 1

let bbb = undefined ?? console.log('Hi'); // Hi

//61. logic operator / can't combine AND and OR
const result = null || undefined ?? 'Ok'; //SyntaxError

//you can to writing this operation 
const result = (null || undefined) ?? 'Ok'; //if result is null or undefined receive 'ok'
console.log(result); //Ok

//61 - exponential operator
let resulting = Math.pow(2,2);
console.log(resulting); // 4

let result = 2n ** 3n;
console.log(result); // 8n

//incremented
let x = 2;
x **= 4; //x = x ** 4
console.log(x); //16

//syntaxError:
let x = -2 ** 3; 
console.log(x); //syntax error

let x = (-2) ** 3; 
console.log(x); // -8

//62 - if statement 
let age = 18;
if (age >= 18) {
    console.log('You can sign up');
}
//You can sign up

var age = 20; 
function compare(x) {
  if (x >= 18) {
    console.log('You can sign up');
  }
}

var show = compare(age); //you can sign up

//63 - nested if statement
let age = 16;
let state = 'CA';
if (state == 'CA') {
    if (age >= 16) {
        console.log('You can drive');
    }
}
//you can drive

//64 - if - else
let age = 18;
if (age >= 18) {
    console.log('a');
} else {
    console.log('b');
}
//a

let age = 16;
let state = 'CA';

if(state == 'CA' && age == 16) {
    console.log('You can drive');
} else {
    console.log('You are not eligible to get a driving license');
}

//65 - if else if
let month = 6;
let monthName; //declared undefined

if (month == 1) {
    monthName = 'Jan';
} else if (month == 2) {
    monthName = 'Feb';
} else if (month == 3) {
    monthName = 'Mar';
} else if (month == 4) {
    monthName = 'Apr';
} else if (month == 5) {
    monthName = 'May';
} else if (month == 6) {
    monthName = 'Jun';
} else if (month == 7) {
    monthName = 'jul';
} else if (month == 8) {
    monthName = 'Ago';
} else if (month == 9) {
    monthName = 'Set';
} else if (month == 10) {
    monthName = 'Oct';
} else if (month == 11) {
    monthName = 'Nov';
} else if (month == 12) {
    monthName = 'Dec';
}
console.log(monthName);
//Jun

//66 - if else if example - calculate the body mass index (BMI)

let weight = 70;
let height = 1.72;
let weightStatus; //undefined

let bmi = weight / (height * height);

if (bmi < 18.5) {
    weightStatus = 'Underweight';
} else if (bmi > 18.5 && bmi <= 24.9) {
    weightStatus = 'Healthy Weight';
} else if (bmi > 25 && bmi <= 29.9) {
    weightStatus = 'Overweight';
} else {
    weightStatus = 'obesity';
}

console.log(weightStatus); //Healthy Weight

//67 - ternary operator
let age = 18;
let message;

age >= 18 ? (message = 'You can drive') : (message = 'You cannot drive');
console.log(message); //You can drive 

//or

message = age >= 16 ? 'You can drive' : 'You cannot drive';
console.log(message); //'You can drive'

//Syntax ternary operator ]
//it's condition can to come before or after

//condition ? expression True : expression False 
//let variableName = condition ? expression True : expressionFalse.


//68 - ternary operator .. simplification - multiples
let authenticated = true;
let nextUrl = authenticated  //don't put comma;
? (alert('you will redirect to admin area'), '/admin')  //if it's true will receive '/admin'
: (alert('acess denied'), '/403'); //if it's not will receive '/403'

console.log(nextUrl); //'/admin

//simplification
let locked = 1;
let canChange = locked != 1 ? true : false;

//more simplifier
let locked = 1;
let canChange = locked =! 1;
console.log(canChange); //false

//multiples ternary operator
let speed = 90;
let message = speed >= 120 ? 'Too fast' : speed >= 80 ? 'Fast' : 'ok'; //or , else if ..else..
console.log(message); //Fast

//if a logic contain if else statement , avoid ternary operator.

//69 - spread operator
//syntax ...  used to list

let colors = ['red', 'blue', 'green'];
let rgb = [...colors]; //copy
console.log(rgb); //['red', 'blue', 'green']

//merge with spread operator
let rgb = ['red', 'blue', 'green', 'orange'];
let cmyk = ['red', 'blue', 'green', 'magenta', 'black'];
let merge = [...rgb, ...cmyk];
console.log(merge); 
//["red", "blue", "green", "orange", 'red', 'blue', 'green', 'magenta', 'black']

//70 - spread operator with objects

const circle = {
    radius: 10,
};

const coloredCircle = {
    ...circle,  //copy of the property
    color: 'black',
};

console.log(coloredCircle); //{radius: 10, color: "black"}

const circle1 = {
    radius: 10,
    style: {
        color: 'blue',
    }
};

const coloredCircle = {...circle1};
coloredCircle.style = 'red';
console.log(coloredCircle); //{radius: 10, style: "red"}

//merge of the objects
const circle2 = {
    radius: 10,
};

const coloredCircle1 = {
    backgroundColor: 'black',
};

const solidCircle1 = { //object make from two objects.
    ...circle2, 
    ...coloredCircle1,
};

console.log(solidCircle1);
//{radius: 10, backgroundColor: "black...}

//71. (...)Spread - superficial copy vs Object assign / Cloning

// spread ... define a new property
//Object. assign () define assign value.

//target objects with Getters and Setters
class Circle {
    constructor(radius) {
        this.radius = radius; //attribute associated with arguments of the constructor
    }
    set diameter(value) {
        this.radius = value / 2;
        console.log('SET', value);
    } 
    get diameter(){
        return this.radius * 2;
    }

};

let circle = new Circle(100); //instance/object

console.log(circle); //Circle {radius: 100}


let cloneCircle1 = Object.assign(circle, {  //cloning of the circle object
    diameter: 200 //define property object cloneCircle1 with set method
});

let cloneCircle2 = {  //superficial copy!
    ...circle
};

 // SET 200

 //72. Target object only read. (constant); defineProperty() - property.

const blueSquare = { //object only read, it's constant.
    length: 100,    //continue normally, it's don't will change
    color: 'blue',
 };

 Object.defineProperty(blueSquare, 'color', {
    value: 'blue',
    enumerable: true,   //true: allow property to be has iterate in loops (example for..in)
    writable: false, //false: property don't to be changed after to be defining.
 });

console.log(blueSquare); //{length: 100, color: "blue"}

//73. MERGE with (...) Spread Operator is POSSIBLE! 
const style = {
    color: 'green',
};

const greenSquare = {
    ...blueSquare,
    ...style,
};

console.log(greenSquare); // {length: 100, color: "green"}

//merge with spread(...) cloning don't be dive, shallow!

//74. Object Assign with constant

const blueSquare = { 
    length: 100,   
    color: 'blue',
  };
  
redSquare = Object.assign(blueSquare, {
    color: 'red',
  });
  
console.log(redSquare); //{length: 100, color: "red"}.

//Object.assign, it's define to new value for a property.

//75. Switch Case
//syntax
switch(expression) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break
    default:
        statement3;
        break;
}

//it's similar 
if (expression === value1) { //can to be used ===
    statement1;
} else if (expression === value2) {
    statement2;
} else {
    statement3;
}

//75.1 switch case example:
let day = 3;
let dayName;

switch(day) {
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thurday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid day';
}

console.log(dayName); //'Tuesday'

//75. switch case example II

let year = 2016;
let month = 2;
let dayCount;

switch(month){  
    case 1: 
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31; 
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30; 
        break;
    case 2:
            //(true       &&         false       ||  false ) == true => dayCount 29.
        if((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0){ //first AND operator, after OR
            dayCount = 29;
        } else {
            dayCount = 28;
        }
        break;
    default:
        dayCount = -1;// invalid month
}

console.log(dayCount);
//29 - bissextile , also 28 days bissextile

//76 - WHILE LOOP

//syntax

while(expression) {
    statement1;
};

let count = 1; // store
while (count < 10) {   // condition
    console.log(count); 
    count += 2;   //increment
};

//1 3 5 7 9

//77 - DO WHILE LOOP 
//execution after of the condition
//syntax
do {
    statement1;
} while (expression);

let count = 0;
do {
    console.log(count);
    count++;
} while (count < 5);

//0 1 2 3 4

//78 - example DO WHILE
const MIN = 1;
const MAX = 10;

let secretnumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN; //value dont equal 0.

let guesses = 0; 

let hint = ''; //for storing number the guess

let number = 0; //for storing hint;

do {
    //get input from user
    let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint);

    number = parseInt(input); //input integer

    guesses++; //increase the number of guesses;

    if (number > secretnumber) {
        hint = ', and less than' + number;
    } else if (number < secretnumber) {
        hint = ', and greater than' + number;
    } else if (number == secretnumber) {
        alert(`Bravo you're correct after ${guesses} guess(es)`);
    }
} while(number != secretnumber);

//79 - FOR LOOP STATEMENT

for (initializer; condition; iterator) {
    statements;
}

//EXPRESSION IS OPTIONAL
for ( ;  ; ){
    statements;
}
for (let i = 1; i < 5; i++) {
    console.log(i);
}
//1 2 3 4

//can to user 
let j = 1;
for ( ;j < 10; j+=2) {
    console.log(j)
}
//1 3 5 7 9

//79 - EXAMPLES FOR LOOP STATEMENT

//can to user too
for (let j = 1; ; j+=2) {
    console.log(j);
    if (j > 10){
        break;
    }
}
//1 3 5 7 9
let j = 1;
for (;;) {
    if(j > 10){
        break;
    }
    console.log(j);
    j += 2;
}


let sum = 0;
for(let i = 0; i <= 9; i++, sum+=i);
console.log(sum);
// 55


//80. Break statement for loops such as FOR, DO WHILE, WHILE , SWITCH
//BREAK AND OUTER

for(let i = 0; i < 5; i++){
    console.log(i);
    if(i == 2) {
        break;
    }
}
//0 1 2


//81 - NESTED TO LOOP

//NESTED
for (let i = 1; i <= 3; i++) {
    for(let j = 1; j <= 3, j++){
        console.log(i,j);
    }
}  
// 1 1
// 1 2
// 1 3 -> 
// 2 1  ->
// 2 2
// 2 3 ->
// 3 1
// 3 2
// 3 3 -> 
//

for (let i = 1; i <= 3; i++){
    for(let j = 1; j <=3 ; j++){
        if(i + j == 4){
            break; //break do j volta pro i.
        }
        console.log(i, j);
    }   
}
 // 1 1
// 1 2
//  -> break for loop FOR that contain 'j' variable. 
// 2 1 start loop again that contain 'i' variable!
// -> break ever loop!
//     break 

//82 - Identifier that where it's happen break.
// in this code, the break is have to started on outer word.
outer: for (let i = 1; i <= 3; i++) {
    for(let j =1; j <= 3; j++) {
        if (i + j == 4) {
            break outer;
        }
        console.log(i, j);
    }
}

// 1 1
// 1 2
//  break

//83 - Break for the while loop
let i = 0;
while (i < 5) {
    i++;
    console.log(i);
    if (i == 3) {
        break;
    }
}
// 1 2 3 break

//84 - Break for the Do While Loop
let i = 0;
do {
    i++;
    console.log(i);
    if (i==3) {
        break;
    }
} while(i < 5);

// 1 2 3 break

//85 - Continue - For loop

//inside a loop, continue is going for next iteration.
if(condition) {
    continue;
}
for(let i = 0; i < 10; i++) {
    if(i % 2 == 0){
        continue;
    }
    console.log(i); //when i = 0 to go for the 1. next interation
}
// 1
// 3
// 5
// 7
// 9

//86 - continue - with While Loop
let i = 0;
while(i < 10) {
    i++; //iteration on the final
    if (i % 2 === 0){
        continue;  //jump
    }
    console.log(i);
}

//when i = 0 for 1 => 
// i = 2 => 3;
 // 1
// 3
// 5
// 7
// 9

//87 - NESTED for continue
// for loop when this broken, back for the for loop and second loop inside, 
// iterator reset for one value. j == 1
outer: for(let i = 1; i < 4; i++){
    for (let j = 1; j < 4; j++){
        if(i + j == 3) continue outer; //next iteration go to outer word.
        console.log(i,j);
    }
}

//1 1
//3 1
//3 2
//3 3

//88 - COMMA OPERATOR;

//ever return the right value

let result = (10, 10 + 20);
console.log(result);
//30.

let x = 10;
let y = (x++, x + 1); //in final expression iterou!
console.log(x, y);
// 11 12
//value for x variable with iterator, final change.

//as well
let x = 10;
x++;
let y = x + 1;
console.log(x, y);

let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let s = '';
for (let i = 0, j = 1; i < board.length; i++, j++) {
    s += board[i] + ' '; //store in array by index.
    if (j % 3 == 0) {
        console.log(s);
        s = '';
    }
}

// 1 2 3
// 4 5 6
// 7 8 9


//81 - function

//Syntax
function functionName (parameters) {
    //function body
}

//zero parameters
function say(){
}

///with parameters
function square(o){
}

//function receive two parameters
function add (a,b){

}

function say (message) {
    console.log(message);
}

//call function
functionName(arguments);

say('Hello'); //all function in javascript return undefined

function diga(message) {
    console.log(message);
}
let result = diga('hello');
console.log('result: ', result); //return right value;
//result:undefined

//82 - return more used in function
function add (e , f){
    return e + f;
}

//call function
let sum = add (10,20);
console.log('sum: ', sum); // sum: 30

//83 - if - else if for function
function compare (a, b){
    if (a > b) {
        return -1;
    }else if (a < b) {
        return 1;
    } else {
        return 0
    }
}

//84 - call function without return
function t(message) {
    if (!message){
        return;
    }
    console.log(message); //return nothing
}

// 85 - value multiples
function add_1 () { //java engine understand that between () have arguments.
    let sum = 0
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum;
}

console.log(add_1(1,2)); //3
console.log(add_1(1,2,3,4,5));//15

//86 - call function before declare

showMe()

function showMe(){
    console.log('an hoisting example');
}

//87 - call function - examples

function add (a , b) {
    return a + b;
}

//by refer
var sum = add;
let result = sum(10, 20); //the variable with arguments that function refer.
console.log(result); //30;

//normally
let result = sum(10, 20); 
console.log(result); //30

//pass function for other function
function add (a , b) {
    return a + b;
}

var sum = add;

function average(a, b, fn) {
    return fn(a , b) / 2; //function return
}

let result = average (10, 20, sum);
console.log(result); //15

//88 - example function called

//returning function this one function
function compareBy(propertyName){
    return function (a, b){
        let x = a[propertyName];
        let y = b[propertyName];

        if (x > y){
            return 1;
        }else if (x < y){
            return -1;
        }else {
            return 0;
        }
    };
}

let products = [ //array vector
    {name: 'iphone', price: 900},
    {name: 'samsung galaxy', price: 850},
    {name: 'sony experia', price: 700},
];
console.log('products sorted by name: ');
products.sort(compareBy('name'));
console.table(products);
// by name property
┌─────────┬──────────────────┬───────┐
│ (index) │ name │ price │
├─────────┼──────────────────┼───────┤
│ 0 │ 'Samsung Galaxy' │ 850 │ //high values by characteres
│ 1 │ 'Sony Xperia' │ 700 │//
│ 2 │ 'iPhone' │ 900 │
└─────────┴──────────────────┴───────┘

console.log('Products sorted by price: ');
products.sort(compareBy('price'));
console.table(products);

console.log('Products sorted by price:')
┌─────────┬──────────────────┬───────┐
│ (index) │ name │ price │
├─────────┼──────────────────┼───────┤
│ 0 │ 'Sony Xperia' │ 700 │
│ 1 │ 'Samsung Galaxy' │ 850 │
│ 2 │ 'iPhone' │ 900 │
└─────────┴──────────────────┴───────┘

//89- function thats return function - example

function cmToIn(length){
    return length / 2.54;
}
function inToCm(length){
    return length * 2.54;
}
function convert(fn, length) {
    return fn(length);
}

let inches = convert(cmToIn, 10);
console.log(inches);
//3.937007874015748

let cm = convert(inToCm, 10);
console.log(cm);
//25.4

//90. anonymous function
//unnamed function
//syntax
function () {
    //
}

let show = function() { //object variable
    console.log('Anonymous function');
}
show(); //anonymous function

setTimeOut(function(){  //settimeout receive argument function and mili seconds
    console.log('Execute later after 1 second')
}, 1000);

//execute immediately ()();
(function(){ //parenteses 
    console.log('life');
})();  //life - ()()

let person1 = {
    firstName11: 'usa',
    lastName22: 'oxi'
};

(function(){
    console.log(person.firstName + ' ' + person.lastName);
})(person); //(arguments - object define;

//91 - arrow functions + unnamed function / anonymous function

let prhase  = function() {
    console.log('Anonymous Function');
}

//or

let prhase = () => console.log('Anonymous function');

//similar
function add(a, b) {
    return a + b; 
}
let similar = (a, b) => a + b;
let ola = (f, g, h) => f + g + h;

//92. undestand javascript value assign and refer assign

//by value
function square(x){
    x = x * x;
    return = x;
}

let y = 10; //global variable
let result = square(y);

console.log(result); //100
console.log(y); // 10

//by refer 
let person = {
    name: 'John',
    age: 25,    //local variable
};

function increaseAge(obj){
    obj.age += 1; //local variable;
}

increaseAge(person);

console.log(person); 
//{ name: 'John', age: 26 }

///arguments of the function is local variables

//93. recursive functions
function recurse() {
    recurse();
}

//define one conditional for loop stop.
function recurse() {
    if (condition){

    } else {
        recurse();
    }
}
// generally used to broken structures high for binary three, algorithms
function countDown(fromNumber){
    console.log(fromNumber);
    countDown(fromNumber-1);
}
countDown(3); // eternal loop
//        //Uncaught RangeError: Maximum call stack size exceeded

function countDown (fromNumber){
    console.log(fromNumber);
    let nextNumber = fromNumber - 1;
    if (nextNumber > 0) {
        countDown(nextNumber); //recurse
    }
}
countDown(3); 
//3
//2
//1

//94. function return one value null it's not function
let newYearCountDown = countDown;  //value return null , dont refer
countDown = null;
newYearCountDown(10);
//Uncaught TypeError: countDown is not a function
// when its  value of one function recursive equal null, its will get to show error.

//example ...natural numbers with recurse
function sum (n) {
    if(n <= 1) {
        return n;
    }
    return n + sum(n - 1);
}

console.log(sum(3)); //6

//95 - Default Parameters 
function fn(param1= default1, paramet2= default2,...){
}
//we can to defining the value and after to change in the call

function say(message='hi'){
    console.log(message);
}
say(); //hi
say('hello'); //hello

function yes(message1){
    console.log(message1);
}
//undefined

function bibe(clean) {  //              ?(ask) if true or false
    clean = typeof clean !== 'undefined' ? clean : 'hi';
    console.log(clean);
}
bibe(); //hi - because its clean is undefined, not declared value for parameter

//example of function that creating a div with default values.
function createDiv (height = '100px', width = '100px', border = 'solid 1 px red') {
    let div = document.createElement('div');
    div.style.height = height;
    div.style.width = width;
    div.style.border = border;
    document.body.appendChild(div);
    return div;
}
//change third value. and undefined maintain the default values.
//the div is have create with 2 default values and third parameters changed.
createDiv(undefined, undefined, 'solid 5px black');

//96 - examples with default parameters
function put(toy, toyBox = []) {
    toyBox.push(toy);
    return toyBox;
}
// same its default parameters don't have called , continue is there..
console.log(put('Toy Car'));
// ["Toy Car"]
console.log(put('Teddy Bear'));
// ['Teddy Bear']


//97 - function with default value

function date(d = today()) {
    console.log(d);
}

function today(){
    return (new Date()).toLocaleDateString('en-US');
}

date(); //today date.

//function mandatory with default value, its without value, the function will throw one error.
function requiredArg(){
    throw new Error('The argument is required');
}

function add(x = requiredArg(), y = requiredArg()){
    return x + y;
}
add(10); //error
add(10, 20); //ok

function add (x = 1, y = x, z = x + y) {
    return x + y + z;
}
console.log(add()); //4

//98 - parameter that don't declaring obtain error.

function subtract (x = y, y = 1) { //y variable could to be before declared;
    return x - y;   
} //9 

//functions is return default values as parameters of other functions.
let taxRate = () => 0.1;

let getPrice = function (price, tax = price * taxRate()) {
    return price + tax;
}

let fullPrice = getPrice(100);
console.log(fullPrice); //110

//objects as arguments
function add (x, y = 1 , z = 2){
    console.log(arguments.length); //ojb
    return x + y + z;
}
add(10); //1 
add(10, 20);  //2 
add(10, 20, 30); //3

//99 - OPP -  Objects Oriented Programming.

//Objects is contain key and value pair.
//Methods describe objects actions.

//method greet()
let person = {
    firstName: 'Erick',
    lastName: 'Rosario',
};
person.greet = function() {
    console.log('Hello');
}
person.greet();
//'Hello

//define methods through of the properties value.

let person = {
    firstName: 'Carlos',
    lastName: 'Rosario',
    greet: function() {
        console.log('Hello World');
    },
};

//or

let person = {
    firstName: 'carlos',
    lastName: 'rosario',
    greet() {
        console.log('Hello, World');
    },
}

person.greet();

//when this functions is property, its to change in method.

//100 - object this is have value as reference.

let person = {
    firstName: 'carlos',
    lastName: 'rosario',
    greet: function(){
        console.log('Hello, World');
    },
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
};

console.log(person.getFullName());
//carlos rosario

//101 - constructor function

//syntax to create a new object

let person = {
    firstName: 'John',
    lastName: 'Doe',
}

function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

//creating one instance
// variable = New operator + class (parameters)

let person = new Person('John', 'Doe');

//based construction
function Person (firstName, lastName) {  
    this.firstName = firstName;
    this.lastName = lastName;
}

//i can to creating multiples objects
let person1 = new Person('carlos', 'rosario');
let person2 = new Person('John', 'Doe');

//102 - add methods that data handle.

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    };
}

//creating new instance
let person3 = new Person('carlos', 'rosario');
console.log(person3.getFullName());

//when we are calling person without new constructor
//we can to used new.target to reference
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    };
}

//creating new instance
let person = Person('a', 'b');
console.log(person3.getFullName());
//null or undefined

//as its dont new. target will throw one message.
function Person(firstName, lastName) {
    if (!new.target) {
        throw Error('cannot be called without the new keyword');
    }
    this.firstName = firstName;
    this.lastName = lastName;
}
//need of the new object.
let person = Person('jhon', 'rosario');
console.log(person.firstName);
//Error: cannot be called without the new keyword
