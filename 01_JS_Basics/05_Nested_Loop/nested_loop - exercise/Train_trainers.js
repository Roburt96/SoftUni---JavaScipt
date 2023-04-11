function func(params) {
    let jury_members = params[0] * 1;
    let command = params[1];
    let index = 1;
    let sum_grades = 0;
    let total_grades = 0;
    while (command != 'Finish') {
        let course_name = command;
        let current_grades = 0;
        let current_total = 0
        for (let i = 1; i <= jury_members; i++) {
            current_grades += params[index + i] * 1;
            current_total += 1
        }
        console.log(`${course_name} - ${(current_grades / current_total).toFixed(2)}.`);
        sum_grades += current_grades;
        total_grades += current_total
        command = params[index + (jury_members + 1)];
        index += (jury_members + 1);
    }
    console.log(`Student's final assessment is ${(sum_grades / total_grades).toFixed(2)}.`);
}