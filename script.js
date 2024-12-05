let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = [];

function renderizarTarefas() {
    listElement.innerHTML = '';
    tarefas.map((tarefa) => {
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(tarefa);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        let posicao = tarefas.indexOf(tarefa);

        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);


        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })
}

function adicionarTarefas() {
    if(inputElement.value === '') {
        alert("Digite alguma tarefa!");
        return false;
    }else {
        let novaTarefa = inputElement.value;
        tarefas.push(novaTarefa);
        inputElement.value = '';
        renderizarTarefas();
    }
}

buttonElement.onclick = adicionarTarefas;

function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1);
    renderizarTarefas();
}