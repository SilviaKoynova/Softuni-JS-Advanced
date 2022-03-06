function solve(x, y){
    while(y){
        let c = y;
        y = x % y;
        x = c;
    }
    console.log(x);
}
solve(15, 5);
solve(2154, 458);