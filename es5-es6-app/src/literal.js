console.log("Good Morning Mumbai...");

// variable and litrals

//Number

var n = 100;
console.log("Number is " + n);

//String

var s = 'Angular4';
console.log("Stirng is " + s);

//multi line String in es5

var str = "MAJOR is increased when there is an incompatible change to the API. For Angular, " +
            "this could be the case if newer versions of a utilized library like zone.js or rxjs gets adopted, " +            
            "that brings along a change to the API.";
console.log(str);

//multi line String back tick in es 6
//case 1
var str1 = `MAJOR is increased when there is an incompatible change to the API. For Angular, 
    this could be the case if newer versions of a utilized library like zone.js or rxjs gets adopted,           
    that brings along a change to the API.`;
console.log(str1);

//case 2
var courseName = 'Angular4';
var topic = 'ES5 & ES6';

console.log(`Course ${courseName} Topic ${topic}`);


//boolean

var isTrue = true;
console.log(`This is Boolean : ${isTrue}`);



//undefined

var undefinedVal;
console.log(undefinedVal);

//NaN

var nanResult= undefinedVal *100;
console.log(nanResult);

var nanResult1 = '2222' * 10;
var nanResult2 = parseFloat('2222.21')*5;
console.log(nanResult1);
console.log(nanResult2);

// infinity
var num1 = 12;
var num2 = num1/0;
console.log(num2);

/// using let 

let temp = 'always active bindass';
console.log(`how we are ${temp}`);

// using const

const lifeofpi = 3.155;
console.log(`Life of pi ${lifeofpi}`);
//lifeofpi=4125.2;



