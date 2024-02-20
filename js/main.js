
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

    //on cree une nouvelle variable newDelBtn qui est contenu dans newTask
    const newDelBtn = newTask.querySelector('.delBtn')

    //ajoute le ecouteur d'evenement pour le bouton suppression pour chaque nouvelle task cree 
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
}); 

// Ajout d'un écouteur d'événements pour le bouton de suppression
delBtn.addEventListener('click', function(){
    deleteTask(taskCard);
}); 





function updateCount(){
    let newCount = document.querySelector ('#count')
    
    newCount.textContent = 'Compteur (' + tasksContainer.children.length + ')';
}

//newCount.textContent = pour renvoyer le contenu de newCount
// le + c'est pour la concaténation de chaine.Pour joindre les chaine de caractère ensemble
//on ajoute notre variable tasksContainer qui fait reference ici a l'ensemble #todoCards dans notre html
//children est une propriété du DOM qui renvoie tous les elements de l'element specifié, dans notre cas ce son tous les elements a l'interieur de la todoCards
//length donne simplement le nombre de fois sur laquelle elle est appelée.Dans notre cas c'est le nombre de fois que l'on va cree une nouvelle task
// //exemple : const arr = [1, 2, 3, 4, 5];
// console.log(arr.length); // Cela affichera 5, car il y a 5 éléments dans le tableau sa marche pareil avec une chaine de caractere ex : avec une variable "Hello" il aurait afficher 5 egalement car 5 caractere dans la chaine 