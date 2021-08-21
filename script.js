const form = document.getElementById("form")
const form = document.getElementById("inputs")
const form = document.getElementById("todos")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    addTodo ()
})

function addTodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text

    }
    if(todoText) {
        const todoEl = document.createElement("li")
        if(todo && todo.compleated) {
            todoEl.classList.add("compleated")
        }

        todoEl.innerText = todoText
        todoEl.addEventListener("click", () => todoEl.classList.toggle("completed"))

        todosUl.appendChild(todoEl)

        input.value = ""
    }
}