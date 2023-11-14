
//Skapar random siffra
let randomNumber = Math.floor(Math.random() * 101);

//Antal försök kvar
let attempts = 5;

//Elementen som är hämtade från HTMLen
const guessBtn = document.getElementById('press');
const list = document.getElementById('guesslist');
const playAgainBtn = document.getElementById('playagain');
const element = document.getElementById('div');

//Startar funktionen vid knapptryck
guessBtn.addEventListener("click", checkGuesses);

//Resetknapp som startar spel vid knapptryck
playAgainBtn.addEventListener("click", resetGame);

console.log(randomNumber);

//Funktionen som kollar om man gissar rätt eller fel
function checkGuesses(){
    //Hämtar elementet samt skapar en variabel med gissningen
    const guessInput = document.getElementById('guessnumber');
    const guess = parseInt(guessInput.value);
    const message = document.getElementById("message");

    //Tar bort ett försök per klick
    attempts--;

    //Kollar om du angett rätt nummer
    if(guess === randomNumber){
        message.textContent = `Grattis! Du har gissat rätt, talet är ${randomNumber}!`;
        disableInput();
        return;
    } else if(attempts === 0){
        message.textContent = `Nu har du slut försök.`;
        disableInput();
        return;
    } else if(guess < randomNumber){
        //Säger om du gissat för lågt eller högt.
        const listItem = document.createElement('li');
        listItem.textContent = `Din gissning är: ${guess}, det är för lågt.`
        list.appendChild(listItem);
    } else if(guess > randomNumber){
        const listItem = document.createElement("li");
        listItem.textContent = `Din gissning är: ${guess}, det är för högt.`;
        list.appendChild(listItem);
    }

    guessInput.value = "";
};
//Funktion som avslutar spelet när du gissat rätt eller har slut försök
function disableInput(){
    guessBtn.removeEventListener("click", checkGuesses);
}


function resetGame(){
    randomNumber = Math.floor(Math.random() * 101);
    attempts = 5;

    const message = document.getElementById("message");
    message.textContent = "";

    const list = document.getElementById("guesslist");
    list.innerHTML = "";

    const guessInput = document.getElementById("guessnumber");
    guessInput.value = "";
    guessBtn.addEventListener("click", checkGuesses);
}