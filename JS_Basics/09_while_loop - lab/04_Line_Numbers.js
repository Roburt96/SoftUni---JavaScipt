function num(input) {
    let number = Number(input);
    let start_inx = 1;
    while (start_inx <= number) {
        console.log(start_inx);
        start_inx = start_inx * 2 + 1;
    }
    
}
num([8])