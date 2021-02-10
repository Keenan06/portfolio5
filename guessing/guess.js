var secret = 7;


var guess = document.getElementById("go");
guess.addEventListener("click", getanswer);


function getanswer() {
    var answer = parseInt(prompt("Please guess the secret number 1 to 10"));
    bringprompt(answer);

}


function bringprompt(answer) {
    var run = true;
    while (run = true) {
        if (answer === secret) {
            alert("Correct");
            run = false;
            break;
        } else if (answer > secret) {
            alert("Too high!!");
            getanswer();
            break;
        } else if (answer < secret) {
            alert("Too low");
            getanswer();
            run = false;
            break;
        } else
            alert("invalid");
        break;

    }
}