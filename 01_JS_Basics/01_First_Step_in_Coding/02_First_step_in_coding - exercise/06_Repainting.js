function repainting(input) {
    let nylon = 1.50;
    let paint = 14.50;
    let thinner = 5.00;
    let plastic = 0.40;
    let totalPaint = (Number(input[1]) + (Number(input[1]) * 0.10)) * paint;
    let totalNylon = (Number(input[0]) + 2) * nylon;
    let totalThinner = Number(input[2]) * thinner;
    let totalSum = plastic + totalPaint + totalNylon + totalThinner;
    let workersSum = (totalSum * 0.3) * Number(input[3]);
    let finalSum = totalSum + workersSum;

    console.log(`${finalSum}`);
}

repainting(["10 ",
"11 ",
"4 ",
"8 "]);