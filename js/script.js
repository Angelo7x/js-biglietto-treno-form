var btnGenera = document.getElementById("genera");
var btnAnnulla = document.getElementById("annulla");



// prezzo biglietto
btnGenera.addEventListener("click",
    function() {
        var nome = document.getElementById("nome").value;
        var km = document.getElementById("km").value;
        var fascia = document.getElementById("fascia").value;
        if ( nome != "" && !isNaN(km) && fascia != "") {
            var prezzo = km * 0.21;
            var nomeOfferta = "Standard";
        }
         else if ( fascia == "minorenne") {
            prezzo = prezzo - (prezzo*20/100);
            nomeOfferta = "Offerta minorenni"
        } else if ( fascia == "over") {
            prezzo = prezzo - (prezzo*50/100);
            nomeOfferta = "Offerta Over";
        }

        document.getElementById("nome-passeggero").innerHTML = nome;
        document.getElementById("offerta").innerHTML = nomeOfferta;
        document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 9) + 1;
        document.getElementById("codice-cp").innerHTML = Math.floor(Math.random() * (99999 - 90000) ) + 90000;
        document.getElementById("costo-biglietto").innerHTML = prezzo + "€";
        document.getElementById("biglietto").classList.add("open");

        }
);

btnAnnulla.addEventListener("click", 
	function() {
		document.getElementById("biglietto").classList.remove("open");
}
);

