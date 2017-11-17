//class in ES 5
//Variable Passing
/* HardCoded, After Object Creation, During Object Creation */
function Language(name ='noName' , version='noVesion'){
    //this.name = 'ECMA Script'; //HardCoded
    //this.version = 'ES5';     //HardCoded

    this.name = name;
    this.version = version;
}

let lang = new Language('ECMA Script','ES5'); //During Object Creation
//lang.name = 'JavaScript'; //After Object Creation
console.log(`Language Name ${lang.name} and Version ${lang.version}`);


//Inheritance
//Has-A, Is-A

//Has A
function Address(street, city){
    this.street = street;
    this.city = city;
}

function Student (name, rollno, address){
    this.name = name;
    this.rollno = rollno;
    this.address = address; // Has A

    this.totalMarks = function(){
        return `Total Mark 490/500`;
    }
}

let addr = new Address('Sector no 20','Airoli');
let student = new Student('Mohan','102', addr);

console.log(`Roll No ${student.rollno} Name ${student.name} with Address 
${student.address.street} ${student.address.city} Total Marks Is ${student.totalMarks()}`);


//Is A 

function Persone(){
    this.bloodeColor;

}

function Customer(name, add){
    this.name = name;
    this.add = add;
}


let cust = new Customer('Shyam',addr);

cust.__proto__ = Persone(); //Is A
cust.bloodeColor ='Red';

console.log(`User Name ${cust.name} with Blood Color ${cust.bloodeColor} And Address is ${cust.add.street} ${cust.add.city}`);


// Es 6 Class, Inheritance

class Employee{
    constructor(id, name){
        this.id = id;
        this.name =name;
    }
    totoalSalary(){
        return 1010101010;
    }
}


let emp = new Employee(100,'Manmohan');

console.log(`Empoyee id ${emp.id} with Name ${emp.name} has total salary ${emp.totoalSalary()}`);


//Has a

class Engine{
    constructor(type){
        this.type=type;
    }
}

class Vehical{
    constructor(){
        this.tierCount=4;
    }
    
}
class Car extends Vehical{
 constructor(name,color,engVar){
     super();   
     this.name =name;
     this.color = color;
     this.eng = engVar;         
 }

 carSpeed(){
     return '5000kmh';
 }

}


let engObj = new Engine('16 Cylender + VS100');
let carObj = new Car('Joognoo','black',engObj);

console.log(`Can is ${carObj.name} with Color ${carObj.color} and Engine Type ${carObj.eng.type} 
with Tier Coutn ${carObj.tierCount}`);


// Object Litral Patter

let users =[
        {name: 'Ram' , iteamCoun: 5, billAmt: 1000, address:[
            {city: 'Ayodhya', pincode: 12540}
        ]},
        {name: 'Krishna', iteamCoun: 6, billAmt: 1200, address:[
            {city:'Dwarika' , pincode:325412 },
            {city: 'Mathura', pincode: 251421}
        ]},
        {name:'Shiv', iteamCoun: 7, billAmt: 1400, address:[
            {city:'Kailash' , pincode: 120102 }
        ]}];

users.forEach(user => {
    console.log(`User Name ${user.name} Iteam Count ${user.iteamCoun} Bill Amount ${user.billAmt}`);
    user.address.forEach(add=> console.log(` City ${add.city} ZipCode ${add.pincode}`));

});


//static 

class Status{
    static msg = 'Completed';
    static sayStatus(){
        return 'Done';
    }
}

Status.msg="In Process";
console.log(`Status msg ${Status.msg} and What it is saying ${Status.sayStatus()}`);


// Encapsulation

/* Scopes
    Globle Scope
    Local Scope or Private Scope
    Public Scope or Object Scope
    Block Scope
*/

let greet = 'Hello Globle';
console.log(greet); // Can access from anywhere

function SayHello(){
    //private Scope in class
    let greet1 = 'Hello';
    this.say =() => greet1;   
}
//console.log(greet1); // Can not access from outside
let say = new SayHello();
console.log(say.say());

function helloSay(){
    //local in method
    let hello = 'hello';
}

//console.log(hello); // Can not access from outside

function conditionSay(name){
    //block 
    if(name){
        //var msg = 'Hello for block '; if name is false can be access as undefined
        let msg = 'Hello for block '; //if name is false can not access  
        return msg;      
    }
        return '';    
}

console.log(conditionSay('ES6'));












