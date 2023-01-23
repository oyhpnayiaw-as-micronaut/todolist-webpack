import TODO from './TODO.js';

export default class TODOWithDOM extends TODO {
  /**
   * @private
   * @type {HTMLElement} todoListElement
   * */
  #todoListEl;

  /**
   * @param {HTMLElement} todoListEl
   * @param {Storage} storage
   * @param {string} storageKey
   * */
  constructor(todoListEl, storage, storageKey) {
    super(storage, storageKey);

    this.#todoListEl = todoListEl;
    this.#render();
  }

  /**
   * @override
   * @description update DOM after adding task
   * @param {string} description
   * */
  addTask(description) {
    super.addTask(description);
    this.#render();
  }

  /**
   * @override
   * @description update DOM after deleting task
   * @param {string | number} index
   * */
  deleteTask(index) {
    super.deleteTask(index);
    this.#render();
  }

  /**
   * @override
   * @description update DOM after deleting completed tasks
   * */
  deleteCompletedTasks() {
    super.deleteCompletedTasks();
    this.#render();
  }

  /**
   * @private
   * Render the list of tasks to the DOM
   */
  #render() {
    this.#todoListEl.innerHTML = '';
    const todoItems = this.tasks.map(this.#createTaskEl).join('');
    this.#todoListEl.innerHTML = todoItems;
  }

  /**
   * @private
   * Create html string for a task
   * @param {Task} task
   * @returns {string} html string
   * */
  #createTaskEl = (task) => {
    const { index, description, completed } = task;

    return `
    <li id="task-${index}" class="todo-item-group">
      <input 
        id="checkbox-${index}"
        type="checkbox" 
        class="todo-checkbox" 
        ${completed ? 'checked' : ''}> 
      <input
        id="task-input-${index}"
        type="text"
        class="todo-input"
        value="${description}" >
      <i class="fa-solid fa-ellipsis-vertical todo-menu-icon"></i>
      <button type="submit" class="todo-task-btn todo-remove-btn" value="remove-${index}">
        <i class="fa-solid fa-trash"></i> 
      </button>
    </ul>
  `;
  };
}
