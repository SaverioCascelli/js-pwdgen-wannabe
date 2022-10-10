// esercizio di oggi: (insicurissimo) password generator
// nome repo: js-pwdgen-wannabe
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito22


const nomeUtente = prompt("Inserisci il tuo nome");
const cognomeUtente = prompt(`
${nomeUtente} inserisci il tuo cognome
`);
const coloreUtente = prompt(`
${nomeUtente}  ${cognomeUtente}  inserisci il tuo colore preferito
`);

const PASSWORD = nomeUtente + cognomeUtente + coloreUtente + 22;




document.getElementById("password").innerHTML =`
    la tua password è : ${PASSWORD}
    `;

