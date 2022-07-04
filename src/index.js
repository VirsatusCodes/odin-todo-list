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

dailyTasksButton.addEventListener('click', () => {
    wipeDOM()
    daily.renderUI();
    daily.dailyTasksLibrary.forEach(daily.renderTasks);
})

