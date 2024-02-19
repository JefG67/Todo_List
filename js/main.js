
const addBtn = document.querySelector('#btn');

const tasksContainer = document.querySelector("#todoCards");

const taskCard = document.querySelector(".todoCard");

const delBtn = document.querySelector(".delBtn");

let count = 1 ;



// console.log(taskCard)

function addTask(){
    // On récupère la classe todoCard et on le clone 
    const newTask = taskCard.cloneNode(true)
    const newDelBtn =newTask.querySelector('.delBtn')
    // On récupère le textArea de la card et on le remet par defaut 
    const newTextArea = newTask.querySelector('.task')
    newTextArea.value = "New Task";

    newDelBtn.addEventListener('click', function(){
        deleteTask(newTask);
    });

    // const tasksContainer =document.getElementById ("todoCards")
    tasksContainer.appendChild(newTask)
    updateCount();
}





addBtn.addEventListener('click', function() {
    addTask();
}); //add a task on click






delBtn.addEventListener('click', function(){
    deleteTask(taskCard);
}); 



function deleteTask(task){
    task.remove();
    updateCount();
}



function count(){
    let newCount = document.querySelector ('#count')
    if (count > 1){
        newCount.textContent = taskCard + " cards";
    } else{
        newCount.textContent = taskCard + " card";
    }
}