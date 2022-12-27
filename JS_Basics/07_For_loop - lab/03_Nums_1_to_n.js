function num(input) {
    let number = Number(input[0]);
    for (let i = 1; i <= number; i += 3){
        console.log(i);
    }
}
num(["10"]);