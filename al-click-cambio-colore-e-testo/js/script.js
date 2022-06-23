// Creiamo una pagina con all’interno 
// un titolo di colore rosso.
// Al click di un bottone il titolo 
// diventerà blu, se è già blu torna rosso (toggle).
// Al click cambio pure il testo.
var app = new Vue(
    {
        el: '#root',
        data: {
            titleColorClass: 'red',
            titleText: 'Testo di default'
        },
        methods: {
            changeTitleClass() {
                // Cambio la classe
                if(this.titleColorClass === 'red') {
                    this.titleColorClass = 'blue';
                } else {
                    this.titleColorClass = 'red';
                }

                // Cambio il testo dell'h1
                this.titleText = 'Sono stato cliccato';
            }
        }
    }
);
