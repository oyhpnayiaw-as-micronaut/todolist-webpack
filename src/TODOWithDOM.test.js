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
});
