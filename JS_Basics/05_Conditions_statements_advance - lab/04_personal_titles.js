

function main(input) {
    gender = input[1];
    age = input[0] * 1;
    if (age >= 16) {
        if (gender == 'm')  {
            console.log('Mr.');
        } else {
            console.log('Ms.');
        }
    } else {
        if (gender == 'm') {
            console.log('Master');
        }
        else {
            console.log('Miss');
        }
    }
}