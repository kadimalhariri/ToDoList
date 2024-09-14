

//* Select The Elements 
const form = document.getElementById('todo-form');
const input = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

//* Form Submission to add tasks 
form.addEventListener('submit', (e) => {
    e.preventDefault(); //* Prevent The Default Form Submission 

    let task = input.value.trim();

    if(task !== '') {
        addTodoItem(task)
    }
    input.value = '';
});

function addTodoItem(Item) {
    let li = document.createElement('li'); //* Creating a New List item (li)
    li.textContent = Item;
    todoList.appendChild(li);

    //* Create The Delete Button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');

    //* Append The Delete button To The List Item
    li.appendChild(deleteButton);

    //* Delete the button Logic 
    deleteButton.addEventListener('click', () => {
        todoList.removeChild(li);
    })
}
