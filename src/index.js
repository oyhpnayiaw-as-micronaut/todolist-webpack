import TODO from './TODO.js';

import './style.css';

// Get todo-list element
const todoListEl = document.querySelector('.todo-list');

const todo = new TODO(todoListEl);

// Get todo create input
const todoCreateEl = document.querySelector('.todo-create-input');

// Add event listener to todo create input
// When user press enter, create a new task
todoCreateEl.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    todo.addTask(e.target.value);
    e.target.value = '';
  }
});

// Get todo delete completed button
const todoForm = document.querySelector('form');

// -----------------//
// Handle todo item //
// -----------------//

// Prevent the Enter key from submitting form
todoForm.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') e.preventDefault();
});

// Listen for Task checkbox events
todoForm.addEventListener('change', (e) => {
  const { id, type } = e.target;

  if (type === 'checkbox') {
    const index = id.split('-')[1];
    todo.updateTaskStatus(index);
  }
});

// Update todo task description when input is update
todoForm.addEventListener('keyup', (e) => {
  const { id, value } = e.target;

  if (id.includes('task-input')) {
    const index = id.split('-')[2];
    todo.updateTaskDesc(index, value);
  }
});

// Add listener for submit buttons
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const { value } = e.submitter;

  if (value === 'delete-completed') {
    todo.deleteCompletedTasks();
    return;
  }

  if (value.includes('remove')) {
    const index = value.split('-')[1];
    todo.deleteTask(index);
  }
});
