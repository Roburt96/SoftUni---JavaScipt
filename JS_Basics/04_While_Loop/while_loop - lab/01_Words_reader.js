function words(input) {
    i = 0;
    while (true) {
        command = input[i];
        i++
        if (command === "Stop") {
            break;
        }
        console.log(command);
    }

}

words(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])