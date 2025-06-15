const addButton =  document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList  = document.getElementById("task-list");

function addTask()
{
    const taskText =  taskInput.value;
    if (taskText.trim().length === 0)
    {
        alert("enter a task.")
        return ;
    }
    const task = document.createElement("li");
    const removeButton = document.createElement("button");
    removeButton.setAttribute("class", "remove-btn");
    removeButton.textContent = "Remove";
    task.textContent = taskText;
    removeButton.addEventListener("click", () => task.remove());
    task.appendChild(removeButton);
    taskList.appendChild(task);
    taskInput.value = "";
    console.log(taskText);
}


document.addEventListener("DOMContentLoaded", () => 
{
    addButton.addEventListener('click', () =>  addTask());
    taskInput.addEventListener("keypress", (event) =>
    {
    if (event.key === "Enter")
        addTask();
    })
});
