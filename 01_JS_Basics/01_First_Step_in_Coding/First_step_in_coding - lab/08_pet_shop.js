function zoo(input) {
    let dog_food = 2.5;
    let cat_food = 4;
    let total = (Number(input[0]) * dog_food) + (Number(input[1]) * cat_food)
    console.log(`${total} lv.`)
}
zoo(["5 ", "4 "])