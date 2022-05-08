/* File Name: app.js 
Data Source: The cat API
Code: html, Css and Javascript.
Cat Information: From thecatapi.com
This cat api dropdown option to choose a cat to display few details and photo. 
I selected the div in the index.html file. I used fetch() API and json() to display each cat's data.
NOTE: I decided not to use createElement() to create all div(s). Dynamically inserted the cats info and html tags using javascript.
 */

const cats = document.querySelector('#cats');
const btn = document.querySelector('.btn');
const catInfo = document.querySelector('.cat-info');
const catImg = document.querySelector('.cat-img');
const catDescribe = document.querySelector('.cat-describe');

getData();
// function to fetch the cats information
 function getData () {  
     let breedNames = '';
   
     fetch(`https://api.thecatapi.com/v1/breeds`) 
        .then(response => {
          // parseing the response via json() 
          return response.json();
          })
           .then ((data) => {
             // collecting the breed names to place in the option
           for(let i=0; i<data.length; i++){
          breedNames += `<option class="${data[i].name}" value="${data[i].name}">${data[i].name}<option>`;           
       }
       // Populate the select option
      cats.innerHTML = breedNames;
      // listen for a click on the button
  btn.addEventListener('click', () => {
  for (let i =0; i< data.length; i++) {
    // check for the chosen name, iterate through the data
    if(cats.value === data[i].name) {   
      // insert html tags and their respective values dynamically in the div.   
      catInfo.innerHTML = `<p><span>Name: </span>${ data[i].name} </P> 
      <p><span>Origin: </span>${data[i].origin} </P> 
        <p><span>Weight: </span> "${data[i].weight.metric}"</P> 
         <p><span>Life Span: </span> ${data[i].life_span}</P> 
         <p>For more infomation on this cat: <a href="${data[i].wikipedia_url}" target="_bank" >Wikipedia link...</a></p>`;
         // Insert description of the cat
          catDescribe.innerHTML = `<p><span>Description: </span> ${data[i].description}</P>`;  
        // Insert Image of the cat  
         catImg.innerHTML = `<img src='https://cdn2.thecatapi.com/images/${data[i].reference_image_id}.jpg'>`;
      return ;
      }   
 
     }

   })
     return `${breedNames}`;
      })
   // catching error 
      .catch(err => alert(err))
 }


