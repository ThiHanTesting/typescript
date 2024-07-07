// as casting 
let x : unknown = 'hello' 
console.log((x as string ).length);

// <> casting
let y:unknown = 'hello'
console.log((<string>y).length);
