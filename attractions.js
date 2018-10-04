/*var navClick = document.getElementById("nav-id");

navClick.onclick = function() {
   var foundClass = document.querySelector(".navbox-class");
   foundClass.classList.toggle(".shownav");
 };*/

 var navClick = document.getElementById("nav-id");

 navClick.onclick = function() {
    var foundClass = document.querySelector("#navbox-id");
    if (foundClass.style.display === "none") {
      foundClass.style.display = "block";
      /*transform svg to x here*/
    } else {
      foundClass.style.display = "none";
      /*keep svg as lines*/
    }
  };
