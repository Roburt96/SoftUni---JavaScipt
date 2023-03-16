function bonus(input) {
    let total_bonus = 0.0
    let num = Number(input[0]);

    if (num <= 100) {
        total_bonus = 5;
    } else if (num > 1000) {
        total_bonus = num * 0.10;
    } else {
        total_bonus = num * 0.20;
    }

    if (num % 2 == 0) {
        total_bonus += 1;
    } else if (num % 10 == 5) {
        total_bonus += 2;
    }
    console.log(total_bonus);
    console.log(total_bonus + num);
    
    
}

bonus(["20"])