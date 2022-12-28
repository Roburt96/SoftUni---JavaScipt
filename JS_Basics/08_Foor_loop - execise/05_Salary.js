function check(input) {
    let number_tabs = input[0] * 1;
    let salary = input[1] * 1;

    for (let i = 2; i <= number_tabs + 1; i++) {
        if (input[i] == "Facebook") {
            salary -= 150;
        } else if (input[i] == "Instagram") {
            salary -= 100;
        } else if (input[i] == 'Reddit') {
            salary -= 50;
        }
        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }   
    }
    if (salary > 0) {
        console.log(salary.toFixed(0));
    }
    
}
check(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);