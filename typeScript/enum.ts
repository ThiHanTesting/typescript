//  default way
// enum CardinalDirections {
//     North,
//     East,
//     South,
//     West
// }

// let currentDirection = CardinalDirections.West;
// console.log(currentDirection);

enum CardinalDirections {
    North=1,
    East,
    South,
    West
}

let currentDirection = CardinalDirections.West;
console.log(currentDirection);

// fully initialized

enum StatusCodes {
    NotFound = 404 ,
    Success = 200 ,
    Accepted = 202 ,
    BadRequest = 400,
}
console.log(StatusCodes.Accepted);
console.log(StatusCodes.NotFound);

