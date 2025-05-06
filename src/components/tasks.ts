

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// DOM Elements
const taskForm = document.getElementById('taskForm') as HTMLFormElement;
const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const taskList = document.getElementById('taskList') as HTMLUListElement;
const usernameSpan = document.getElementById('username') as HTMLSpanElement;
const logoutBtn = document.getElementById('logoutBtn') as HTMLButtonElement;

//Logged user data
const user = JSON.parse(localStorage.getItem('loggedUser') || '{}');
document.getElementById('username')!.textContent = user.name || 'Guest';

//Load tasks from localStorage
let tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');

// Show tasks once page is loaded
window.addEventListener('DOMContentLoaded', () => {
  renderTasks();
});

// Add new task
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = taskInput.value.trim();
  if (!title) return;

  const newTask: Task = {
    id: Date.now(),
    title,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  taskInput.value = '';
});

// Save tasks in localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render tasks
function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
      <span>${task.title}</span>
      <button class="btn btn-danger btn-sm" data-id="${task.id}">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

// Delete task
taskList.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target.tagName === 'BUTTON') {
    const id = parseInt(target.getAttribute('data-id')!);
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
  }
});

// Logout
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('loggedUser');
  window.location.href = 'index.html';
});