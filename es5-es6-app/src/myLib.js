//export

export let name = 'Prabhat';

export let sayHello =() => 'Hello';

 export default class Welcome{
    constructor(){
        console.log('Welcome class Constructor');
    }

}

/* 
Only one default export allowed per module.
export default class Greeter{
    constructor(){
        console.log('Welcome class Constructor');
    }

} */