function equipment(input) {
    let shoesPrice = Number(input[0]) - (Number(input[0]) * 0.40);
    let clothPrice = shoesPrice - (shoesPrice * 0.20);
    let ballPrice = clothPrice / 4;
    let gadjetsPrice = ballPrice / 5;
    let totalPrice = Number(input[0]) + shoesPrice + clothPrice + ballPrice + gadjetsPrice;
    console.log(`${totalPrice}`)


}
equipment(["365 "]);