import './style.css';

const todos = [
  { index: 0, description: 'wash the dishes', completed: true },
  { index: 1, description: 'do the laundry', completed: false },
];

const createTodoElement = (todo) => {
  const { index, description, completed } = todo;
  return `
    <li class="todo-item-group">
      <input 
        type="checkbox" 
        class="todo-checkbox" 
        id="todo-${index}" 
        ${completed ? 'checked' : ''}> 
      <input
        type="text"
        class="todo-input"
        value="${description}"
      >
      <button type="submit" class="todo-remove-button" value="remove-${index}">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </button>
    </ul>
  `;
};

// Get todo-list element
const todoList = document.querySelector('.todo-list');

// Create todo elements
const todoItems = todos.map(createTodoElement).join('');

// Set todo elements
todoList.innerHTML = todoItems;
