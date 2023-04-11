function school(input) {
    let pen = 5.80;
    let markers = 7.20;
    let literCleaner = 1.20;

    let penPrice = Number(input[0]) * pen;
    let markersPrice = Number(input[1]) * markers;
    let cleanerPrice = Number(input[2]) * literCleaner;
    let totalPrice = penPrice + markersPrice + cleanerPrice;
    let discount = Number(input[3]) / 100;
    let finalPrice = totalPrice - (totalPrice * discount);
    console.log(`${finalPrice}`);
}


school(["2 ",
"3 ",
"4 ",
"25 "]);