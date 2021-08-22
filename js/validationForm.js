function validarForm() {
    let x = document.forms["validaForm"]["messagem"].value;
    if (x == "") {
        alert("Campo de mensagem não preenchido!");
        return false;
    }
}
(function () {
    let selectEstados = $('#estados'),
        selectCidades = $('#cidades');
    $('.cidade-select').hide();

    var url = 'https://gist.githubusercontent.com/letanure/3012978/raw/36fc21d9e2fc45c078e0e0e07cce3c81965db8f9/estados-cidades.json';
    $.getJSON(url, function (data) {
        let options = "<option value=''>Selecione um estado</option>";
        $.each(data.estados, function (key, val) {
            options += "<option value='" + val.sigla + "'> " + val.nome + "</option>";
        });
        selectEstados.html(options);
        selectEstados.on('change', function () {
            let estado = data.estados.find(function (estado) {
                return selectEstados.val() === estado.sigla;
            })
            let options = "<option value=''>Selecione uma cidade</option>";
            $.each(estado.cidades, function (key, val) {
                options += "<option value='" + val + "'> " + val + "</option>";
            });
            selectCidades.html(options);
            $('.cidade-select').show();
        });
    });
})();

// pegar botão
let btnScroll = document.getElementById("btnScroll");

// quando rolar a página 20px do topo para baixo, o botão será exibido
window.onscroll = function () { funcaoScroll() };

function funcaoScroll()  {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnScroll.style.display = "block";
    } else {
        btnScroll.style.display = "none";
    }
}

// // quando clicar no botão, a página rola para o topo do documento
function funcaoTopo() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}