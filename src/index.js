export{wipeDOM, dailyTaskDOMFill};
import './style.css';
import * as daily from './modules/module-daily';
import * as image from './modules/module-image';
import * as projects from './modules/module-projects';

function wipeDOM(){
    const mainInfo = document.querySelector('.main-info');
    while(mainInfo.firstChild){
        mainInfo.removeChild(mainInfo.firstChild);
    }
}

/* projects module rendering BEGGINNING */














/* projects module rendering END */

/* image rotation module rendering BEGGINNING */
image.imgRender();
/* image rotation module rendering END */

/* daily tasks module rendering BEGGINNING */
function dailyTaskDOMFill() {
    const removeButtons = document.getElementsByClassName('remove-task');
    const addButton = document.getElementsByClassName('add-task');
    
    daily.renderAddATask();
    daily.renderTasks();
    Array.from(addButton).forEach(addButtonWiring);
    Array.from(removeButtons).forEach(removeButtonWiring);
}

const dailyTasksButton = document.querySelector('.daily-tasks');
dailyTasksButton.addEventListener('click', () => {
    wipeDOM();
    dailyTaskDOMFill();
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
/* daily tasks module rendering END */