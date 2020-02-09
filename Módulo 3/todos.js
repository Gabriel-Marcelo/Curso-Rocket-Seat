var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//pegando os dados do localStorage cuja chave é 'list_todos' e adicionando na variável 'todos'
//JSON.parse - transforma os dados do localStorage que estão em JSON para um vetor
//se não retornar nada no localStorage, então 'todos' receberá um vetor vazio
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);

    inputElement.value = '';
    renderTodos();
    saveToStorage();    
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1); //remova 1 elemento da posição 0
    renderTodos();
}

function saveToStorage(){
    //localStorage: variável local que armazena uma chave e um valor em formato string
    localStorage.setItem('list_todos', JSON.stringify(todos));
}