
const addBtn = document.querySelector('#btn');

const tasksContainer = document.querySelector("#todoCards");

const taskCard = document.querySelector(".todoCard");

const delBtn = document.querySelector(".delBtn");

let count = 1 ; // pour déclarer que le compteur a 1 de base




//fonction pour ajouter une carte 
function addTask(){
    // On déclare une nouvelle variable pour  la classe todoCard et on la clone 
    const newTask = taskCard.cloneNode(true)
    
    // On récupère le textArea de la card et on le remet par defaut 
    const newTextArea = newTask.querySelector('.task') 
    newTextArea.value = "New Task";
    
    const newDelBtn = newTask.querySelector('.delBtn')

    newDelBtn.addEventListener('click', function(){
        deleteTask(newTask);
    });

    // ajout de la nouvelle carte 
    tasksContainer.appendChild(newTask)
    updateCount();
}

// fonction pour supprimer une carte 
function deleteTask(task){
    task.remove();
    updateCount();
}


// Ajout d'un écouteur d'événements pour le bouton d'ajout d'une task
addBtn.addEventListener('click', function() {
    addTask();
}); //add a task on click

// Ajout d'un écouteur d'événements pour le bouton de suppression
delBtn.addEventListener('click', function(){
    deleteTask(taskCard);
}); 










function updateCount(){
    let newCount = document.querySelector ('#count')
    // if (count > 1){
    //     newCount.textContent = taskCard + " cards";
    // } else{
    //     newCount.textContent = taskCard + " card";
    // }



    // newCount.textContent = 'Compteur (' + tasksContainer.children.length + ')';
}

