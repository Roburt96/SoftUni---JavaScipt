function solve(name, lastName, hairColor){
    const curObject = {
        "name": name,
        "lastName": lastName,
        "hairColor": hairColor
    };

    console.log(JSON.stringify(curObject));


}

solve('George', 'Jones', 'Brown');