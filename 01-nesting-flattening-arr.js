var arr2d = [ [2, 5, 8],
            [3, 6, 1],
            [5, 7, 7] ]
    

console.log(arr2d[0][2])
console.log(arr2d[2][0])
// select sub array at position 0, select value in sub array at position 2 
// select sub array at position 2, select value in sub array at position 0

let checkArr = [ [0,10,11], 
                [29, 44, 5], 
                [6,2,1] ]

const isPresent = (arr, n) => {
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (arr[i][j] == n){
                return `${n} is present!`
            }
        }    
    }
    return "not present!"
}

console.log(isPresent(checkArr, 6))
console.log(isPresent(checkArr, 11))

// given an array containing arrays, flatten the array- 
//the array might be jagged
//Don't use built-in methods like Array.prototype.flat() use .push(value) and/or .pop() where needed.

function flatten(arr2d) {
    let flat = [];
    for(let i = 0; i < arr2d.length; i++){
        for (let j = 0; j < arr2d.length; j++){
            flat.push(arr2d[i][j])
        }
    }
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); 