// get time return function
function getTime() : number {
    return new Date().getTime();
}
console.log(getTime());


//  void function
function printHello() :void {
    console.log('hello world');
}
printHello()


// function with parameters
function multiply  (a:number , b : number ){
    return a * b;
}
console.log('multiply : ',multiply(32.4,324));


// optional parameters 
function add(a: number , b: number  , c?:number) {
    return a+b+(c||0)
}
console.log('adding but optional parameters : ',add(3,3));


// default parameaters
function addDefault(a: number , b:number = 0){
    return a+b;
}
console.log('addDefault : ',addDefault(1));


// named parameters 
function divide({dividend , divisor}:{dividend:number,divisor:number}){
    return dividend/divisor;
}
console.log('divide with named parameters  : ',divide({dividend : 120 , divisor : 12}));



//  rest parameters ...
function sum(a:number,b:number,...rest:number[]){
    return a + b + rest.reduce((p,c) => p+c , 0 )
}
console.log('rest parameters : ', sum(1,2));


// type alias
type Negate = (value: number) => number;
const negateFunction: Negate = (value) => value * -1;

console.log('type alias : ',negateFunction(10));