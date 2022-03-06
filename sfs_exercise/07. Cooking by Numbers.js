function solve(number, ...arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 'chop'){
            number = number / 2;
            console.log(number);
        }else if (arr[i] === 'dice'){
            number = Math.sqrt(number);
            console.log(number);
        }else if (arr[i] === 'spice'){
            number +=1;
            console.log(number);
        }else if (arr[i] === 'bake'){
            number *= 3;
            console.log(number);
        }else if (arr[i] === 'fillet'){
            number = number * 0.8;
            console.log(number);
        }
    }
}
solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);