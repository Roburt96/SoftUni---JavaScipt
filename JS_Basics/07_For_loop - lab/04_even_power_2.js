function num(input) {
    let number = Number(input[0]);
    let num = 1;
    for (let i = 1; i <= number; i += 2) {
        console.log(num);
        num = num * 2 * 2;
    }
}
num(["3"]);