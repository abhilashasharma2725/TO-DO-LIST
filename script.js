let todoTaskInput = document.getElementById('todoTask');
let todoDateInput = document.getElementById('todoDate');
let addTodoButton = document.getElementById('addTodoButton');
let todoListDiv = document.getElementById('todoList');

// Function to create a new Todo item
function createTodoItem(task, date) {
    let todoItemDiv = document.createElement('div');
    todoItemDiv.className = 'todo-item';

    let titleElement = document.createElement('p');
    titleElement.textContent = `Title: ${task}`;

    let dateElement = document.createElement('p');
    dateElement.textContent = `Date: ${date}`;

    let removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove Todo';
    removeBtn.addEventListener('click', () => {
        todoListDiv.removeChild(todoItemDiv);
    });

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit Todo';
    editBtn.addEventListener('click', () => {
        if (editBtn.textContent === 'Edit Todo') {
            // Create input fields for editing
            let newTaskInput = document.createElement('input');
            newTaskInput.type = 'text';
            newTaskInput.value = task;
            todoItemDiv.insertBefore(newTaskInput, titleElement);

            let newDateInput = document.createElement('input');
            newDateInput.type = 'date';
            newDateInput.value = date;
            todoItemDiv.insertBefore(newDateInput, dateElement);

            // Change edit button to save button
            editBtn.textContent = 'Save';
        } else {
            // Save the edited values
            let newTask = todoItemDiv.querySelector('input[type="text"]').value;
            let newDate = todoItemDiv.querySelector('input[type="date"]').value;

            titleElement.textContent = `Title: ${newTask}`;
            dateElement.textContent = `Date: ${newDate}`;
            
            // Remove input fields
            todoItemDiv.querySelector('input[type="text"]').remove();
            todoItemDiv.querySelector('input[type="date"]').remove();

            // Change save button back to edit
            editBtn.textContent = 'Edit Todo';
        }
    });

    let doneBtn = document.createElement('button');
    doneBtn.textContent = 'Mark As Done';
    doneBtn.addEventListener('click', () => {
        titleElement.classList.toggle('done');
        dateElement.classList.toggle('done');
    });

    todoItemDiv.appendChild(titleElement);
    todoItemDiv.appendChild(dateElement);
    todoItemDiv.appendChild(removeBtn);
    todoItemDiv.appendChild(editBtn);
    todoItemDiv.appendChild(doneBtn);
    
    todoListDiv.appendChild(todoItemDiv);
}

// Add event listener to the Add Todo button
addTodoButton.addEventListener('click', () => {
    let task = todoTaskInput.value;
    let date = todoDateInput.value;

    if (task === '') {
        alert('Please enter a task!');
        return;
    }

    createTodoItem(task, date); 

    // Clear input fields
    todoTaskInput.value = '';
    todoDateInput.value = '2024-09-09';
});
