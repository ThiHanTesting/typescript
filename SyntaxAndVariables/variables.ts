let firstName : string = 'khun thi han' ;
// console.log(typeof(firstName));

// any  type 
let v : any = true 
console.log('type of v ' ,typeof(v) , v);
v = 'khun thi hna'
console.log('type of v ',typeof(v) , v);

// unkown 
let w : unknown = 1 ;
w = 'string' ;
w = {
    runANonExistentMethod: () => {
      console.log("I think therefore I am");
    }
  } as { runANonExistentMethod: () => void}

  if(typeof w === 'object' && w !== null) {
    (w as { runANonExistentMethod: Function }).runANonExistentMethod();
  }