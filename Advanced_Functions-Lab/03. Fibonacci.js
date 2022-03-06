function solve() {
    let n1 = 1;
    let n2 = 0;
    function getFib() {
        let next = n1 + n2;
        n1 = n2;
        n2 = next;
        return next;
    }
    return getFib;
}
let fib = solve();
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
