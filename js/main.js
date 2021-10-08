let messaggio = "";
let messaggioErrore =
  "Parametro errato, si prega di inserire un numero (maggiore di 0). Per riprovare, è necessario ricaricare la pagina.";
let tipologiaSconto = "Nessuno";

//Richiesta input chilometri della tratta
const inputUtenteTratta = prompt("Lunghezza della tratta in km:");
const lunghezzaTratta = parseInt(inputUtenteTratta);
if (isNaN(lunghezzaTratta) || lunghezzaTratta <= 0) {
  messaggio = messaggioErrore;
} else {
  //Richiesta input età del passeggero
  const inputUtenteEta = prompt("Eta del passeggero:");
  const etaPasseggero = parseInt(inputUtenteEta);
  if (isNaN(etaPasseggero) || etaPasseggero <= 0 || etaPasseggero > 150) {
    messaggio = messaggioErrore;
  } else {
    //Calcolo prezzo del biglietto
    const tariffaChilometrica = 0.21;
    let costoBiglietto = tariffaChilometrica * lunghezzaTratta;

    //Calcolo sconto
    const scontoMinorenni = 0.2;
    const scontoOver65 = 0.4;
    if (etaPasseggero < 18) {
      costoBiglietto -= costoBiglietto * scontoMinorenni;
      tipologiaSconto = "-20% (sconto minorenni)";
    }
    if (etaPasseggero >= 65) {
      costoBiglietto -= costoBiglietto * scontoOver65;
      tipologiaSconto = "-40% (sconto over65)";
    }

    //Formattazione prezzo
    let prezzoBigliettoArrotondato = Math.round(costoBiglietto * 100) / 100;
    let parteInteraPrezzoBiglietto = Math.floor(prezzoBigliettoArrotondato);
    console.log("PrezzoArrotondato: " + prezzoBigliettoArrotondato);
    let parteDecimalePrezzoBiglietto = Math.round(
      (prezzoBigliettoArrotondato - parteInteraPrezzoBiglietto) * 100
    );
    if (parteDecimalePrezzoBiglietto === 0) {
      parteDecimalePrezzoBiglietto = "00";
    }
    let separatoreDecimali = ",";
    let valuta = "€";
    let prezzoBigliettoFormattazioneLocale =
      parteInteraPrezzoBiglietto +
      separatoreDecimali +
      parteDecimalePrezzoBiglietto +
      valuta;

    // Costruzione messaggio di riepilogo del biglietto
    messaggio = `Riepilogo biglietto:\n\nLunghezza tratta: ${lunghezzaTratta}km\nSconto: ${tipologiaSconto}\nPrezzo: ${prezzoBigliettoFormattazioneLocale}\n\nGrazie per aver usufruito del nostro servizio! Per calcolare il prezzo di un altro biglietto, la preghiamo di ricaricare la pagina.`;
  }
}

alert(messaggio);
