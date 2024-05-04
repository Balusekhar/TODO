let todoInput = document.getElementById('taskInput');
let addTaskBtn = document.getElementById('addTaskBtn');
let taskList = document.getElementById('taskList');


// Event listener for the button click
addTaskBtn.addEventListener("click", function(){
  if(todoInput.value !== ""){
    // Inside the addTaskBtn click event listener
    let taskItem = todoInput.value;

    let li = document.createElement("li");
    let taskSpan = document.createElement("span"); 
    taskSpan.textContent = taskItem; 
    taskSpan.classList.add('task-text'); 
    li.appendChild(taskSpan); 
    taskList.append(li);


    let iconsDiv = document.createElement("div");

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can deleteIcon"></i>';
    iconsDiv.append(deleteBtn);

    let editBtn = document.createElement("button");
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square editBtn"></i>';
    iconsDiv.append(editBtn);

    li.append(iconsDiv);
    
    todoInput.value = "";
  } else {
    alert("Enter a task, Idiot!")
  }
});


taskList.addEventListener("click", function(event) {
  if (event.target.classList.contains('deleteIcon') || event.target.parentElement.classList.contains('deleteIcon')) {
    event.target.closest('li').remove();
  }
});

taskList.addEventListener("click", function(event) {
  if (event.target.classList.contains('editBtn') || event.target.parentElement.classList.contains('editBtn')) {
    let editedTask = prompt("Enter the edited Task below");
    if (editedTask !== null) {
      let listItem = event.target.closest('li');
      listItem.querySelector('span.task-text').textContent = editedTask;
    }
  }
});