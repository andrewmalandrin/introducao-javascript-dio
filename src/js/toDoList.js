

var buttonElement = document.getElementById("button-adicionar")
buttonElement.addEventListener("click", addTask)

var tasks = []
var noDupTasks = []


function addTask(){
    var inputElement = document.getElementById("tarefa")
    tasks.push(inputElement.value)
    noDupTasks = [...new Set(tasks) ]

    updateTasks()
}

function updateTasks(){
    var taskListElement = document.getElementById("toDoList")
    taskListElement.innerHTML = ""
    var checkbox
    
    for (i in noDupTasks){
        taskListElement.innerHTML += `<li><input type="checkbox" onclick="check('${noDupTasks[i]}')" id="checkbox-${noDupTasks[i]}" name="${noDupTasks[i]}" value="${noDupTasks[i]}" unchecked><span id="span-${noDupTasks[i]}" class="unchecked">${noDupTasks[i]}</span></text></li>`
    }
}

function check(task){

    var spanElement = document.getElementById(`span-${task}`)
    var checkbox = document.getElementById(`checkbox-${task}`)

    if(checkbox.checked){
        spanElement.className="checked"
    }else{
        spanElement.className="unchecked"
    }
}