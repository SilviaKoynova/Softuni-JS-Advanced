function solve(array){
    let largest = [];
    for(let i = 0; i < array.length; i++) {
    largest[i] = array[i].sort((a,b) => b-a)[0];
  }
  let largestFinal = Math.max.apply(null, largest);
  return largestFinal;
}
console.log(solve([[20, 50, 10],[8, 33, 145]]));
console.log(solve([[3, 5, 7, 12],[-1, 4, 33, 2],[8, 3, 0, 4]]));