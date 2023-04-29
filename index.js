let input = document.getElementById("input-principal")
let botao = document.getElementById("botao-adicionar")
let toDoList = document.getElementById("tarefas")

let arrayDeTarefas = []

function cliqueiNoBotao(){
    arrayDeTarefas.push(input.value)//vai colocar o valor que esta dentro do input dentro do arrayDeTarefas)
    mostrarNaTela()
}

function mostrarNaTela(){
    let novaLista = ""

    arrayDeTarefas.forEach(tarefa=>{//tarefa é os valores que vão ser inseridos do input e depois serão 
        //armazenados no arrayDeTarefas
        novaLista = novaLista+ `
        <li class="item-tarefa">
        <p>${tarefa}</p>
        </li>`
    })

    toDoList.innerHTML = novaLista
}


//sempre o botao for clicado o javascript irá chamar a função cliquei no botao
botao.addEventListener("click", cliqueiNoBotao)