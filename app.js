//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners

todoButton.addEventListener('click', addTodo);


//Functions 

function addTodo(event){
	event.preventDefault();
	//todo DIV
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');
	//create LIST
	const newTodo = document.createElement('li');
	newTodo.innerText = 'hi';
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);
	//check button
	const completedButton = document.createElement('button');
	completedButton.innerHTML = '<i class="fas fa-check"></i>';
	completedButton.classList.add("complete-btn");
	todoDiv.appendChild(completedButton);
	//trash button
	const trashButton = document.createElement('button');
	trashButton.innerHTML = '<i class="fas fa-trash"></i>';
	trashButton.classList.add("trash-btn");
	todoDiv.appendChild(trashButton);
	//append list item
	todoList.appendChild(todoDiv);
}