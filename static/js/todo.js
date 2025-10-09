// To Do list assignment starts here --
// initalize variables
const todoList = document.querySelector('.todo-list')
const addBtn = document.querySelector('button')
const userInput = document.getElementById('new-todo')

// list from local storage if there
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

const renderTodos = () => {
    todoList.innerHTML = ''

    todos.forEach(todo => {
        const li = document.createElement('li')
        li.textContent = todo.name
        todoList.append(li)
    })
}

addBtn.addEventListener('click', () => {

    let value = userInput.value.trim()
    userInput.value = ''

    if (value.trim() === '') {
        alert('Please enter a valid to do item.')
        return
    } 
    // new todo added
    todos.push({ name: value, completed: false })
    // save updated list
    localStorage.setItem('todo-list', JSON.stringify(todos))
    renderTodos();
})


renderTodos();