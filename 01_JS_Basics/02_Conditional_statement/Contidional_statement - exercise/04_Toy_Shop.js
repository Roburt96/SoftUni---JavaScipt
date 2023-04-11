function toys(input) {
    let discount = 0.0;
    let rent = 0.0;
    let final_price = 0.0;
    let win_money = 0.0;
    let puzzle = 2.60 * Number(input[1]);
    let doll = 3 * Number(input[2]);
    let bear = 4.10 * Number(input[3]);
    let minion = 8.20 * Number(input[4]);
    let truck = 2 * Number(input[5]);
    let totalSum = puzzle + bear + doll + minion + truck;
    let vacantionPrice = Number(input[0]);
    let totalToys = (Number(input[1]) + Number(input[2]) + Number(input[3]) + Number(input[4]) + 
    Number(input[5]));
    
    if (totalToys > 50) {
        discount += totalSum * 0.25;
        final_price += totalSum - discount;
        rent += final_price * 0.10;
        win_money += final_price - rent;
    }
    if (win_money >= vacantionPrice) {
        console.log(`Yes! ${win_money - vacantionPrice.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money!\n
        ${vacantionPrice - win_money.toFixed(2)}`);
    }
}
toys(["40.8",
"20",
"25",
"30",
"50",
"10"]);
