/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

var button = document.getElementById('myButton');
if(button){
    button.addEventListener('click', redirect);
}
    
function redirect() {
    window.location = "usersubmittedreviews.html";
}
