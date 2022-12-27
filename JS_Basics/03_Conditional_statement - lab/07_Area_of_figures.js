function area(input) {
    let figure = input[0];

    if (figure == "square") {
        let side = Number(input[1]);
        let S_square = side * side;
        console.log(S_square.toFixed(3));
    } else if (figure == "rectangle") {
        let side_a = Number(input[1]);
        let side_b = Number(input[2]);
        let S_rectangle = side_a * side_b;
        console.log(S_rectangle.toFixed(3));
    } else if (figure == "circle") {
        let diametre = Number(input[1])
        let S_circle = (diametre * diametre * Math.PI)
        console.log(S_circle.toFixed(3))
    } else if (figure == "triangle") {
        let side_a = Number(input[1]);
        let height = Number(input[2]);
        let S_triangle = (side_a * height) / 2;
        console.log(S_triangle.toFixed(3));
    }
}

area(["triangle", "4.5", "20"])