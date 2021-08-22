function validarForm() {
    let x = document.forms["validaForm"]["messagem"].value;
    if (x == "") {
        alert("Campo de mensagem não preenchido!");
        return false;
    }
}
(function () {
    var selectEstados = $('#estados'),
        selectCidades = $('#cidades');
    $('.cidade-select').hide();

    var url = 'https://gist.githubusercontent.com/letanure/3012978/raw/36fc21d9e2fc45c078e0e0e07cce3c81965db8f9/estados-cidades.json';
    $.getJSON(url, function (data) {
        var options = "<option value=''>Selecione um estado</option>";
        $.each(data.estados, function (key, val) {
            options += "<option value='" + val.sigla + "'> " + val.nome + "</option>";
        });
        selectEstados.html(options);
        selectEstados.on('change', function () {
            var estado = data.estados.find(function (estado) {
                return selectEstados.val() === estado.sigla;
            })
            var options = "<option value=''>Selecione uma cidade</option>";
            $.each(estado.cidades, function (key, val) {
                options += "<option value='" + val + "'> " + val + "</option>";
            });
            selectCidades.html(options);
            $('.cidade-select').show();
        });
    });
})();