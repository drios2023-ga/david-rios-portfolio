// if (typeof $ == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file properly!')};

 
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

  function toggleConsul(){
    //console.log("toggled consul");
    document.getElementById("consulcup").style.display="inline-block";
    document.getElementById("saltlake").style.display="none";
    document.getElementById("hawaii").style.display="none";   
  }

  function toggleUSSumoOpen(){
    //console.log("toggled salt lake");    
    document.getElementById("consulcup").style.display="none";
    document.getElementById("saltlake").style.display="inline-block";
    document.getElementById("hawaii").style.display="none"; 

  }
  function toggleHawaii(){
    //console.log("toggled hawaii");    
    document.getElementById("consulcup").style.display="none";
    document.getElementById("saltlake").style.display="none";
    document.getElementById("hawaii").style.display="inline-block"; 

  }