function histogram(input) {
    let numTo200 = 0;
    let num200to399 = 0;
    let num400to599 = 0;
    let num600to799 = 0;
    let num800 = 0;
    let n = Number(input[0]);

    for (let i = 1; i <= n; i++) {
        let curr_num = Number(input[i]);
        if (curr_num < 200) {
            numTo200 += 1;
        } else if (curr_num < 400) {
            num200to399 += 1;
        } else if (curr_num < 600) {
            num400to599 += 1;
        } else if (curr_num < 800) {
            num600to799 += 1;
        } else if (curr_num >= 800) {
            num800 += 1;
        }
    }
    let total = input.lenght - 1;
    console.log(`${(numTo200 / total * 100).toFixed(2)}%`);
    console.log(`${(num200to399 / total * 100).toFixed(2)}%`);
    console.log(`${(num400to599 / total * 100).toFixed(2)}%`);
    console.log(`${(num600to799 / total * 100).toFixed(2)}%`);
    console.log(`${(num800 / total * 100).toFixed(2)}%`);
}

histogram(["3",
"1",
"2",
"999"]);