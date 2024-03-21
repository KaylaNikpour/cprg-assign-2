
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {console.log("are we here");
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

 document.getElementById("year").innerHTML = new Date().getFullYear();