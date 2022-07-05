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

dailyTasksButton.addEventListener('click', () => {
    wipeDOM()
    daily.renderUI();
    daily.dailyTasksLibrary.forEach(daily.renderTasks);
    Array.from(removeButtons).forEach(removeButtonWiring);
});

function removeButtonWiring(button){
    button.addEventListener('click', (function (e) {
        console.log('12');
        daily.dailyTasksLibrary.splice(e.target.dataset.indexNumber, 1);
        wipeDOM();
        daily.renderUI();
        daily.renderTasks();
}));
};

