const parensValid = str => {
    let parens = 0

    for ( i = 0; i < str.length; i++ ) {
        if ( str[i] == '(' ) {
            parens++
        }
        else if( str[i] == ')' ) {
            parens --
            if ( parens < 0 ) {
                return false
            }    
        }
    }
    return parens == 0
}

console.log(parensValid(')'))
console.log(parensValid('()'));
console.log(parensValid('(())'));
console.log(parensValid(')('));
console.log(parensValid('(()'));
console.log(parensValid('(9)(101(10)12'))
console.log(parensValid('hello!'));