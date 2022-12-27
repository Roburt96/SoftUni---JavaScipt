function delivery(input) {
    let deliverySum = 2.50

    let chickenMenu = Number(input[0]) * 10.35;
    let fishMenu = Number(input[1]) * 12.40;
    let veganMenu = Number(input[2]) * 8.15;
    let totalSumMenu = chickenMenu + fishMenu + veganMenu;
    let desertCost = totalSumMenu * 0.20;

    let finalPrice = totalSumMenu + deliverySum + desertCost;
    console.log(`${finalPrice}`);
}
delivery(["2 ",
"4 ",
"3 "]);