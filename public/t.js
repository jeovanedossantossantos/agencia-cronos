/**
 * Elementos
 */

let container = document.getElementById("container")
let nome = document.getElementById("cronosName")
let linkImagem = document.getElementById("cronosImage")
let descricao = document.getElementById("cronosDes")
let nomeED = document.getElementById("cronosNameED")
let linkImagemED = document.getElementById("cronosImageED")
let descricaoED = document.getElementById("cronosDesED")
let tbody = document.getElementById("tbody")


// Estanciando um Array e um objeto do tipo localStorage e convertendo ele para um JSON
let itens = new Array()
if (localStorage.hasOwnProperty("itens")) {
    itens = JSON.parse(localStorage.getItem("itens"))
}
// Função que chama o modal para fazer a edição 
function editar(key) {
    setNameEdicao(key)
    $('#edicao').modal('show'); //use JQuery


}
// Função que vai mostra todas os cursos
function listarTabela() {

    tbody.innerHTML = ""
    if (itens.length === 0) {
        itens.push({
            name: "Desenvolvimento Web",
            image: "imagens/ilustra-web.png",
            descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."
        })
        itens.push({
            name: "Marketing Digital",
            image: "imagens/ilustra-marketing.png",
            descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."
        })

        itens.push({
            name: "Consultoria UX",
            image: "imagens/ilustra-ux.png",
            descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."
        })
        localStorage.setItem("itens", JSON.stringify(itens))
    }

    let lista = []
    if (localStorage.length > 0) {
        for (var i = 0; i < localStorage.length; i++) {

            lista.push(localStorage.getItem(localStorage.key(i)))

        }
        console.log(lista)
        let ob = JSON.parse(lista);

        for (let i = 0; i < ob.length; i++) {


            let tr = tbody.insertRow();

            let tdNome = tr.insertCell();
            let tdImg = tr.insertCell();
            let tdDesc = tr.insertCell();
            let tdBotoes = tr.insertCell();

            tdNome.innerText = ob[i].name;


            let addImagem = document.createElement('img');
            addImagem.src = ob[i].image;
            tdImg.appendChild(addImagem);

            tdDesc.innerText = ob[i].descricao;

            let botaEdicao = document.createElement("BUTTON")
            botaEdicao.appendChild(document.createTextNode('editar'))
            botaEdicao.classList.add("btn")
            botaEdicao.classList.add("btn-secondary")
            botaEdicao.classList.add("m-1")
            botaEdicao.setAttribute("onclick", `editar('${ob[i].name}')`)



            tdBotoes.appendChild(botaEdicao)

            let botaExcluir = document.createElement("BUTTON")
            botaExcluir.appendChild(document.createTextNode('Excluir'))
            botaExcluir.classList.add("btn")
            botaExcluir.classList.add("btn-danger")
            botaExcluir.classList.add("m-1")
            botaExcluir.setAttribute("onclick", `excluir('${ob[i].name}')`)



            tdBotoes.appendChild(botaExcluir)



        }

    } else {
        alert("Erro!")
    }
}

listarTabela()