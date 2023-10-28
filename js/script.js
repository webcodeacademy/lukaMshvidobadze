const nav = ["Mouse", "Keyboard", "Controller", "Mouse Mat"];
const links = ["index.html" "keyboard.html",
"mouse.html", "Mousemat.html", "Controller.hml"];

let navtext  = '<ul class="flex">';
for (i = 0; i < nav.length; i++) {
    navtext += '<li><a href="' + links[i] + '">' +nav[i] + "</a></li>";

    }
    
    navtext += "</ul>";


 document.getElementById("nav").innerHTML = navtext;


 
 
 
 document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });



