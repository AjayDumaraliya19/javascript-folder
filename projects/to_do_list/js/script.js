// Click on the add button and action added in the bottom table
document.querySelector('#push').onclick = addTask;

// Selected the input tag and using query-selector on keyboard action 
document.querySelector('#newtask input').addEventListener('keydown', function (event) {
    if (event.keyCode === 13) addTask();
});

// Add task in the table
function addTask() {
    const taskName = document.querySelector('#newtask input').value.trim();

    if (taskName.length === 0) return alert("Please Enter a Task!");

    const taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.innerHTML = `
        <span id="taskname">${taskName}</span>
        <div class="operation_button">
            <button class="undo" style="display: none;">
                <i class="fa-solid fa-rotate-left"></i>
            </button>
            <button class="delete">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>`;

    const tasksContainer = document.querySelector("#tasks");
    tasksContainer.appendChild(taskElement);
    document.querySelector('#newtask input').value = "";

    const deleteButton = taskElement.querySelector(".delete");
    const undoButton = taskElement.querySelector(".undo");

    // delete button function
    deleteButton.onclick = function () {
        const currentTask = taskElement;
        const taskName = currentTask.querySelector("#taskname").textContent;
        deleteButton.style.display = "none";
        undoButton.style.display = "inline-block";

        // Set time 3 sec wait
        let secondsLeft = 3;
        const timer = setInterval(function () {
            undoButton.textContent = `Undo (${secondsLeft--}s)`;

            if (secondsLeft < 0) {
                clearInterval(timer);
                currentTask.remove();
                alert(`Task "${taskName}" permanently deleted.`);
            }
        }, 1000);

        // Undo button function
        undoButton.onclick = function () {
            clearInterval(timer);
            undoButton.style.display = "none";
            deleteButton.style.display = "inline-block";
            undoButton.textContent = "Undo";
            alert(`Undo operation performed. Task "${taskName}" restored.`);
        };
    };
}