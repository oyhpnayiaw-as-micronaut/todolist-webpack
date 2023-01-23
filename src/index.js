import TODOWithDOM from './TODOWithDOM.js';

import './style.css';

const todoListEl = document.querySelector('.todo-list');
const todoCreateInput = document.querySelector('.todo-create-input');

const todo = new TODOWithDOM(todoListEl, localStorage);

// Add event listener to todo create input
// When user press enter, create a new task
todoCreateInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    todo.addTask(e.target.value);
    e.target.value = '';
  }
});

const todoForm = document.querySelector('form');

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

// Prevent the Enter key from submitting form
// This is important because we want to use the Enter key to create a new task
// If we don't prevent the default behavior, the form will be submitted
// and then delete/remove button will trigger the form submit event
// see submit event listener below for more details
todoForm.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') e.preventDefault();
});

// Add listener for task delete/remove buttons
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
