/* File Name: app2.js 
Data Source: The cat API version 2.
This cat api dropdown option to choose a cat to display its the image, few details and photo. 
I selected the few div in the index.html file. I used fetch() API and json() to display each cat's data. Here it awaits the fetch() throws error if fetch() fails, otherwise if no error displays cat info and image.
NOTE: I decided not to use createElement() to create all div(s). I inserted the html element using the innerHTML.
 */

const cats = document.querySelector('#cats');
const btn = document.querySelector('.btn');
const catInfo = document.querySelector('.cat-info');
const catImg = document.querySelector('.cat-img');
const catDescribe = document.querySelector('.cat-describe');

// getData() to fetch the breeds info
 async function getData() {    
    const response = await fetch(`https://api.thecatapi.com/v1/breeds`) 
       
         const obj = await  response.json();
         if(!response == "ok")
         {
           throw (error => console.log(err));
         }
         return obj; 
}
// call the display cat function
displayCat();

 async function displayCat(){
    let data = await getData();
      let list = '';
      data.forEach(item => {
        list += item.name;
        cats.innerHTML += `<option class="${item.name}" value="${item.name}">${item.name}<option>`;   
  })
  // call the setInput function to insert the information retrieved from cat API
  setInput();

function setInput() {
  let inputValue = cats.value;
    data.forEach(item => {
      // insert html tags and their respective values dynamically in the div.
        if(inputValue === item.name)   {
          catInfo.innerHTML = `<h1>${item.name} </h1> <div class="line1"></div>
          <p><span>Origin: </span>${item.origin} </P> 
            <p><span>Weight: </span> "${item.weight.metric}"</P> 
              <p><span>Life Span: </span> ${item.life_span}</P> 
              <p>For more infomation on this cat: <a href="${item.wikipedia_url}" target="_bank" >Wikipedia link...</a></p>`;
        // Insert description of the cat
      catDescribe.innerHTML = `<p><span>Description: </span> ${item.description}</P>`;  
      // Insert Image of the cat  
    catImg.innerHTML = `<img src='https://cdn2.thecatapi.com/images/${item.reference_image_id}.jpg '  alt=" ${item.name} picture">`;

  return inputValue;
  }
  })
  // when button is clicked arrow function to assign the cats value to the inputValue variable.
  // Thus displays the image.
  btn.addEventListener('click', () => {
      inputValue = cats.value;
      setInput();  
  })
} /* set input*/

  return cats;
}



