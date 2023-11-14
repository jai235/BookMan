//selecting popup box , popup over lay button

var popup_box =document.querySelector(".popup_box")
var popup_overlay =document.querySelector(".popup_overlay")
var add_btn = document.querySelector(".add_btn")

add_btn.addEventListener("click",function(){
    popup_box.style.display="block";
    popup_overlay.style.display="block";
})

//selecting the cancel btn
var cancel_book =  document.querySelector(".cancel_book")



cancel_book.addEventListener("click", function(event){
    event.preventDefault();
    popup_box.style.display="none";
    popup_overlay.style.display="none";
})

//select container add book and book title and all fields

var containerjs = document.querySelector(".container")
var book_titlejs = document.querySelector("#book_titleid")
var book_authorjs = document.querySelector("#book_authorid")
var book_descriptionjs = document.querySelector("#book_descriptionid")
var add_bookjs = document.querySelector("#add_bookid")

//create new id

add_bookjs.addEventListener("click",function(event){
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class","book_container");
    div.innerHTML= `<h2>${book_titlejs.value}</h2>
     <h3>${book_authorjs.value}</h3>
    <p>${book_descriptionjs.value}</p>
    <button onclick="dlt_btn(event)">Delete</button>`;
    
    containerjs.append(div);
    popup_box.style.display="none";
    popup_overlay.style.display="none";
})

function dlt_btn(event){
event.target.parentElement.remove();
}