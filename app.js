'use strict';

const jobTitle = document.querySelector('.job-title');
const main = document.querySelector('main.container');
const url = 'data.json';

jobTitle.onclick = () => {
    outData.innerHtml = 'main';
    getData();
}
 

function getData () {
    fetch(url)
    .then(rep => rep.json())
    .then(data => {
        outData(data);
    })
}

function outData(val) {
    console.log(val);
    let html = '';
    val.forEach((ele, ind) => {
        console.log((ele, ind));
         html += `
         <div>${ind+1}. ${ele.company} ${ele.position} ${ele.postedAt}
         ${ele.contract} ${ele.location} ${ele.description} ${ele.requirements.content}
         ${ele.requirements.items} ${ele.role.content} ${ele.role.items}
         </div> 
         `
    })
    main.innerHTML = html;
}