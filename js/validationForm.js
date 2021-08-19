function validateForm() {
    let x = document.forms["validaForm"]["fname"].value;
    if (x == "") {
        alert("Campo não preenchido!");
        return false;
    }
}