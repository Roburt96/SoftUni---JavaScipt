function balance(input){
    let total_money = 0;
    let command = input.shift();
    while (command !== "NoMoreMoney"){
        if (command === "NoMoreMoney") {
            break;
        }
        let current_sum = Number(command);
        if (current_sum < 0) {
            console.log(`Invalid operation!`)
        } else {
            console.log(`Increase: ${current_sum.toFixed(2)}`);
            total_money += current_sum;
        }
        command = input.shift();

    }
    console.log(`Total: ${total_money.toFixed(2)}`);
}

balance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"])