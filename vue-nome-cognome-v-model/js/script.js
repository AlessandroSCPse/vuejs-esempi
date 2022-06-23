// Predisponiamo due input, in cui 
// inseriremo Nome e Cognome.
// In un paragrafo utilizzare Nome 
// e Cognome per salutare l’utente

var app = new Vue(
    {
        el: '#root',
        data: {
            userName: '',
            userLastName: ''
        }
    }
);

// Versione JS Vanilla
// const nameInput = document.getElementById('name');
// const lastNameInput = document.getElementById('lastname');
// const userFullNameElement = document.getElementById('user-full-name');

// nameInput.addEventListener('keyup', changeParagraphText);
// lastNameInput.addEventListener('keyup', changeParagraphText);
// function changeParagraphText() {
//     const nameValue = nameInput.value;
//     const lastNameValue = lastNameInput.value;
    
//     const fullName = nameValue + ' ' + lastNameValue;
//     console.log(fullName);
//     // prenderci la value di name  input e lastname input
//     // aggiornare il testo del paragrafo
//     userFullNameElement.innerHTML = fullName;
// }