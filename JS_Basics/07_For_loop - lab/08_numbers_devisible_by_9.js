function numbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0;
    let startnum = start;
    for (let i = start; i <= end; i++) {
        if (startnum % 9 == 0) {
            sum += startnum;
        }
        startnum += 1;
    }
    console.log(sum)
}
numbers(["100", "200"]);