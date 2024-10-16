
// Button Order Alert

const form = document.querySelectorAll('form');
form[2].onsubmit = function (order) {
    order.preventDefault();
    if(form[1].checkValidity() && form[2].checkValidity()) { 
        alert('Your order has been created');
    } else {
        alert(`Form invalid. Please fill in all required fields.`);
    }
};

