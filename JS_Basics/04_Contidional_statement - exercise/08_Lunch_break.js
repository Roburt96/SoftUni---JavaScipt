function break_lunch(input) {
    let movie = input[0];
    let movieTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunch = breakTime / 8;
    let free_time = breakTime / 4;
    let timeLeft = breakTime - (lunch + free_time);

    if (timeLeft >= movieTime) {
        console.log(`You have enough time to watch ${movie} and left with ${timeLeft - movieTime} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${movie}, you need ${Math.ceil(movieTime - timeLeft)} more minutes.`)
    }
}

break_lunch(["Game of Thrones",
"60",
"96"]);

break_lunch(["Teen Wolf",
"48",
"60"]);