//Modularity

//import
//Welcome call usine export default hence not need to call in {}. only one export default allow in the file.
import Welcome,{
    name,
    sayHello
} from './myLib'

console.log(`Import var is ${name}`);
console.log(`Import Method is ${sayHello()}`);
console.log(`Import Class is ${new Welcome()}`);