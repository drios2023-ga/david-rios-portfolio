// if (typeof $ == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file properly!')};


//this function hides and shows the 
//links in the hamburger menu
function toggleHamburger() {
    let x = document.getElementById("hamburger-links");

    if (x.style.display === "block") {
      x.style.display = "none";
      console.log("hide links");

    } else {
      x.style.display = "block";
      console.log("show links");
    }
  }

//these functions toggle the gallery sections
function toggleAll(){
  document.getElementById("consulcup").style.display="inline-block";
  document.getElementById("saltlake").style.display="inline-block";
  document.getElementById("hawaii").style.display="inline-block"; 
}

function toggleConsul(){
  document.getElementById("consulcup").style.display="inline-block";
  document.getElementById("saltlake").style.display="none";
  document.getElementById("hawaii").style.display="none";   
}

function toggleUSSumoOpen(){    
  document.getElementById("consulcup").style.display="none";
  document.getElementById("saltlake").style.display="inline-block";
  document.getElementById("hawaii").style.display="none"; 

}
function toggleHawaii(){  
  document.getElementById("consulcup").style.display="none";
  document.getElementById("saltlake").style.display="none";
  document.getElementById("hawaii").style.display="inline-block"; 

}