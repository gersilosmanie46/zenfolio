/*
 * Filename: complexCode.js
 * 
 * Description: 
 * This code demonstrates a complex implementation of a task management system.
 * It allows users to create, update, and delete tasks, and also provides various 
 * functionalities like task filters, sorting, searching, and notifications.
 * 
 * The code includes multiple classes and functions, designed to efficiently manage 
 * tasks and facilitate smooth task management operations.
 * 
 * Note: This code is a simplified example, and may not cover all edge cases or error handling.
 * 
 * Author: [Your Name]
 * Date: [Current Date]
 */

// Class representing a single Task
class Task {
  constructor(id, title, description, priority, assignedTo, dueDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.assignedTo = assignedTo;
    this.dueDate = dueDate;
    this.completed = false;
  }

  markAsCompleted() {
    this.completed = true;
  }

  updateTitle(newTitle) {
    this.title = newTitle;
  }

  // Other methods for updating task properties
}

// Class representing a Task Manager
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, description, priority, assignedTo, dueDate) {
    const id = this.tasks.length + 1;
    const newTask = new Task(id, title, description, priority, assignedTo, dueDate);
    this.tasks.push(newTask);
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  findTask(taskId) {
    return this.tasks.find((task) => task.id === taskId);
  }

  // Other methods for managing tasks

  // Filtering tasks based on priority
  filterTasksByPriority(priority) {
    return this.tasks.filter((task) => task.priority === priority);
  }

  // Sorting tasks by due date
  sortTasksByDueDate() {
    return this.tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  }

  // Searching tasks by title or description
  searchTasks(query) {
    query = query.toLowerCase();
    return this.tasks.filter((task) =>
      task.title.toLowerCase().includes(query) ||
      task.description.toLowerCase().includes(query)
    );
  }

  // Other helper methods
}

// Create an instance of TaskManager
const taskManager = new TaskManager();

// Add example tasks
taskManager.addTask("Task 1", "Description for Task 1", "High", "John Doe", "2022-01-10");
taskManager.addTask("Task 2", "Description for Task 2", "Medium", "Jane Smith", "2022-01-15");
taskManager.addTask("Task 3", "Description for Task 3", "Low", "David Johnson", "2022-01-08");

// Perform various operations on tasks
console.log("All Tasks:", taskManager.tasks);
console.log("Filter High Priority Tasks:", taskManager.filterTasksByPriority("High"));
console.log("Sort Tasks by Due Date:", taskManager.sortTasksByDueDate());
console.log("Search Tasks:", taskManager.searchTasks("task"));

// Update and delete tasks
const taskToUpdate = taskManager.findTask(2);
if (taskToUpdate) {
  taskToUpdate.updateTitle("Updated Task 2");
  taskToUpdate.markAsCompleted();
}
console.log("Updated Task 2:", taskToUpdate);

taskManager.deleteTask(3);
console.log("Remaining Tasks:", taskManager.tasks);

// Other functionalities and code can be added to the TaskManager class