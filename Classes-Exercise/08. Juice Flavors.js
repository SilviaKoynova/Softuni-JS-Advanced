function juiceFlavors(arr) {
    let juices = {};
    let bottles = {};
    for (let j of arr) {
        let [juice, quantity] = j.split(" => ");
        quantity = Number(quantity);
        if(!juices[juice]) {
            juices[juice] = 0;
        }
        juices[juice] += quantity;
        if(juices[juice] > 1000) {
            for(let i = juices[juice]; i >= 1000; i-= 1000) {
                juices[juice] -= 1000;
                if(!bottles[juice]){
                    bottles[juice] = 0
                  }
                  bottles[juice]++
            }
        }
    }
    let newArray = Object.entries(bottles);
    let result = "";
    for(let line of newArray) {
        result += `${line[0]} => ${line[1]}\n`;
    }
    console.log(result);
}
console.log(
    juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
    )
  );