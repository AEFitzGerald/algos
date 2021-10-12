function getTotal(arrayOfNumbers) {

    //sum starts at the value of 1, the position of arr[0]
    var sum = arrayOfNumbers[0];

    //on the first loop i is the value of arr[0]
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum);
    }

    console.log("the total is: " + sum);

}

console.log(getTotal([1, 3, 5]))

// 1 + 1
// 2 + 3
// 5 + 5  // output 10
