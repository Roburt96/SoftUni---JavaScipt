function vowels([arg1]) {
    let text = arg1
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == 'a') {
            sum += 1;
        } else if (text[i] == 'e') {
            sum += 2;
        } else if (text[i] == 'i') {
            sum += 3;
        } else if (text[i] == 'o') {
            sum += 4;
        } else if (text[i] == 'u') {
            sum += 5;
        }
    }
    console.log(sum);
}
vowels(["hello"]);
