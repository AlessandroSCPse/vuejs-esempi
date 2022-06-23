// Al click su un button
// cambia il testo di un paragrafo

var app = new Vue(
    {
        el: '#root',
        data: {
            paragraphText: 'Sono il testo originale'
        },
        methods: {
            changeText() {
                this.paragraphText = 'Sono il testo modificato'
            },
        }
    }
);
