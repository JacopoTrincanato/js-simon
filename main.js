console.log('ciao');

/*Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.*/

/*Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"*/




//creo una variabile dove contenere i numeri generati
let randomNumbers = getRandomNumber(1, 100);
console.log(randomNumbers);

//prendo l'elemento in cui inserirò i numeri nell'html con getElementById
let numbers = document.getElementById('numbers');

numbers.innerHTML = randomNumbers;


//Creo una funzione che mi permetta di visualizzare in pagina 5 numeri casuali
function getRandomNumber(min, max){
    let arr = [];
    for (let i = 0; i < 5; i++){

        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr
}

//prendo l'elemento in cui inserirò i secondi del timer nell'html con getElementById

let timerSeconds = document.getElementById('timer');
let seconds = 1;

//creo una variabile dove inserire il timing
let clock = setInterval(timer, 1000)

//creo la funzione timer
function timer(){
    if (seconds == 30) {
        timerSeconds.innerHTML = 'Inserisci i numeri negli input';
        timerSeconds.innerHTML = aggiungiInput();
        numbers.innerHTML = '';
        clearInterval(clock);
    }else {
        timerSeconds.innerHTML = seconds;
        seconds++
    }
}

//creo la funzione per aggiungere gli input
function aggiungiInput() {
    
    for (let i = 0; i < 5; i++){
        let newInput = document.createElement("input");

        newInput.type = "text";
        newInput.name = "newInput";
        newInput.placeholder = "Inserisci il numero";
    
        let container = document.getElementById("inputContainer");
        container.appendChild(newInput);
    }
    
    
}