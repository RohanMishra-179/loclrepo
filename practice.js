const taskList = [];
const taskContainer = document.getElementById('taskContainer'); 

document.getElementById('button').addEventListener('click', addTask);

function addTask() {
    let taskInput = document.getElementById('input').value;
    
    if (taskInput !== "") { 
        taskList.push({ text: taskInput, isCompleted: false });
        
        let taskItem = document.createElement('li');
        taskItem.textContent = taskInput;
        taskItem.classList.add('task-item');
        
        taskItem.addEventListener('click', function () {
            this.classList.toggle('completestyle'); 
        });

        taskContainer.appendChild(taskItem);

        document.getElementById('input').value = '';
    }
}
 
