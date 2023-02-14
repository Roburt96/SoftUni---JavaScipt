function graduation(input) {
    let average_grade = 0;
    let name = String(input[0]);
    let inx = 1;
    let current_class = 0;
    let excluted  = false;
    while (inx < input.length) {
        let current = Number(input[inx])
        current_class += 1
        if (current >= 4){
            average_grade += current;
        } else {
            excluted = true;
            console.log(`${name} has been exluded at ${current_class} grade.`);
        }
        inx++;

    }
    let avg_grade = average_grade / (input.length - 1);
    if (excluted === false){
        console.log(`${name} graduated. Average grade: ${avg_grade.toFixed(2)}`);
    }
}

graduation((["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"]))