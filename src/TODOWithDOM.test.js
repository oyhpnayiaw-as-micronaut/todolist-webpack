const TODOWithDOM = require('./TODOWithDOM.js');

describe('TODOWithDOM', () => {
  /** @type {TODOWithDOM} */
  let todo;
  let todoListEl;
  let storage;

  beforeEach(() => {
    todoListEl = document.createElement('ul');
    storage = window.localStorage;
    todo = new TODOWithDOM(todoListEl, storage, 'todo');
  });

  afterEach(() => {
    storage.clear();
  });

  test('should add a task to the list and render it in the DOM', () => {
    // arrange
    const description = 'test';

    // act
    todo.addTask(description);

    // assert
    expect(todo.tasks.length).toBe(1);
    expect(todoListEl.children.length).toBe(1);
    expect(todoListEl.children[0].querySelector('.todo-input').value).toBe(
      'test',
    );
  });

  test('should delete a task from the list and render it in the DOM', () => {
    // arrange
    const description = 'test task';
    todo.addTask(description);

    // act
    todo.deleteTask(1);

    // assert
    expect(todo.tasks.length).toBe(0);
    expect(todoListEl.children.length).toBe(0);
  });

  test('should update a task description and render it in the DOM', () => {
    // arrange
    const description = 'test task';
    todo.addTask(description);

    // act
    todo.updateTaskDesc(1, 'updated task');
    todo.render();

    // assert
    expect(todo.tasks[0].description).toBe('updated task');
    expect(todoListEl.children[0].querySelector('.todo-input').value).toBe(
      'updated task',
    );
  });

  test('should update a task status and render it in the DOM', () => {
    // arrange
    const description = 'test task';
    todo.addTask(description);

    // act
    todo.updateTaskStatus(1);
    todo.render();

    // assert
    expect(todo.tasks[0].completed).toBe(true);
    expect(todoListEl.children[0].querySelector('.todo-checkbox').checked).toBe(
      true,
    );
  });

  test('should delete completed tasks from the list and render it in the DOM', () => {
    // arrange
    todo.addTask('test task 1');
    todo.addTask('test task 2');
    todo.updateTaskStatus(1);

    // act
    todo.deleteCompletedTasks();

    // assert
    expect(todo.tasks.length).toBe(1);
    expect(todoListEl.children.length).toBe(1);
    expect(todoListEl.children[0].querySelector('.todo-input').value).toBe(
      'test task 2',
    );
  });
});
