const isBalanced = ( input ) => {
    let bracketStack = []

    for ( let i = 0; i < input.length; i++){
        if( input[i] == "(" || input[i] == "{" || input[i] == "["){
            bracketStack.push( input[i] );
        }
        else {
            if ( input[i] == ")") {
                if ( bracketStack[bracketStack.length - 1] == "("){
                    bracketStack.pop();
                }
                else {
                    return false;
                }
            }
            if ( input[i] == "}") {
                if ( bracketStack[bracketStack.length - 1] == "{"){
                    bracketStack.pop();
                }
                else {
                    return false;
                }
            }
            if ( input[i] == "]") {
                if ( bracketStack[bracketStack.length - 1] == "["){
                    bracketStack.pop();
                }
                else {
                    return false;
                }
            }

        }
    }
    return bracketStack.length == 0
} 

console.log(isBalanced("[]{}()"))
console.log(isBalanced("[{}]{}({})"))
console.log(isBalanced("[234, 0, {56}, 14 ]{25}({19},33)"))

console.log(isBalanced("[(234, 0, {56}, 14 ]{25}({19},33)"))
console.log(isBalanced("[({56}, ]14 ]{25}({19},33)"))
console.log(isBalanced("["))

