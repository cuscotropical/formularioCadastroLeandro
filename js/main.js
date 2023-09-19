$(document).ready(function() {
    // Aplicar máscara para CPF
    $('#cpf').mask('000.000.000-00', {reverse: true});

    // Aplicar máscara para telefone
    $('#telefone').mask('(00) 0000-00009');

    // Aplicar máscara para CEP
    $('#cep').mask('00000-000');
});