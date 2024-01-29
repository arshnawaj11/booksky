//select popup box, popupp overlay, button

var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-poppup-button")


addpopupbutton.addEventListener("click", function(){

popupoverlay.style.display="block"
popupbox.style.display="block"




})

// select cancel button

var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click" , function(event){
event.preventDefault()
popupoverlay.style.display="none"
popupbox.style.display="none"


})

//add container , add book , book -titel, book auther, book discribtion

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitelinput = document.getElementById("book-titel-input")
var Bookauthorinput = document.getElementById("Book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")


addbook.addEventListener("click",function(event){
    event.preventDefault()
var div = document.createElement("div")
div.setAttribute("class","book-container")
div.innerHTML = `<h2>${booktitelinput.value}</h2>
<h5>${Bookauthorinput.value}</h5>
<p>${bookdescriptioninput.value}</p>
<button onclick="deletebook(event)">Delete</button>`
container.append(div)
popupoverlay.style.display="none"
popupbox.style.display="none"


})

function deletebook(event)
{

    event.target.parentElement.remove()
   
}




    
    