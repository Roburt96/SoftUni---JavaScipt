function password(input) {
    let currect = "s3cr3t!P@ssw0rd";

    if (input[0] == currect) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
password(["qwerty"]);