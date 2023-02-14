function numbers(input) {
    let biggest = -10000000;
    let command = input.shift()
    while (command!== "Stop") {
        if (command === "Stop"){
            break;
        }
        let number = Number(command);
        if (number > biggest) {
            biggest = number;
        }
        command = input.shift();
    }
    console.log(biggest);

}
numbers((["-10",
    "20",
    "-30",
    "Stop"]))