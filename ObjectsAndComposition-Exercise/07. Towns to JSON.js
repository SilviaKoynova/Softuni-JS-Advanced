function solve(input){
    const result = [];
    input.shift();
    input.forEach(el => {
        const [curTown, curLatitude, curLongtitude] = el
        .split('|')
        .filter(el => el !== '')
        .map(x => x.trim());
        result.push({ Town: curTown, Latitude: Number(Number(curLatitude).toFixed(2)), Longitude: Number(Number(curLongtitude).toFixed(2)) });
    })
    return JSON.stringify(result);
}
console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));