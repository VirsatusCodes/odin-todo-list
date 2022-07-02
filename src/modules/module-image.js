export{imgClassSetter, createLink}
import alain from '.././img/art-alain.jpg';
import nicola from '.././img/art-nicola.jpg';
/* import alain from '.././img/art-alain';
import alain from '.././img/art-alain';
import alain from '.././img/art-alain';
import alain from '.././img/art-alain'; */
console.log('test 2')

const imgCollection = [];

const  imgCombiner = (imgUrl, artistLinks) => {
    return {imgUrl, artistLinks}   
  };

const mon =  imgCombiner(nicola, '@pavan_nicola?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText')

const currentDate = new Date();
const currentDay = currentDate.getDay();

function imgRender(currentDay) {

}




function imgClassSetter(){
    const img = document.querySelector('.image');
    img.style.backgroundImage = `url(${nicola})`;  
    return{img}
}

function createLink() {
    const symbolSpan = document.createElement("span");
    const link = document.createElement("a");
  
    link.setAttribute('href', `https://unsplash.com/${mon.artistLinks}`);
    link.textContent = 'photo by Nicola Pavan on Unsplash';
  
    symbolSpan.appendChild(link);
    imgClassSetter().img.appendChild(symbolSpan);
  }