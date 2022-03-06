function solve(names){
    let counter = 1;
    names = names.sort((a, b) => a.localeCompare(b));
    for (let name of names){
        console.log(`${counter}.${name}`);
        counter++;
    }
}
solve(["John", "Bob", "Christina", "Ema"])