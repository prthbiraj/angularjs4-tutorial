// Variable Type

function testVariable(){
    let num:number=100;
    console.log(`Number ${num}`);

    let str:string='String'
    console.log(`String ${str}`);

    let boo:boolean=true;
    console.log(`Boolean ${boo}`);
}

testVariable();

//Object Type

class Student{
    rollNo:number;
    studName:string;
    address?:string; //Optional Variable
    
}

function testObject(){
    //litral type
    let students:Student={rollNo:101, studName:'Krishna'};
    console.log(`Roll No ${students.rollNo} Name ${students.studName}`);

    //object type
    let students1 =  new Student();
    students1.rollNo = 102;
    students1.studName ='Ganga Putra';
    students1.address = 'Hastina Pur';
    console.log(`Roll No ${students1.rollNo} Name ${students1.studName} 
    Address ${students1.address}`);
}

testObject();



//Array Type


let x : [string, number];
x=['prabhat',101];
//x = [10 , 'prabhat']
console.log(x);

// optional type

let val:any;

val = 10;
console.log(val);

val = 'Prabhat';
console.log(val);

val = true;
console.log(val);

//functions
function sayHello(name:string){
    console.log(`Hello ${name}`);
}
 sayHello('Prabhat');
 //sayHello(1) error

 //with return type

 function sayHi(name:string):string{
     return `Hello ${name}`;
 }

 console.log(sayHi('Pune'));

 //void type and optional param

 function sayGreet(name?:string):void{
    console.log (`Hello ${name}`);
 }

 sayGreet();

//


class Customer{
    id:number;
    name:string;
}

function getCustoer():Array<Customer>{
    let cust:Array<Customer> =[
        {id:10,name:'Prabhat'},
        {id:11,name:'Ashish'},
        {id:12,name:'Abhisek'}];
    return cust;
}


getCustoer().forEach(cust => 
    console.log(`Customer Id: ${cust.id} Name : ${cust.name} `));

/* Interface */
interface Employee{
    id:number;
    name:string;
}

function getEmpolyee():Array<Employee>{
    let emps:Array<Customer> =[
        {id:10,name:'Prabhat'},
        {id:11,name:'Ashish'},
        {id:12,name:'Abhisek'}];
    return emps;
}

getEmpolyee().forEach(emp => 
    console.log(`Employee Id ${emp.id} Name ${emp.name}`));


//----------------Interfaces

interface Runable{
    run():void;
}

interface Flyable{
    fly():void;
}

class Flight implements Runable, Flyable{

    run():void{
        console.log('Flight is running...');
    }

    fly():void{
        console.log('Flight is Flying');
    }
}

class Bird implements Flyable{
    fly():void{
        console.log(`Bird is Flying`);
    }
}

function creatFlightandBird(){
    let flying:Flyable;
    flying = new Flight();
    flying.fly();
    //flying.run(); cant call run


    flying = new Bird();
    flying.fly();
   
}

creatFlightandBird();

//Encapsulation

//public or global Variable
let publicVal ='Public Variable';

function testPublic(){
 console.log(`Public Value inside function ${publicVal}`);    
}
testPublic();
console.log(`Public Value outside function ${publicVal}`);    


//private or local variable

class PrivateVariable{
    constructor(private name:string){

    }
    getName():string{
        return `Private Varialbe ${this.name}`;
    }

}

let obj = new PrivateVariable('Prabhat');
console.log(obj.getName());


// Abstract Class

abstract class Animal{
    walk():void{
        console.log(`Can Walk...`);
    }

    abstract talk():void;
}

class Dog extends Animal{

    talk():void{
        console.log('Dog Bark');
    }

    //overrid
    walk():void{
        console.log('Dog Walk');
    }
}

let dog:Animal;
dog = new Dog();
dog.talk();
dog.walk();

//Generics
/* Functions */

function checkType<T>(arg:T):T{
    return arg;
}

function TestGenericsFun(){
    let genricVal;
    genricVal = checkType<string>('Prabhat');
    console.log(`Generic Variable ${genricVal} and type ${typeof genricVal}`);
    genricVal = checkType<number>(101);
    console.log(`Generic Variable ${genricVal} and type ${typeof genricVal}`);

}
TestGenericsFun();

/* Class */

class UserGenerics<T>{
    constructor(zeroValue:T){}
    add:(x:T, y:T) => T;
}

function testUserGenericsClass(){
    let obj = new UserGenerics<number>(0);
    obj.add = (x, y) => x+y;
    
}

testUserGenericsClass();
























