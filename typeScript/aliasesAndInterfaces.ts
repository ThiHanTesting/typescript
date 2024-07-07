// aliases
type CarYear = number 
type CarType = string 
type CarModel = string 

type Car = {
    year : CarYear,
    type : CarType,
    model : CarModel
}

const carYear : CarYear = 2001 
const CarType : CarType = 'BMW'
const carModel : CarModel = 'Corolla'

const car : Car = {
    year : carYear,
    type : CarType,
    model : carModel
}

console.log(car);


// interfaces
interface Rectangle {
    height : number ,
    width : number
}

interface ColoredRectangle extends Rectangle {
    color  : string 
}

const coloredRectangle : ColoredRectangle = {
    height : 20 ,
    width : 10,
    color : 'red'
}

console.log(coloredRectangle);
