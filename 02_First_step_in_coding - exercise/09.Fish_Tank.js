function tank(input) {
    let Vtank = Number(input[0]) * Number(input[1]) * Number(input[2]);
    let liters = Vtank / 1000;
    let busySpace = Number(input[3]) / 100;
    let nedeedLiters = liters * ( 1 - busySpace);
    console.log(`${nedeedLiters}`)
}
tank(["85 ",
"75 ",
"47 ",
"17 "]);