const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const todoText = prompt('Enter your new TODO:');
  if (todoText.trim() === '') return;

  const todoItem = document.createElement('li');
  todoItem.className = classNames.TODO_ITEM;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.addEventListener('change', updateCounts);

  const text = document.createElement('span');
  text.className = classNames.TODO_TEXT;
  text.textContent = todoText;

  const deleteButton = document.createElement('button');
  deleteButton.className = classNames.TODO_DELETE;
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    list.removeChild(todoItem);
    updateCounts();
  });

  todoItem.appendChild(checkbox);
  todoItem.appendChild(text);
  todoItem.appendChild(deleteButton);
  list.appendChild(todoItem);

  updateCounts();
}

function updateCounts() {
  const items = list.getElementsByTagName('li');
  const uncheckedItems = list.querySelectorAll('input[type="checkbox"]:not(:checked)');
  itemCountSpan.textContent = items.length;
  uncheckedCountSpan.textContent = uncheckedItems.length;
} 