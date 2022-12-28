function birthday(input) {
    let age = Number(input[0]);
    let traget_price = Number(input[1]);
    let toy_price = Number(input[2]);
    let toys = 0;
    let money = 0;
    let brother_money = 0;
    let present_money = 10;
    let count_money = 0;

    for (let i = 1; i <= age; i++){
        if (i % 2 == 0) {
            count_money += 1
            money += present_money * count_money;
            brother_money += 1
        } else {
            toys += toy_price;
        }
    }
    let total_saved = money + toys - brother_money;
    if (total_saved >= traget_price) {
        total_saved -= traget_price;
        console.log(`Yes! ${(total_saved).toFixed(2)}`)
    } else {
        traget_price -= total_saved;
        console.log(`No! ${(traget_price).toFixed(2)}`)
    }
}
birthday(["10",
"170.00",
"6"]);

birthday(["21",
"1570.98",
"3"]);