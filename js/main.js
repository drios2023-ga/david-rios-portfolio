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