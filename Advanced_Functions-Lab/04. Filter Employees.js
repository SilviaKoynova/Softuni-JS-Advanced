// function solve(inputData, criteria) {
//     let data = JSON.parse(inputData);
//     let typeOfCriteria = criteria.split('-')[0];
//     let valueOfCriteria = criteria.split('-')[1];
//     let counter = 0;
//     if (criteria === 'all') {
//         data.forEach(person => {
//             console.log(counter + '. ' +personStr.call(person));
//             counter++;
//         });
//     }else {
//         data.forEach(person => {
//             if (person[typeOfCriteria] === valueOfCriteria) {
//                 console.log(counter + '. ' +personStr.call(person));
//                 counter++;
//             }
//         });
//     }
//     function personStr() {
//         return `${this.first_name} ${this.last_name} - ${this.email}`;
//     }
// }


function solve(inputData, criteria) {
    let data = JSON.parse(inputData);
    let typeOfCriteria = criteria.split('-')[0];
    let valueOfCriteria = criteria.split('-')[1];
    let counter = 0;
    if (criteria === 'all') {
        data.forEach(person => {
            console.log(counter + '. ' +personStr.call(person));
            counter++;
        });
    }else {
        data.forEach(person => {
            if (person[typeOfCriteria] === valueOfCriteria) {
                console.log(counter + '. ' +personStr.call(person));
                counter++;
            }
        });
    }
    function personStr() {
        return `${this.first_name} ${this.last_name} - ${this.email}`;
    }
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
)