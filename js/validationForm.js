function validateForm() {
    let x = document.forms["validaForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}