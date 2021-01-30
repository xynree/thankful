const list = document.querySelector('.list-group');
const listItems = document.querySelectorAll(".list-group-item")
// let listItems = list.children;


let additems = document.querySelector('.addformcontainer');
let searchitems = document.querySelector('#filter');


let favlist = document.querySelectorAll('.barobj');
let tlpl = favlist[0];
let grnpl = favlist[1];
let blupl = favlist[2];
let purppl = favlist[3];
let eggpl = favlist[4];


let audio = document.querySelector('#music');


//ANNOYING STUFF

pulse = () => {
  listItems.forEach(li => {
    li.classList.toggle("pulse");
  })
}

setInterval(pulse,70);




//DEL BUTTONS

remove = (x) => {
  if(x.target.classList.contains('delbtn')){
    rem = x.target.parentElement;
    list.removeChild(rem);
  }
}


document.addEventListener('click', remove);



//ENTER & SEARCH

add = (e) => {

if (e.key !== "Enter") {return};


if (e.key === "Enter") {
  e.preventDefault();

  let li = document.createElement('li');
  li.className = "list-group-item";

  li.innerHTML = `<div>${e.target.value}</div>`;

  let del = document.createElement('button');
  del.className = 'delbtn';
  del.appendChild(document.createTextNode('x'));

  list.appendChild(li);
  li.appendChild(del);
  e.target.value = "";
}

}


search = (f) =>{


if (f.key !== "Enter") {return};

  if (f.key === "Enter") {
    f.preventDefault();
    // favlist.filter(

    // )
    

  }
}


additems.addEventListener('keydown', add);
searchitems.addEventListener('keydown', search);

// CHANGE COLOR PALETTES

plchange = (g) => {

if (g.toElement === grnpl) {
  document.querySelector('.titleclass').style.removeProperty('filter');
  document.querySelector('.cardbodyborder').style.removeProperty('filter');
  document.querySelector('body').style.backgroundColor=  "#585123";
  document.querySelector('.cardbodycontainer').style.removeProperty('filter');
  document.querySelector('#filter').style.removeProperty('filter');
  audio.setAttribute("src", "./music/cleo's tune.mp3");
  searchitems.placeholder= "Now Playing: Cleo's Tune";
  audio.play();

}

else if (g.toElement === blupl){

document.querySelector('.titleclass').style.filter= "hue-rotate(90deg)";
document.querySelector('.cardbodyborder').style.filter= "hue-rotate(90deg)";
document.querySelector('body').style.backgroundColor=  "#235836";
document.querySelector('.cardbodycontainer').style.filter= "hue-rotate(90deg)";
document.querySelector('#filter').style.filter= "hue-rotate(90deg)";
audio.setAttribute("src", "./music/people and flowers.mp3");
searchitems.placeholder= "Now Playing: People And Flowers";
audio.play();


}

else if (g.toElement === purppl){

  document.querySelector('.titleclass').style.filter= "hue-rotate(-81deg)";
  document.querySelector('.cardbodyborder').style.filter= "hue-rotate(-81deg)";
  document.querySelector('body').style.backgroundColor=  "#58233c";
  document.querySelector('.cardbodycontainer').style.filter= "hue-rotate(-81deg)";
  document.querySelector('#filter').style.filter= "hue-rotate(-81deg)";
  audio.setAttribute("src", "./music/hey siri, power off.mp3");
  searchitems.placeholder= "Now Playing: Hey Siri, Power Off";
  audio.play();


  }

else if (g.toElement === eggpl){

    document.querySelector('.titleclass').style.filter= "hue-rotate(-132deg)";
    document.querySelector('.cardbodyborder').style.filter= "hue-rotate(-132deg)";
    document.querySelector('body').style.backgroundColor=  "#462358";
    document.querySelector('.cardbodycontainer').style.filter= "hue-rotate(-132deg)";
    document.querySelector('#filter').style.filter= "hue-rotate(-132deg)";
    audio.setAttribute("src", "./music/twilight friends.mp3");
    searchitems.placeholder= "Now Playing: Twilight Friends";
    audio.play();


    }
  
else if (g.toElement === tlpl){

      document.querySelector('.titleclass').style.filter= "hue-rotate(45deg)";
      document.querySelector('.cardbodyborder').style.filter= "hue-rotate(45deg)";
      document.querySelector('body').style.backgroundColor=  "#375823";
      document.querySelector('.cardbodycontainer').style.filter= "hue-rotate(45deg)";
      document.querySelector('#filter').style.filter= "hue-rotate(45deg)";
      audio.setAttribute("src", "./music/midnight snack.mp3");
      searchitems.placeholder= "Now Playing: Midnight Snack";
      audio.play();

      }
}


favlist.forEach(pl => {
  addEventListener("click", plchange)
});

//BLUR
