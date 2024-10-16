// number input
let col = document.getElementById('col');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
const minValue = 1;
const maxValue = 99;
plus.onclick = function minus() {
    if (parseInt(col.value) >= maxValue) {
        return;
    } else {
        col.value = parseInt(col.value) + 1;
    }
}

minus.onclick = function plus() {
    if (parseInt(col.value) <= minValue) {
        return;
    } else {
        col.value = parseInt(col.value) - 1;
    }
}

// Cart Alert
const buy = document.getElementById('buy')
buy.onclick = function(){
     if (buy.onclick) {
        alert('Your item is added to the cart');
    } else {
        return;
        }};


// Cart Price Submit
