function buying(input) {
    let budget = Number(input[0]);
    let PriceVideocard = Number(input[1]) * 250;
    let PriceProccesor = Number(input[2]) * PriceVideocard * 0.35;
    let PriceRam = Number(input[3]) * PriceVideocard * 0.10;
    let videocards = Number(input[1]);
    let proccesors = Number(input[2]);
    let totalPrice = PriceProccesor + PriceVideocard + PriceRam;
    let discount = 0.0;

    if (videocards > proccesors) {
        discount += totalPrice * 0.15;
        totalPrice = totalPrice - discount;
    }

    if (totalPrice <= budget) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`)
    }
}
buying(["900",
"2",
"1",
"3"]);

buying(["920.45",
"3",
"1",
"1"]);