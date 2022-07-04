export{imgRender}
import alain from '.././img/art-alain.jpg';
import nicola from '.././img/art-nicola.jpg';
import daniel from '.././img/art-daniel.jpg';
import road from '.././img/art-road.jpg';
import lance from '.././img/art-lance.jpg';
import ross from '.././img/art-ross.jpg';
import prometheus from '.././img/art-prometheus.jpg';

const imgCollection = [];

const  imgCombiner = (imgUrl, artistLinks, statement) => {
    return {imgUrl, artistLinks, statement}   
};

const sunday =imgCombiner(prometheus, "https://unsplash.com/es/@prometheusdesign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 'photo by Prometheus Design on Unsplash');
const monday = imgCombiner(alain, 'https://unsplash.com/@alainpictures?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText', 'photo by Alain on Unsplash');
const tuesday =  imgCombiner(nicola, 'https://unsplash.com/@pavan_nicola?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText', 'photo by Nicola Pavan on Unsplash' );
const wednesday =imgCombiner(daniel, "https://unsplash.com/@danielsantorfotografia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 'photo by Daniel Sánchez on Unsplash');
const thursday =imgCombiner(road, "https://unsplash.com/es/@roadahead_2223?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 'photo by Road Ahead on Unsplash');
const friday =imgCombiner(lance, "https://unsplash.com/@lancereis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 'photo by Lance Reis on Unsplash');
const saturday =imgCombiner(ross, "https://unsplash.com/@rs2photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 'photo by Ross Stone on Unsplash');

imgCollection.push(sunday, monday, tuesday, wednesday, thursday, friday, saturday);

function imgRender(){
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    
    const img = document.querySelector('.image');
    img.style.backgroundImage = `url(${imgCollection[currentDay].imgUrl})`;  
    
    const symbolSpan = document.createElement("span");
    const link = document.createElement("a");
  
    link.setAttribute('href', `${imgCollection[currentDay].artistLinks}`);
    link.textContent = imgCollection[currentDay].statement;
  
    symbolSpan.appendChild(link);
    img.appendChild(symbolSpan);
}