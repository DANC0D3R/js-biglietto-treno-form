//Assegnazione degli elementi input dall'HTML a delle variabili
const fullnameInput = document.getElementById('fullname-input');
const kmInput = document.getElementById('km-input');
const ageInput = document.getElementById('age-input');
const submit = document.querySelector('.buttons button');

// Funzione che esegue il calcolo al click sul bottone "Genera"
submit.addEventListener('click',
    function() {
        //Card del biglietto e dell'errore non visibili
        document.getElementById('ticket').style.display = 'none';
        document.getElementById('error-card').style.display = 'none';
        //Lettuara dei valori degli input
        const fullname = fullnameInput.value;
        const km = parseInt(kmInput.value);
        const age = ageInput.value;
        // Se non è stato inserito il numero di chilometri l'esecuzione genera un errore
        if (isNaN(km) == true) {
            document.getElementById('error-card').style.display = 'block';
            document.getElementById('error').innerHTML = 'Non hai inserito un valore nel campo \"Km da percorrere\". Per favore inserisci il numero di chilometri che vuoi percorrere';
        }
        else {
            //Calcolo del prezzo con tariffa standard
            const fullPrice = km * 0.21;

            // Applicazione dello sconto per fascia di età e calcolo del prezzo finale
            let price = fullPrice;

            if (age == 'ridotta') {
                price -= fullPrice * 20 / 100;
            }
            else if (age == 'silver') {
                price -= fullPrice * 40 / 100;
            }

            // Arrotondamento ai centesimi
            price = price.toFixed(2);

            //Card del biglietto visibile
            document.getElementById('ticket').style.display = 'block';
            document.getElementById('fullname-display').innerHTML = fullname;
            document.getElementById('carriage').innerHTML = Math.floor(Math.random() * 10 ) + 1;
            document.getElementById('cp-code').innerHTML = Math.floor(Math.random() * (999999 - 900000 + 1) + 900000);
            document.getElementById('price').innerHTML = price + ' &euro;';
            // Se non è stata selezionata una fascia d'età non viene applicato nessuno sconto
            if (age == 'null') {
                document.getElementById('offer').innerHTML = 'Standard';
                document.getElementById('error-card').style.display = 'block';
                document.getElementById('error').innerHTML = 'Non hai inserito la fascia d\'età pertanto il prezzo è stato calcolato con la tariffa standard. Seleziona la tua fascia d\'età e verifica se hai diritto ad uno sconto';
            }
            else {
                document.getElementById('offer').innerHTML = age;
            }
        }
    }
);
