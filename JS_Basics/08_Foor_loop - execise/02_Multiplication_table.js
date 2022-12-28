function multi(input) {
    let num = input[0] * 1;
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${num} = ${i * num}`);

    }
}
multi(["5"]);