/** @typedef {{ index: number, description: string, completed: boolean }} Task */

/** CRUD operations for TODO tasks */
export default class TODO {
  /**
   * @private
   * @type {string}
   */
  #storageKey;

  /**
   * @private
   * @type {Storage}
   * */
  #storage;

  /**
   * @protected
   * @type {Task[]}
   * */
  tasks;

  /**
   * @param {Storage} storage
   * @param {string} storageKey
   * */
  constructor(storage, storageKey = 'tasks') {
    this.#storage = storage;
    this.#storageKey = storageKey;

    this.tasks = JSON.parse(storage.getItem(storageKey)) || [];
  }

  /**
   * Add a new task to the list and save it to the storage
   * @param {string} description
   * */
  addTask(description) {
    if (!description) return;

    const task = { description, completed: false };
    this.tasks.push(task);
    this.#resetIndex();
    this.#save();
  }

  /**
   * Update description of a task and save it to the storage
   * @param {string | number} index - primary key of the task
   * @param {string} desc - new description of the task
   * */
  updateTaskDesc(index, desc) {
    this.#getTask(index).description = desc;
    this.#save();
  }

  /**
   * Update completed status of a task and save it to the storage
   * @param {string | number} index - primary key of the task
   * */
  updateTaskStatus(index) {
    const task = this.#getTask(index);
    task.completed = !task.completed;
    this.#save();
  }

  /**
   * Delete a task and save it to the storage
   * @param {string | number} index - primary key of the task
   * */
  deleteTask(index) {
    this.tasks = this.tasks.filter((task) => task.index !== Number(index));
    this.#resetIndex();
    this.#save();
  }

  /**
   * Delete all completed tasks and save it to the storage
   * */
  deleteCompletedTasks() {
    this.tasks = this.tasks.filter((e) => !e.completed);
    this.#resetIndex();
    this.#save();
  }

  /**
   * Get todo task according to the index key
   * Tip: index is like the primary key of the task
   * Not to be confused with the index of the task in the array
   * @private
   * @param {string | number} index - primary key of the task
   * @returns {Task} task
   * */
  #getTask = (index) => this.tasks.find((e) => e.index === Number(index));

  /**
   * Reset the index state of all tasks
   * @private
   * */
  #resetIndex = () => {
    this.tasks.forEach((task, index) => {
      task.index = index + 1;
    });
  };

  /**
   * Save tasks to Storage
   * @private
   * */
  #save = () => {
    this.#storage.setItem(this.#storageKey, JSON.stringify(this.tasks));
  };
}
