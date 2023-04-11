function func(country){
    let result = 'unknown';
    switch (country) {
        case 'USA':
            result = 'English';
            break;
        case 'England':
            result = 'English';
            break;
        case 'Spain':
            result = 'Spanish';
            break;
        case 'Mexico':
            result = 'Spanish';
            break;
        case 'Argentina':
            result = 'Spanish';
            break;
    }
    return result;
}
console.log(func('Bg'));