function read(input) {
    let totalPages = Number(input[0]);
    let PagesPerHour = Number(input[1]);
    let totalDays = Number(input[2]);

    let totalTime = totalPages / PagesPerHour;
    let hoursDay = totalTime / totalDays

    console.log(`${hoursDay}`)
}


read(["212 ",
"20 ",
"2 "]);