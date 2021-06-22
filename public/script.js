var val = 0.00;

function addnum(input, character) {
    if (input.value == 0) {
        input.value = character
    }
    else { input.value += character }
}

function deletenum(input) {
    input.value = input.value.substring(0, input.value.length - 1)
}

function calculate(form) {
    form.show.value = eval(form.show.value);
}











