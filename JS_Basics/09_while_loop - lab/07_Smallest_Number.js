function numbers(input){
    let cur_num = 10000000000;
    let command = input.shift();
    while (command!== 'Stop'){
        if (command === 'Stop'){
            break;
        }
        let number = Number(command);
        if (number < cur_num) {
            cur_num = number;
        }
        command = input.shift();

    }
    console.log(cur_num);

}
// numbers((["100",
//     "99",
//     "80",
//     "70",
//     "Stop"]))

numbers((["-10",
    "20",
    "-30",
    "Stop"]))