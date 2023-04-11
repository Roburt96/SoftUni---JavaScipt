function calcolator(input) {
    let depositSum = Number(input[0]);
    let depositMonth = Number(input[1]);
    let yearPercent = Number(input[2]) / 100;
    let totalInterest = depositSum * yearPercent
    let monthInterest = totalInterest / 12
    let totalSum = depositSum + depositMonth * monthInterest
    
    console.log(`${totalSum}`)
}
calcolator(["200", "3", "5.7"])