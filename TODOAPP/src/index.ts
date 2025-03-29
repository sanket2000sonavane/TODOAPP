import { v4 as uuidv4 } from "uuid"

type Task={
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
}

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-task-title")

const tasks: Task[] =loadTasks()
tasks.forEach(addListItem)

form?.addEventListener("submit", e => {
    e.preventDefault()

    if (input?.value == null || input?.value == "") return 

    const newTask : Task = {
        id: uuidv4(),
        title: input.value,
        completed: false,
        createdAt: new Date()
    }
    tasks.push(newTask)
    saveTasks()
    addListItem(newTask)
    input.value = ""
})

function addListItem(task: Task) {
    const item = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked 
        saveTasks()
  
    })
    checkbox.type = "checkbox";
    label.prepend(checkbox, task.title);
    item.prepend(label);
    list?.prepend(item); 
}

console.log("List element:", list);
console.log("Form element:", form);
console.log("Input element:", input);

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function loadTasks(): Task[] {
    const taskJSON = localStorage.getItem("tasks")
    if (taskJSON == null) return []
 return JSON.parse(taskJSON)
}