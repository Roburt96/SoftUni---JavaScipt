function clock(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]) + 15;

    if (minutes > 59) {
        hours += 1;
        minutes -= 60;
    }
    if (hours > 23) {
        hours = 0;
    }
    if (minutes < 10){
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }

}
clock(["1", "46"]);