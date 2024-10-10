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

//creo un array vuoto
let arr = [];
//Creo una funzione che mi permetta di visualizzare in pagina 5 numeri casuali
function getRandomNumber(min, max){
    
    for (let i = 0; arr.length < 5; i++){

        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr
}

//creo una variabile dove contenere i numeri generati
let randomNumbers = getRandomNumber(1, 100);
console.log(randomNumbers);

//prendo l'elemento in cui inserirò i numeri nell'html con getElementById
let numbers = document.getElementById('numbers');

//inserisco i numeri generati nell'html
numbers.innerHTML = randomNumbers;


//prendo l'elemento in cui inserirò i secondi del timer nell'html con getElementById

let timerSeconds = document.getElementById('timer');
//creo una variabile con il valore da cui il timer parte a contare
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
        //creo l'input
        let newInput = document.createElement("input");
        //creo il tipo di input
        newInput.type = "text";
        //assegno un nome all'input
        newInput.name = "newInput";
        //assegno un placeholder all'input
        newInput.placeholder = "Inserisci il numero";
        //assegno una classe all'input
        newInput.classList.add("input");
        //prendo il container tramite id
        let container = document.getElementById("inputContainer");
        //assegno al container l'input come figlio
        container.appendChild(newInput);
    }
    
    
}

//verifico se i numeri inseriti negli input corrispondono a quelli generati
let button = document.getElementById('button');

//aggiungo un evento al bottone
button.addEventListener('click', ()=>{
    //seleziono tutti gli input con classe 'input'
    let input = document.querySelectorAll('.input');
    //creo un nuovo array vuoto
    let newArr = [];
    //creo una variabile message che mostrerà quanti e quali numeri l'utente ha indovinato
    let message = '';
    //creo una variabile contatore 
    let counter = 0;

    //ciclo i valori degli input
    for (let i = 0; i < input.length; i++) {
        let element = Number(input[i].value)
        if(arr.includes(element)){
            counter++
            newArr.push(element);
            message = `Complimenti, hai indovinato ${counter} numero/i: ${newArr.join(", ")}`
        }else{
            message = 'Non hai indovinato nessun numero'
        }
        
        
    }
    console.log(counter, newArr, message);
})
