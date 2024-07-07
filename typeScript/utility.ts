// point
interface Point {
    x: number;
    y: number;
  }
  
  let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
  pointPart.x = 10;
console.log(pointPart);


// required 
  interface Car {
    make: string;
    model: string;
    mileage?: number;
  }
  
  let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
  };
    console.log(myCar);
  

    //  record 
  const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
  };

  console.log(nameAgeMap);


//   omit 
interface Person {
    name: string;
    age: number;
    location?: string;
  }
  
  const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
  };
  console.log(bob);

//   pick

  
  