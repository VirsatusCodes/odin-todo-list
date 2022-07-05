export{wipeDOM, dailyTaskDOMFill}
import './style.css'
import * as daily from './modules/module-daily';
import * as image from './modules/module-image';
import * as projects from './modules/module-projects';
console.log("tessssst");

function wipeDOM(){
    const mainInfo = document.querySelector('.main-info');
    while(mainInfo.firstChild){
        mainInfo.removeChild(mainInfo.firstChild);
    }
}

image.imgRender();

const dailyTasksButton = document.querySelector('.daily-tasks');
const removeButtons = document.getElementsByClassName('remove-task');
const addButton = document.getElementsByClassName('add-task');

function dailyTaskDOMFill() {
    daily.renderAddATask();
    daily.renderTasks();
    Array.from(addButton).forEach(addButtonWiring);
    Array.from(removeButtons).forEach(removeButtonWiring);
}

dailyTasksButton.addEventListener('click', () => {
    wipeDOM();
    dailyTaskDOMFill();
    console.log(daily.dailyTasksLibrary)
});

function addButtonWiring(button){
button.addEventListener('click', () => {
    wipeDOM();
    daily.renderAddTaskUI();
    dailyTaskDOMFill();    
});
};

function removeButtonWiring(button){
    button.addEventListener('click', (function (e) {
        daily.dailyTasksLibrary.splice(e.target.dataset.indexNumber, 1);
        wipeDOM();
        dailyTaskDOMFill();
}));
};
