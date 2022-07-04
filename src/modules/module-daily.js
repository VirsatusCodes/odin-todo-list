export{renderUI, renderTasks, dailyTasksLibrary}

const mainInfo = document.querySelector('.main-info');
const dailyTasksLibrary = [];

const createTasks = (taskName, taskTime) => {
    return {taskName, taskTime}
};

const task1 = createTasks('Wake Up!','8:00');
dailyTasksLibrary.push(task1);

function renderUI(){
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

function renderTasks(task){
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('box');
    mainInfo.appendChild(taskContainer);

    const text = document.createElement('p');
    text.textContent = task.taskName;
    taskContainer.appendChild(text);

    const time = document.createElement('p');
    time.textContent = task.taskTime;
    taskContainer.appendChild(time);

    const removeTaskButton = document.createElement('button');
    removeTaskButton.classList.add('remove-task');
    removeTaskButton.textContent = '-';
    taskContainer.appendChild(removeTaskButton);
};