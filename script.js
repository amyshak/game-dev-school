function game (){
    const number = Math.ceil(Math.random() * 100);
    console.log(number);
    const answer = parseInt(prompt('Enter the number'),10); // к десятиричному    
    step(number, answer);
}

function step (number, answer){
    let i = 1,
        answers = [answer];
    while (answer !== number){
    //    if (answer > number) {
    //     answer = parseInt(prompt ('Less'), 10);
    //    } else if (answer < number) {
    //     answer = parseInt(prompt ('More'), 10);
    const message = answer > number ? `Less than ${answer}`: `More than ${answer}`;
    answer = parseInt(prompt(message), 10);
    i++;
    answers.push(answer);
         }
    alert (`Correct! Number is ${number}! You've got it in ${i} steps. Your numbers: ${answers}`);     
    const newGame = confirm ('New Game?');
    if (newGame) game(); 
}
game ();