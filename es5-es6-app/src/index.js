//Function (litral)

//es5

function print(){
    console.log('Good Morning');
}
print();

//function with arg

function printName(name){

    console.log(`Good Morning ${name}`);
}

printName('Angular');

//function with return

function printName1(name){
    return `Good Morning ${name}`;
}

console.log(printName1('Angular4'));

//multi arg function in es5

function logger(){
    console.log(arguments);
}

logger('Hi');
logger('Hi','Hello');
logger('Hi','Hello','Namaste');

//multi arg function in es6


function loggerES6(...val){
    console.log(`Values are : ${val}`);
    console.log(val);
}

loggerES6('Hi');
loggerES6('Hi','Hello');
loggerES6('Hi','Hello','Namaste');

// function arg with defual value

function printLanguage(lagName = 'Angular4'){
    console.log(`Language is ${lagName}`);
}

printLanguage();
printLanguage('Java');

// assign function to var

let funVar;
function functionForVar(){
    console.log("Hello Variable");    
}
funVar = functionForVar;
funVar();

let funVar2 = function functionForVar2(){
    console.log("Hello Variable2"); 
}
funVar2();

let funVar3 = function (){
    console.log("Hello Variable3"); 
}
funVar3();

// Arrow in ES6 function

let funVarEs6 = name => `Hello ${name}`;
console.log(funVarEs6('Angular'));


// Function as Param in Es5

function paramFun(){
    console.log("Hi Function Param");
}
function testFun(msg){
    msg();
}
testFun(paramFun);



// Function as Param in Es6

let paramFunES6 = () =>  console.log("Hi Function Param in ES 6");
let testFunES6 = (msg) =>  msg();
testFunES6(paramFunES6);
































































