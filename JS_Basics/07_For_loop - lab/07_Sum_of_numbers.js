function sumnumber(arg) {
    let num = Number(arg[0]);
    let sum = 0;
    for (let i = 0; i < arg.lenght; i++) {
        sum += Number(arg[i]);
    }
    console.log(sum)
}
sumnumber(["1234"]);