function ranking(input) {
    let tournaments = input[0] * 1;
    let points = input[1] * 1;
    let starting_ponts = points;
    let winned_tournaments = 0;
    for (let i = 2; i < input.length; i++) {
        let ranking = input[i];
        if (ranking == 'W') {
            points += 2000;
            winned_tournaments++;
        } else if (ranking == 'F') {
            points += 1200;
        } else if (ranking == 'SF') {
            points += 720
        }
    }
    console.log(`Final points: ${points}`);
    console.log(`Average points: ${ Math.floor((points - starting_ponts) / tournaments)}`);
    console.log(`${ ((winned_tournaments / tournaments) * 100).toFixed(2)}%`);
}