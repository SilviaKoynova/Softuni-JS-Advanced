function solve(year, month, day){
    let date = new Date(year, month - 1, day);
    let oneDay = 24 * 60 * 60 * 1000;
    let previousDate = new Date(date.getTime() - oneDay);
    console.log(previousDate.getFullYear() + "-" + (previousDate.getMonth() + 1) + "-" + previousDate.getDate());

}