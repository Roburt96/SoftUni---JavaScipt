function greater(input) {
    let num_one = Number(input[0]);
    let num_two = Number(input[1]);

    if (num_one > num_two) {
        console.log(num_one);
    } else {
        console.log(num_two);
    }
}
greater(["5", "3"])