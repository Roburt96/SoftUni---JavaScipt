function oscars(input) {
    let points = 1250.5;
    let name = input[0];
    let academy_point = input[1] * 1;

    let current_point = 0;

    for (i = 3; i < input.lenght; i++) {
        if (i % 2 == 0) {
            academy_point += (input[i] * input[i-1].lenght) / 2;
        }
        if (academy_point > 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${(academy_point).toFixed(1)}!`);
            break;
        }
    }
    
    if (accademy_points <= 1250.5 ) {
        console.log(`Sorry, ${name} you need ${(1250.5 - academy_point).toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"]);