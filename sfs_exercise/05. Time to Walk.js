function solve(steps, lengthKm, speed){
    let distance = Number(steps) * Number(lengthKm);
    let restTime = Math.floor(distance / 500) * 60;
    let newSpeed = Number(speed) / 3.6;
    let time = Math.round(distance / newSpeed + restTime);
    let result = new Date(time * 1000).toISOString().substr(11, 8);
    console.log(result)
}
solve(4000, 0.60, 5);