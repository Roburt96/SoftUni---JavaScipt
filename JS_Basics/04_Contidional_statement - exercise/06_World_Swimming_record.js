function worldrecord(input) {
    let TotalTimeForSwim = Number(input[1]) * Number(input[2]);
    let delayTime = (Number(input[1]) / 15) * 12.5;
    let TotalTimeWithDelay = TotalTimeForSwim + delayTime;
    let record = Number(input[0]);
    if (TotalTimeWithDelay > record) {
        console.log(`No, he failed! He was ${(TotalTimeWithDelay - record).toFixed(2)} seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${(record - TotalTimeWithDelay).toFixed(2)} seconds.`)
    }
}
worldrecord(["10464",
"1500",
"20"]);

worldrecord(["55555.67",
"3017",
"5.03"]);