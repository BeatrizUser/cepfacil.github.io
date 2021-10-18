// FUNCAO DO APP - PEGAR CEP, ACHAR ENDEREÇO e CUSPIR HTML.

// - PEGAR O CEP
function pegarcep(){
    var cep = $("#cepinput").val()
    return cep
}
// - PESQUISAR
async function pesquisarcep(){
    // cep = await pegarcep();
    resposta = await axios(`https://viacep.com.br/ws/${cep}/json/`)
    resultado = resposta.data
    return resultado
}
// - CUSPIR RESULTADO
async function gerarhtml(){
    pesquisa = await pesquisarcep()
    $("#resultado").html(`
        <h1 class="info">${pesquisa.cep}</h1>
        <h1 class="info">${pesquisa.logradouro}</h1>
        <h1 class="info">${pesquisa.complemento}</h1>
        <h1 class="info">${pesquisa.bairro}</h1>
        <h1 class="info">${pesquisa.localidade}</h1>
        <h1 class="info">${pesquisa.uf}</h1>
        <h1 class="info">${pesquisa.ddd}</h1>
        `)
}
// - CHAMADAS
$(document).ready(function(){
    console.log("RODANDO!");
});


