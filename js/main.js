let messaggio = "";
const tariffaChilometrica = 0.21;

let inserimentoUtenteTratta = prompt("Quanti chilometri devi percorrere?");
let lunghezzaTratta = parseInt(inserimentoUtenteTratta);
if (isNaN(lunghezzaTratta)) {
  messaggio =
    "Parametro errato, si prega di inserire un numero. Per riprovare, è necessario ricaricare la pagina.";
} else if (lunghezzaTratta <= 0) {
  messaggio =
    "Parametro errato, si prega di inserire un numero maggiore di 0. Per riprovare, è necessario ricaricare la pagina.";
} else {
  const costoBiglietto = tariffaChilometrica * lunghezzaTratta;
  const scontoMinorenni = 0.2;
  const scontoOver65 = 0.4;

  let etaPasseggero = prompt("Quanti anni hai?");
  if (etaPasseggero < 18) {
    costoBiglietto -= costoBiglietto * scontoMinorenni;
  }
  if (etaPasseggero >= 65) {
    costoBiglietto -= costoBiglietto * scontoOver65;
  }

  let prezzoBigliettoFormattato = Math.round(costoBiglietto * 100) / 100;
  const valuta = "€";

  messaggio =
    "Il costo del tuo biglietto è di " + prezzoBigliettoFormattato + valuta;
}

alert(messaggio);
