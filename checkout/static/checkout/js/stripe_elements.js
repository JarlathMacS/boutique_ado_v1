/*
    Core logic/payment flow for this comes from here:
    https://stripe.com/docs/payments/accept-a-payment

    CSS from here: 
    https://stripe.com/docs/stripe-js
*/

var stripe_public_key = $('#id_stripe_public_key').text().slice(1, -1);
var client_secret = $('#id_client_secret').text().slice(1, -1);

var stripe = Stripe(stripe_public_key);
var elements = stripe.elements();

var style = {
    base: {
      iconColor: '#000',
      color: '#000',
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      iconColor: '#dc3545',
      color: '#dc3545',
    },
};

var card = elements.create('card', {style: style});

card.mount('#card-element');

// Handle real-time validation errors from the card Element.
// card.addEventListener('change', function(event) {
//     var displayError = document.getElementById('card-errors');
//     if (event.error) {
//         displayError.textContent = event.error.message;
//     } else {
//         displayError.textContent = '';
//     }
// });

// Handle form submission.
// var form = document.getElementById('payment-form');
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     stripe.confirmCardPayment(client_secret, {
//         payment_method: {
//             card: card,
//         }
//     }).then(function(result) {
//         if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
        //     var errorElement = document.getElementById('card-errors');
        //     errorElement.textContent = result.error.message;
        // } else {
            // The payment has been processed!
//             if (result.paymentIntent.status === 'succeeded') {
//                 form.submit();
//             }
//         }
//     });
// });