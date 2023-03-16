function speed(input) {
    let current_speed = Number(input[0]);

    if (current_speed <= 10) {
        console.log("slow")
    } else if ( current_speed > 10 && current_speed <= 50) {
        console.log("average");
    } else if (current_speed > 50 && current_speed <= 150) {
        console.log("fast");
    } else if (current_speed > 150 && current_speed <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}
speed(["3500"])