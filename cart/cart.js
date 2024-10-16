// number input
let col = document.getElementsByClassName('col')[0];
let plus = document.getElementsByClassName('max')[0];
let minus = document.getElementsByClassName('min')[0];
const minValue = 1;
const maxValue = 99;


plus.onclick = function() {
    if (parseInt(col.value) >= maxValue) {
        return;
    } else {
        col.value = parseInt(col.value) + 1;
    }
}

minus.onclick = function() {
    if (parseInt(col.value) <= minValue) {
        return;
    } else {
        col.value = parseInt(col.value) - 1;
    }
}

let colTwo = document.querySelector('.col.col_two');
let plusTwo = document.querySelector('.max.max_two');
let minusTwo = document.querySelector('.min.min_two');
const minValueTwo = 1;
const maxValueTwo = 99;

plusTwo.onclick = function() {
    if (parseInt(colTwo.value) >= maxValueTwo) {
        return;
    } else {
        colTwo.value = parseInt(colTwo.value) + 1;
    }
}

minusTwo.onclick = function() {
    if (parseInt(colTwo.value) <= minValueTwo) {
        return;
    } else {
        colTwo.value = parseInt(colTwo.value) - 1;
    }
}