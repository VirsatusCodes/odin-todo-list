export{renderAddATask, renderTasks, dailyTasksLibrary, addTasks, renderAddTaskUI}
import * as index from '../index'
const mainInfo = document.querySelector('.main-info');
const dailyTasksLibrary = [];

const createTasks = (taskName, taskTime) => {
    return {taskName, taskTime}
};

const task1 = createTasks('Wake Up!','8:00');
dailyTasksLibrary.push(task1);
const task2 = createTasks('asd!','8:00');
dailyTasksLibrary.push(task2);

function renderAddTaskUI(){
const input1 = document.createElement('textarea');
input1.classList.add('box');
input1.placeholder = 'Task Name here';
mainInfo.appendChild(input1);

const input2 = document.createElement('textarea');
input2.classList.add('box');
input2.placeholder = 'When do you want to do it';
mainInfo.appendChild(input2);

const pushTasktoLibrary = document.createElement('button');
pushTasktoLibrary.classList.add('push-task');
pushTasktoLibrary.textContent = 'Add Task';
mainInfo.appendChild(pushTasktoLibrary);

pushTasktoLibrary.addEventListener('click', () => {
   addTasks(input1.value, input2.value);
   index.wipeDOM();
   index.dailyTaskDOMFill();
});
};

function addTasks(input1, input2){
const newTask = createTasks(input1, input2);
dailyTasksLibrary.push(newTask);
console.log(dailyTasksLibrary)
};

function renderAddATask(){
    const UIContainer = document.createElement('div');
    UIContainer.classList.add('box');
    mainInfo.appendChild(UIContainer);

    const h3 = document.createElement('h2');
    h3.textContent = 'Add a Task! :)';
    UIContainer.appendChild(h3);

    const addTaskButton = document.createElement('button');
    addTaskButton.classList.add('add-task');
    addTaskButton.textContent = '+';
    UIContainer.appendChild(addTaskButton);
};

function renderTasks(){
    let tick = 0

    for(let i = 0; i < dailyTasksLibrary.length; i++){
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('box');
    mainInfo.appendChild(taskContainer);

    const text = document.createElement('p');
    text.textContent = dailyTasksLibrary[i].taskName;
    taskContainer.appendChild(text);

    const time = document.createElement('p');
    time.textContent = dailyTasksLibrary[i].taskTime;
    taskContainer.appendChild(time);

    const removeTaskButton = document.createElement('button');
    removeTaskButton.classList.add('remove-task');
    removeTaskButton.dataset.indexNumber= tick;
    tick++;
    removeTaskButton.textContent = '-';
    taskContainer.appendChild(removeTaskButton);
    }
};


