function func(params) {
    let target_steps = 10000;
    let steps_for_day = 0;
    let index = 0
    while (index < params.length ) {
        let current_steps = params[index];
        if (current_steps == 'Going home') {
            current_steps = params[index + 1] * 1;
            steps_for_day += current_steps
            break;
        } else {
            current_steps = current_steps * 1;
            steps_for_day += current_steps;
        }
        // console.log(current_steps);
        index++;
    }
    if (steps_for_day >= target_steps) {
        console.log(`Goal reached! Good job!`);
        console.log(`${steps_for_day - target_steps} steps over the goal!`);
    } else {
        console.log(`${target_steps - steps_for_day } more steps to reach goal.`);
    }

}