/** @typedef {{ index: number, description: string, completed: boolean }} Task */

class TODO {
  /** @type {Task[]} */
  #tasks;

  /** @type {HTMLElement} todoListElement */
  #todoListEl;

  /**
   * @param {HTMLElement} todoListEl
   * */
  constructor(todoListEl) {
    this.#todoListEl = todoListEl;
    this.#tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.#render();
  }

  /**
   * Add a new task
   * @param {string} description
   * */
  addTask = (description) => {
    if (!description) return;

    const task = { index: this.#tasks.length, description, completed: false };
    this.#tasks.push(task);
    this.#render();
  };

  /**
   * Update description of a task
   * @param {number} index
   * @param {string} desc - new description of the task
   * */
  updateTaskDesc = (index, desc) => {
    this.#tasks[index].description = desc;
    this.#save();
  };

  /**
   * Update completed status of a task
   * @param {number} index
   * */
  updateTaskStatus = (index) => {
    const { completed } = this.#tasks[index];
    this.#tasks[index].completed = !completed;
    this.#save();
  };

  /**
   * Delete a task
   * @param {number} index
   * */
  deleteTask = (index) => {
    this.#tasks.splice(index, 1);
    this.#render();
  };

  /**
   * Delete all completed tasks
   * */
  deleteCompletedTasks = () => {
    this.#tasks = this.#tasks.filter((e) => !e.completed);
    this.#render();
  };

  /** Reset the index state of all tasks */
  #resetIndex = () => {
    this.#tasks.forEach((task, index) => {
      task.index = index;
    });
  };

  /** Save tasks to localStorage */
  #save = () => {
    localStorage.setItem('tasks', JSON.stringify(this.#tasks));
  };

  /** Render all tasks into todo list element */
  #render() {
    this.#resetIndex();

    // reset element to make sure element is empty
    this.#todoListEl.innerHTML = '';
    const todoItems = this.#tasks.map(this.#createTaskEl).join('');
    this.#todoListEl.innerHTML = todoItems;

    this.#save();
  }

  /**
   * Create html element for a task
   * @param {Task} task
   * @returns {HTMLElement} html element for the task
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
