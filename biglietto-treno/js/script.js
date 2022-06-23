var app = new Vue(
    {
        el: '#root',
        data: {
            userName: '',
            userKm: '',
            userAge: 'standard',
            userMessagePrice: 0
        },
        methods: {
            calculatePrice() {
                // Calcoliamo il prezzo standard
                const standardPrice = parseInt(this.userKm) * 0.21;
            
                // poi eventualmente togliamo lo sconto
                let discount = 0;
                if(this.userAge === 'young') {
                    discount = standardPrice * 20 / 100;
                } else if(this.userAge === 'over') {
                    discount = standardPrice * 40 / 100;
                }
                
                const finalPrice = standardPrice - discount;
                this.userMessagePrice = finalPrice.toFixed(2);
            }
        }
    }
);