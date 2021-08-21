function validateForm() {
    let x = document.forms["validaForm"]["fname"].value;
    if (x == "") {
        alert("Campo de mensagem não preenchido!");
        return false;
    }
}