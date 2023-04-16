function ReadMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }


function P_Search() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInputP");
  filter = input.value.toUpperCase();
  table = document.getElementById("styled-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


function IC_Search() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInputIC");
  filter = input.value.toUpperCase();
  table = document.getElementById("styled-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0]; /*This number should be changed*/
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


function O_Search() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInputO");
  filter = input.value.toUpperCase();
  table = document.getElementById("styled-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0]; /*This number should be changed*/
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// Get the modal for full description
var full_modal = document.getElementById("full_Modal");

// Get the button that opens the modal
var full_btn = document.getElementById("full_Btn");

// Get the <span> element that closes the modal
var full_span = document.getElementsByClassName("full_close")[0];

// When the user clicks the button, open the modal 
full_btn.onclick = function() {
  full_modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
full_span.onclick = function() {
  full_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == full_modal) {
    full_modal.style.display = "none";
  }
}

// Get the modal for full description
var one_modal = document.getElementById("one_Modal");

// Get the button that opens the modal
var one_btn = document.getElementById("one_Btn");

// Get the <span> element that closes the modal
var one_span = document.getElementsByClassName("one_close")[0];

// When the user clicks the button, open the modal 
one_btn.onclick = function() {
  one_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
one_span.onclick = function() {
  one_modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == one_modal) {
    one_modal.style.display = "none";
  }
}


