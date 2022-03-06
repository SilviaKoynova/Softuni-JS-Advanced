function solve(x1, y1, x2,y2){
    let firstPoint = Math.sqrt(x1 * x1 + y1 * y1);
    let secondPoint = Math.sqrt(x2 * x2 + y2 * y2);
    if (firstPoint % 1 == 0){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (secondPoint % 1 == 0){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);
    let comparison = Math.sqrt(a * a + b * b);
    if (comparison % 1 == 0){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
solve(2, 1, 1, 1);