const note = document.getElementById('note');

function getValue() {
    const textValue = localStorage.getItem('value');
    note.value = textValue;
    console.log(note.value);
}
function saveValue() {
    var noteValue = note.value;
    localStorage.setItem('value', noteValue);
    console.log(note.value);
}