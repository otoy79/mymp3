function myOPFunction() {
  document.getElementById("OP").innerHTML = "";
}



document.getElementById("fontsize").innerHTML = " <b>Terjemahan &#119983;  exts:</b><br> <b id='demo2'></b><i onclick='tjFunction()'><img onclick='TFunction()' src='png/close.png' class='tj-close'></i><div id='TDIV'><a>• Terjemahan Open/Close</a> </div>   ";


document.getElementById("closefont").innerHTML = " <b>Lathin &#119983;  exts:</b><br><b id='demo1'></b><i onclick='ltFunction()'><img onclick='LFunction()' src='png/close.png' class='lt-close'></i><div id='LDIV'><a>• Lathin Open/Close</a> </div><br>     ";


function mybdFunction() {
document.getElementById("border").innerHTML = "<a><img onclick='mybd1Function()' src='png/close.png' style='margin-top:2px;margin-left:px;width:28px;height:20px;'></a><a><img onclick='mybd2Function()' src='png/close.png' style='margin-top:2px;margin-left:px;width:28px;height:20px;'> </a>";}


function ltFunction() {
    var x = document.getElementsByClassName("lt");
    var i;
   
	if(x[1].style.display == "none"){
	
    for (i = 0; i < x.length; i++) {

		        x[i].style.display = "block";

    }
		
	}else{
		
		 for (i = 0; i < x.length; i++) {

		        x[i].style.display = "none";

    }
	}
}

function tjFunction() {
    var x = document.getElementsByClassName("tj");
    var i;
   
	if(x[1].style.display == "none"){
	
    for (i = 0; i < x.length; i++) {

		        x[i].style.display = "block";

    }
		
	}else{
		
		 for (i = 0; i < x.length; i++) {

		        x[i].style.display = "none";

    }
	}
}

function LFunction() {
  var x = document.getElementById("LDIV");
  if (x.innerHTML === "<a>Lathin Closed!</a>") {
    x.innerHTML = "<a>Lathin Open!</a>";
  } else {
    x.innerHTML = "<a>Lathin Closed!</a>";
  }
}
function TFunction() {
  var x = document.getElementById("TDIV");
  if (x.innerHTML === "<a>Terjemahan Closed!</a>") {
    x.innerHTML = "<a>Terjemahan Open!</a>";
  } else {
    x.innerHTML = "<a>Terjemahan Closed!</a>";
  }
}


var modalle = document.getElementById("otoyModal");

// Get the button that opens the modal
var btnku = document.getElementById("otoyBtnku");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("silang")[0];

// When the user clicks the button, open the modal 
btnku.onclick = function() {
  modalle.style.display = "block";
}

// When the user clicks on <span> (x), silang the modal
span.onclick = function() {
  modalle.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalle) {
    modalle.style.display = "none";
  }
}
