// FUNCAO DO APP - PEGAR CEP, ACHAR ENDEREÇO e CUSPIR HTML.

// - PEGAR O CEP
function PegarCep(){
    var cep = $("#cepinput").val()
    return cep
}
// - PESQUISAR
async function PesquisarCep(cep){
    resposta = await axios(`https://viacep.com.br/ws/${cep}/json/`)
    resultado = resposta.data
    return resultado
}
// - CUSPIR RESULTADO
async function GerarHTML(address){
    $("#resultado").html(`
        <h1 class="info">${address.cep}</h1>
        <h1 class="info">${address.logradouro}</h1>
        <h1 class="info">${address.complemento}</h1>
        <h1 class="info">${address.bairro}</h1>
        <h1 class="info">${address.localidade}</h1>
        <h1 class="info">${address.uf}</h1>
        <h1 class="info">${address.ddd}</h1>
        `)
    return
}
async function ImprimirResultados(){
    cep = PegarCep()
    address = await PesquisarCep(cep)
    html = GerarHTML(address)
}
// - CHAMADAS
$(document).ready(function(){
    console.log("RODANDO!");
});


//COISAS A FAZER:
//- SUBSTITUIR CHAMADAS POR PARAMETROS

