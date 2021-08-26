function showCharmanderAlert(){
  document.getElementById('page-header').textContent = 'This is the fire starter'
}

function showSquirtleAlert(){
  document.getElementById('page-header').textContent = 'This is the water starter'
}

function showBulbasaurAlert(){
  document.getElementById('page-header').textContent = 'This is the grass starter'
}

var charmanderPic = 'https://i.pinimg.com/originals/ed/63/e3/ed63e3ecc578c585aeb5f550d52a258b.jpg'

var squirtlePic = 'https://miro.medium.com/max/750/1*W_ITBT0_dDNGyy_yPRQO3g.jpeg'

var bulbasaurPic = 'https://static.pokemonpets.com/images/monsters-images-300-300/1-Bulbasaur.webp'

document.getElementById('squirtle').addEventListener('click', () => {
  document.getElementById('squirtle').src = squirtlePic

  var btn = document.createElement("BUTTON");
  btn.textContent = "Choose And Learn More";
  var squirtle = document.getElementById('squirtle-box');
  btn.addEventListener("click", function(){
    location = "squirtle.html"; 
  });
  squirtle.appendChild(btn);
})

document.getElementById('charmander').addEventListener('click', () =>{
  document.getElementById('charmander').src = charmanderPic

  var btn = document.createElement("BUTTON");
  btn.textContent = "Choose And Learn More";
  var charmander = document.getElementById('charmander-box');
  btn.addEventListener("click", function(){
    location = "charmander.html"; 
  });
  charmander.appendChild(btn);
})


document.getElementById('bulbasaur').addEventListener('click', () =>{
  document.getElementById('bulbasaur').src = bulbasaurPic

  var btn = document.createElement("BUTTON");
  btn.textContent = "Choose And Learn More";
  var bulbasaur = document.getElementById('bulbasaur-box');
  btn.addEventListener("click", function(){
    location = "bulbasaur.html"; 
  });
  bulbasaur.appendChild(btn); 
})

