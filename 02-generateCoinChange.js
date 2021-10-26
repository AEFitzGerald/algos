const giveCoinChange = ( input, values ) => {
    let output = {}

    for( let i = 0; i < values.length; i++ ){
        let denomination = values[i][0];
        let value = values[i][1];

        let temp = Math.floor(input / value);
        output[ denomination ] = temp;
        input -= temp * value;
    }
    return output;
}

console.log(giveCoinChange(119, [['quarter', 25],['dime', 10], ['nickel', 5], ['penny', 1]]));