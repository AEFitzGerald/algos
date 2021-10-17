const reverseString = (input) => {

    let reverseString = ""

    for(let i = input.length - 1; i >= 0; i--){
        reverseString += input[i]
    }
    console.log(reverseString)
    return reverseString

}

reverseString("doggie chases kitty, kitty climbs tree")