
//roll the 6 sided dice return random roll
const d6= () => {
    let roll = Math.ceil(Math.random() * 6)
    return roll;
}

var playerRoll = d6();
console.log(`The player rolled: ${playerRoll}`)


//shake the eight ball return random answer
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];


function giveLifesAnswers () {

    var answer = Math.random ();
    var randomNumberForAnswer = answer * lifesAnswers.length;
    var randomIndex = Math.floor(randomNumberForAnswer);

return lifesAnswers[randomIndex];

}


var tellMe = giveLifesAnswers()
console.log(tellMe);