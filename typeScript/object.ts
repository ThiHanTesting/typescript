const car : {
    type : string ,
    model : string ,
    year : number 
} = {
    type : 'BMW',
    model : 'X5',
    year : 2019
}
console.log(car);
console.log(car.type)

const person : {
    name : string ,
    age ?: number ,
} = {
    name : 'khun thi han ',

}
person.age = 20
console.log(person);

const nameAgeMap : { [index :string] : number } ={}
nameAgeMap.Jack = 25

console.log(nameAgeMap);

