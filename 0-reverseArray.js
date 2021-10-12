
const reverseArray = (arr) => {
    for(let i = 0; i < Math.floor.arr.length/2; i++){
        let temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length -1 - i] = temp;
    }
    return arr
} 

console.log(reverseArray["a", "b", "c", "d", "e"])

//first loop:
//temp = a --> set index 0 to the value of the last index in arr --> [e,b c,d,e]
//set the last value of the arr to temp --> [e, b, c, d, a]
//second loop:
//temp = b --> set index 1 to the value of index of 3(arr.length - 1 - 1) --> [e, d, c, d, a]
//set index 3 to be the value of temp -->[e, d, c, b, a]
//third loop:
//i = 2, i is not less than 2 // stop
//console.log ---> [e,d,c,b,a]
