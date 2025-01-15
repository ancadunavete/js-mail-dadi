/*Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

let arrayMail = [
    person1@gmail.com
    person2@gmail.com
    person3@gmail.com
    person4@gmail.com
    person5@gmail.com
]

let emailPerson = prompt ("Inserisci la tua email", "name@gmail.com")

 let emailTrovata = false

for (let i = 0; i < arrayMail; i++)
    let singoloElemento = arrayMail[i]

    if (emailPerson === singoloElemento ){
        emailTrovata = true
    }

if ( emailTrovata === true) {
    console.log ( `${emailPerson} puoi accedere alla festa!`)
} else {
    console.log ( `Non puoi accedere alla festa :()` )
}