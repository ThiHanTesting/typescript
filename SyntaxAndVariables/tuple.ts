let ourTuple : [number,boolean,string] ;
ourTuple=[5,true,'hello world']
console.log(ourTuple);
ourTuple.push('glollsl lfds',2)
console.log(ourTuple);

const ourReadOnlyTuple : readonly [number,string , boolean] = [2,'ggg ',true]
// ourReadOnlyTuple.push('hello world'); got error 


const graph : [x:number , y: number] = [55.2,4.1]
console.log(graph);

const graph2 : [number , number] = [23.33,85.24]
const [x,y] = graph2
console.log(x,y);

