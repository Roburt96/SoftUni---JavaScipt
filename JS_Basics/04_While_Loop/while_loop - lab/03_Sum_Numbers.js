function sum_numbers(input) {
    let target_sum = Number(input[0]);
    let total_sum = 0;
    i = 1;
    while (total_sum < target_sum) {
        total_sum += Number(input[i]);
        i++;
    }
    console.log(total_sum);
}

sum_numbers((["100",
    "10",
    "20",
    "30",
    "40"]))