let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

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

renderizarTarefas();

function adicionarTarefas() {
    if(inputElement.value === '') {
        alert("Digite alguma tarefa!");
        return false;
    }else {
        let novaTarefa = inputElement.value;
        tarefas.push(novaTarefa);
        inputElement.value = '';
        renderizarTarefas();
        salvarTarefa();
    }
}

buttonElement.onclick = adicionarTarefas;

function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1);
    renderizarTarefas();
    salvarTarefa();
}

function salvarTarefa() {
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
}