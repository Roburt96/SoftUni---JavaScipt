function reverse(n, arr){
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    let output = [];
    for (let i = newArr.length - 1; i >= 0; i--) {
        output.push(newArr[i]);
    }
    console.log(output.join(' '));
}

reverse(3, [10, 20, 30, 40, 50]);