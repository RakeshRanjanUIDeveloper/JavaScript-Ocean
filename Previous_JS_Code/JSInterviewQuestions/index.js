
const TEXT_FIELD_ID = 'todo-list';
const TODO_ROW_CLASS = 'todo-row-class';
(function () {

    let todos = [];
    const todoID = document.getElementById('todo');
    const textfield = document.createElement("input");
    textfield.type = "text";
    textfield.id = "todo-list"
    textfield.placeholder = "Enter your todo !"


    const button = document.createElement('button');
    button.type = "button";
    button.innerText = 'Add Todo'
    button.addEventListener("click", function () {
        const input = document.getElementById(TEXT_FIELD_ID);
        console.log(input.value);
        if (!input.value) {
            return;
        }
        todos = [input.value, ...todos];
        input.value = '';
        renderTodos();
    })

    function renderTodos() {

        const previousTodos = document.getElementById('todo-parent');
        if (previousTodos) {
            previousTodos.remove();
        }
        let parentDiv = document.createElement('div');
        parentDiv.setAttribute('id', 'todo-parent');
        todos.forEach((todo, index) => {
            let ele = document.createElement('div');
            ele.className = TODO_ROW_CLASS;
            ele.addEventListener("click", function () {
                todos = todos.filter((_, arr) => {
                    arr !== index;
                })
                renderTodos(); 
            })
            ele.innerText = todo;
            parentDiv.append(ele);
        })

        addToUI(parentDiv);
    }
    addToUI(textfield);
    addToUI(button);

    function addToUI(element) {
        todoID.append(element);
        todoID.append(element);
    }



})()


