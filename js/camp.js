
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btnni = document.getElementById("myBtnni");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btnni.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modalpup = document.getElementById("pupModal");

// Get the button that opens the modal
var btnn = document.getElementById("pupBtnn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("tutup")[0];

// When the user clicks the button, open the modal 
btnn.onclick = function() {
  modalpup.style.display = "block";
}

// When the user clicks on <span> (x), tutup the modal
span.onclick = function() {
  modalpup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalpup) {
    modalpup.style.display = "none";
  }
}



function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activi");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("act");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openNav3() {
  document.getElementById("my3Sidenav").style.width = "95%";
style.height = "2%";
}

function closeNavxx() {
  document.getElementById("my3Sidenav").style.width = "0";
}

function mydpFunction() {
  document.getElementById("myDroopdown").classList.toggle("show");
}

// Close the droopdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.droopbtn')) {
    var droopdowns = document.getElementsByClassName("droopdown-content");
    var i;
    for (i = 0; i < droopdowns.length; i++) {
      var openDroopdown = droopdowns[i];
      if (openDroopdown.classList.contains('show')) {
        openDroopdown.classList.remove('show');
      }
    }
  }
}


var bleep1 = new Audio(); bleep1.src = 'mp3/102007.mp3';
 bleep1.loop = false;
var bleep2 = new Audio(); bleep2.src = 'mp3/099007.mp3';
 bleep2.loop = false;
var bleep3 = new Audio(); bleep3.src = 'mp3/3.mp3';
 bleep3.loop = false;
var bleep4 = new Audio(); bleep4.src = 'mp3/4.mp3';
 bleep4.loop = false;
var bleep5 = new Audio(); bleep5.src = 'mp3/5.mp3';
 bleep5.loop = false;
var bleep6 = new Audio(); bleep6.src = 'mp3/6.mp3';
 bleep6.loop = false;
var bleep7 = new Audio(); bleep7.src = 'mp3/7.mp3';
 bleep7.loop = false;
var bleep8 = new Audio(); bleep8.src = 'mp3/8.mp3';
 bleep8.loop = false;

