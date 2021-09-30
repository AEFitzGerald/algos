//1. PRINT ALL THE INTERGERS FROM 1 to 255
console.log("Problem One.")

const oneToTwoFiftyFive =()=>{
    for (let i = 1; i < 256; i++) {
        console.log(i)
    }
}
console.log(oneToTwoFiftyFive())




//2. PRINT SUM 0 - 255 
console.log("Problem Two.")

const sumOneToTwoFiftyFive =()=>{
    let sum = 0;

    for(let i = 1; i < 255; i++) {
        sum = sum + i;
        console.log(sum);
    }
    return sum;
}

console.log(sumOneToTwoFiftyFive())




//3. FIND AND PRINT MAX 
console.log("Problem Three.")


const myArr = [10, 1001, 3, 78]

const printLargestElement = arr => {
    let max = myArr[0];
    for(let i = 1; i < arr.length; i++){
        if (arr[i] > max) {
        max = arr[i];
        }
    } 
return max;
}
console.log(printLargestElement(myArr))




//4. ARRAY WITH ODDS

console.log("Problem Four.")

function arrWithOdds() {
    let oddArray = [];
    for (let i = 1; i < 256; i+=2) {
        oddArray.push(i);
        }
        console.log(oddArray)
    }  

console.log(arrWithOdds());




//5. GREATER THAN Y
console.log("Problem Five.")

let arrFive = [10, 2, 5, 1, 13]
let num = 9;

const greaterThanY =(arr,y) =>{
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
            if(arr[i] > y) {
                count++;
            }
        }
        return count;
    }
console.log(greaterThanY(arrFive, num));




//6. MAX, MIN, AVG
console.log("Problem Six.")

let arrMaxMinAvg = [88, 77, 100, 101, 343, 888]

const maxMinAvg = (arr) =>{
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        if(arr[i] < min){
            min = arr[i];
        } 
        if(arr[i] > max) {
            max = arr[i];   
        }
    }
    let avg = 0;
    avg = sum / (arr.length-1)
    return `the min value in arr is ${min}, the max value is ${max}, and the average value in arr is ${avg}`
}

console.log(maxMinAvg(arrMaxMinAvg))




//7. SWAP STRING FOR NEG VALS
console.log("Problem Seven.")

const negArr = [-5, 10, -9, -1, 44]

const swapNegatives =(arr)=>{

    for(let i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 'replaced';
        }   
    }
    return arr;
}

console.log(swapNegatives(negArr))




//8. PRINT ODDS
console.log("Problem Eight.") 

function printOdds(){
    for(let i = 1; i < 256; i+=2) {
        console.log(i);
    }
}

console.log(printOdds())




//9. ITERATE EA AND PRINT
console.log("Problem Nine.")

let iterateArr = [9,8,7,6,5,100,1]
const printArr = (arr)=> {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

console.log(printArr(iterateArr))




//10. SQUARE EACH
console.log("Problem Ten.")

let squareValuesArr = [9,8,7,6,5,11,1]
const squareEachValArr = (arr)=> {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i]*arr[i];
    }
    return arr;
}

console.log(squareEachValArr(squareValuesArr))




//11. NEG TO ZERO
console.log("Problem 11.")

let arrEleven = [-2, 9, -99, - 77, 8] 

const zeroOutNegVal = (arr) =>{
    for(let i = 0; i < arrEleven.length; i++) {
        if (arr[i]< 0){
            arr[i] = 0;
        }
    }
    return arrEleven;
}

console.log(zeroOutNegVal(arrEleven))




//12. FIRST VAL DROP, SHIFT all +1, LAST VAL to ZERO
console.log("Problem 12")

let shiftArr = [1,3,6,8,9,10]

const shiftArrValOneUp = (arr) => {
    let i = 0;
    for (let i=0; i < arr.length; i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length-1] = 0
    return arr
}

console.log (shiftArrValOneUp(shiftArr))









