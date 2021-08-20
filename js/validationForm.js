function validateForm() {
    let x = document.forms["validaForm"]["fname"].value;
    if (x == "") {
        alert("Formulário não preenchido!");
        return false;
    }
}