function solve(num) {
    return function add(n) {
        return Number(num) + Number(n); 
    } 
    
}
let add = solve(5);
console.log(add(2));
console.log(add(3));
