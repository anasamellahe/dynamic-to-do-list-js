const addButton =  document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList  = document.getElementById("task-list");

const tasks = [];


function removeTask(event)
{

        const index = tasks.indexOf(event.target.parentElement.firstChild.textContent);
        if (index !== -1)
            tasks.splice(index, 1);
        event.target.parentNode.remove();
        localStorage.removeItem("tasks");
        localStorage.setItem("tasks", JSON.stringify(tasks));
}


function createTaskElement(taskText)
{
    const task = document.createElement("li");
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-btn");
    removeButton.textContent = "Remove";
    task.textContent = taskText;
    removeButton.addEventListener("click", removeTask);
    task.appendChild(removeButton);
    return task;
}

function loadTasks(storedTasks)
{
    const storedTasksArray =  JSON.parse(storedTasks);
    storedTasksArray.forEach(element => 
    {
        tasks.push(element);
        const task =  createTaskElement(element);
        taskList.appendChild(task);
    });
}

function addTask()
{

 
    const taskText =  taskInput.value.trim();
    if (taskText.length === 0)
    {
        alert("enter a task.")
        return ;
    }
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    const task = createTaskElement(taskText);
    taskList.appendChild(task);
    taskInput.value = "";
}


document.addEventListener("DOMContentLoaded", () => 
{
    const storedTasks =  localStorage.getItem("tasks");
    if (storedTasks !== null)
        loadTasks(storedTasks);
    addButton.addEventListener('click', () =>  addTask());
    taskInput.addEventListener("keypress", (event) =>
    {
    if (event.key === "Enter")
        addTask();
    })
});
