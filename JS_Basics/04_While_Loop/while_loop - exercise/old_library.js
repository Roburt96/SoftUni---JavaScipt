function library(args){
    book = args[0];
    counter_search = 0;

    i = 1;

    while (true) {
        command = args[i];
        i++;

        if (command === book) {
            console.log(`You checked ${counter_search} and found it.`);
            break;
        }else if (command === 'No More Books'){
            console.log(`The book you search is not here!`)
            console.log(`You checked ${counter_search} books.`);
            break;
        }
        counter_search++;
    }
}










library(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])
