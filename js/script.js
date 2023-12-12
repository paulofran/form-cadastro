$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
    
    $('#cpf').mask('000.000.000-00', {reverse: false}); 

    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            }, 
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    })
})