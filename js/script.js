var btnGenera = document.getElementById("genera");
var btnAnnulla = document.getElementById("annulla");

var nome = document.getElementById("nome").value;
var km = document.getElementById("km").value;
var fascia = document.getElementById("fascia").value;

// prezzo biglietto
btnGenera.addEventListener("click",
    function() {
        if ( nome != "" && !isNaN(km) && fascia != "") {
            var prezzo = km * 0.21;
            var offerta = "Standard";
        }
         else if ( fascia == "minorenne") {
            prezzo = prezzo - (prezzo*20/100);
            offerta = "Offerta minorenni"
        } else if ( fascia == "over") {
            prezzo = prezzo - (prezzo*50/100);
            offerta = "Offerta Over ";
        }
        document.getElementById("nome-passeggero").innerHTML = nome;
        document.getElementById("offerta").innerHTML = offerta;
        document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 9) + 1;
        document.getElementById("codice-cp").innerHTML = Math.floor(Math.random() * (99999 - 90000) ) + 90000;
        document.getElementById("costo-biglietto").innerHTML = prezzo + "€";
        document.getElementById("biglietto").classList.add("open");
     } else {
            alert("Errore, riprova");
        }
);


