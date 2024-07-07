const names : string[]  = [] 
names.push('dylan')

console.log(names);

// read only array
const arr : readonly string [] = []
// arr.push(3) got error

const numbers : any  = [1,2,3]
numbers.push(4)
numbers.push('2');
console.log(numbers);

