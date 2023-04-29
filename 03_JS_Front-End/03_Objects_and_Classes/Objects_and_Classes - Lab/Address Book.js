function solve(list) {
    let result = {}

    for(let item of list){
        let[name, adress] = item.split(':');
        result[name] = adress;
    }

    let sortedKeys = Object.keys(result).sort(); //сортиране на ключове

    for(let key of sortedKeys){
        console.log(`${key} -> ${result[key]}`);
    }
}





solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
