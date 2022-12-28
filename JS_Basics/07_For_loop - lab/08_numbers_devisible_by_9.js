function numbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0;
    let startnum = start;
    let allNums = [];

    for (let i = start; i < end; i++) {
        if (i % 9 == 0) {
            sum += i;
            allNums.push(i);
        }
    }
    console.log(`The sum: ${sum}`);
    for (let i = 0; i < allNums.length; i++) {
        console.log(allNums[i]);
    }
}
numbers(["100", "200"]);