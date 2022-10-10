// esercizio di oggi: (insicurissimo) password generator
// nome repo: js-pwdgen-wannabe
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito22


const nomeUtente = prompt("Inserisci il tuo nome");
const cognomeUtente = prompt("Inserisci il tuo cognome");
const coloreUtente = prompt("Inserisci il tuo colore preferito");

const PASSWORD = nomeUtente + cognomeUtente + coloreUtente + 22;




document.getElementById("password").innerHTML =`
    la tua password è : ${PASSWORD}
    `;

// document.getElementById('asd').innerHTML = "yas";
// const anniUtente = parseInt(prompt('Quanti anni hai?'));