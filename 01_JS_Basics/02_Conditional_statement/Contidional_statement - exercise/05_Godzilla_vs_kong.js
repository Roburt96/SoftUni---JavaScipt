function budget(input) {
    let decorPrice = Number(input[0]) * 0.10;
    let numPeoples = Number(input[1]);
    let priceCloth = Number(input[2]);
    let totalBudget = Number(input[0]);
    let discount = 0.0;
    let totalPriceCloth = 0.0;
    let finalPrice = 0.0;

    if (numPeoples > 150) {
        totalPriceCloth += numPeoples * priceCloth;
        discount += totalPriceCloth * 0.10;
        finalPrice += (totalPriceCloth - discount) + decorPrice;
    } else {
        totalPriceCloth += numPeoples * priceCloth;
        finalPrice += totalPriceCloth + decorPrice;
    }
    if (finalPrice <= totalBudget) {
        console.log("Action");
        console.log(`Wingard starts filming with ${(totalBudget - finalPrice).toFixed(2)} leva left.`)
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(finalPrice - totalBudget).toFixed(2)} leve more.`)
    }

}
budget(["9587.88",
"222",
"55.68"]);