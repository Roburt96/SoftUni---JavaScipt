function solve(list){
    let result = {}

    for(let item of list){
        let[day, name] = item.split(' ');
        if (day in result){
            console.log(`Conflict on ${day}!`);
        }else{
            result[day] = name;
            console.log(`Scheduled for ${day}`);
        }

    }

    for(let [key, value] of Object.entries(result)){
        console.log(`${key} -> ${value}`);
    }
}

solve(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim'])