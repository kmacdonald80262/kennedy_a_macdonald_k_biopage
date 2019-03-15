(() => {
console.log('fired')

/*document.getElementById("katBut").addEventListener("click", swapDivs);	

var imgCon = document.querySelector("")
function changeImg () {
	imgCon.src= "images/bio-photo2.jpg";
	imgCon.classList.add("katBio");
}

        thisDiv = document.getElementById(layer_ref);
        thisDiv.style.display = "block";*/


  /*on click hide the 2 divs on screen and switch them with one of the hidden divs*/

/*function myFunction() {
  var x = document.getElementById("katBio");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}*/

let buttons = document.querySelector('.buttons'),
	pictures = document.querySelector('picture'),
	katBio = document.querySelector('.katBio'),
	alexBio = document.querySelector('.alexBio'),
	katPic = document.querySelector('.katPic'),
	alexPic = document.querySelector('.alexPic'),
	bioSec = document.getElementById('bioPics'),
	bioSec2 = document.getElementById('bios');



function hideBioPic() {
	alexPic.classList.toggle('hide-alexPic');
	katBio.classList.add('show');
	buttons.classList.toggle('hide-button');
	console.log('Kathleen Bio');
}

function bioPic () {
	katPic.classList.toggle('hide-katPic');
	alexBio.classList.add('show-alexBio');
	picture.classList.toggle('hide-picture');
	console.log('Alex Bio');
}



/*button.addEventListener('click', hideBioPic);*/


buttons.addEventListener('click', hideBioPic);
picture.addEventListener('click', bioPic);




})();