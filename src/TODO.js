/** @typedef {{ index: number, description: string, completed: boolean }} Task */

class TODO {
  #storageKey = 'tasks';

  /** @type {Task[]} */
  #tasks;

  /** @type {HTMLElement} todoListElement */
  #todoListEl;

  /** @type {Storage} */
  #storage;

  /**
   * @param {HTMLElement} todoListEl
   * @param {Storage} storage
   * */
  constructor(todoListEl, storage) {
    this.#todoListEl = todoListEl;
    this.#storage = storage;
    this.#tasks = JSON.parse(this.#storage.getItem(this.#storageKey)) || [];
    this.#render();
  }

  /**
   * Add a new task
   * @param {string} description
   * */
  addTask = (description) => {
    if (!description) return;

    const task = { description, completed: false };
    this.#tasks.push(task);
    this.#render();
  };

  /**
   * Update description of a task
   * @param {string | number} index - primary key of the task
   * @param {string} desc - new description of the task
   * */
  updateTaskDesc = (index, desc) => {
    this.#getTask(index).description = desc;
    this.#save();
  };

  /**
   * Update completed status of a task
   * @param {string | number} index - primary key of the task
   * */
  updateTaskStatus = (index) => {
    const task = this.#getTask(index);
    task.completed = !task.completed;
    this.#save();
  };

  /**
   * Delete a task
   * @param {string | number} index - primary key of the task
   * */
  deleteTask = (index) => {
    // this.#tasks.splice(index - 1, 1);
    this.#tasks = this.#tasks.filter((task) => task.index !== Number(index));
    this.#render();
  };

  /**
   * Delete all completed tasks
   * */
  deleteCompletedTasks = () => {
    this.#tasks = this.#tasks.filter((e) => !e.completed);
    this.#render();
  };

  /**
   * Get todo task according to the index key
   * Tip: index is like the primary key of the task
   * Not to be confused with the index of the task in the array
   * @param {string | number} index - primary key of the task
   * @returns {Task} task
   * */
  #getTask = (index) => this.#tasks.find((e) => e.index === Number(index));

  /** Reset the index state of all tasks */
  #resetIndex = () => {
    this.#tasks.forEach((task, index) => {
      task.index = index + 1;
    });
  };

  /** Save tasks to Storage */
  #save = () => {
    this.#storage.setItem(this.#storageKey, JSON.stringify(this.#tasks));
  };

  /** Render all tasks into todo list element */
  #render() {
    this.#resetIndex();

    // reset innerHTML to make sure todo-list element is empty
    this.#todoListEl.innerHTML = '';
    const todoItems = this.#tasks.map(this.#createTaskEl).join('');
    this.#todoListEl.innerHTML = todoItems;

    this.#save();
  }

  /**
   * Create html element for a task
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

export default TODO;
