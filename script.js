// navbar

document.querySelector(".navbar").innerHTML=`<nav>
  <div class="logo"><a href="index.html">BookParadise</a></div>
  <div class="navigation">
      <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="product.html">Product</a></li>
          <li><a href="about.html">About us</a></li>
          <li><a href="contact.html">Contact us</a></li>
      </ul>
      <div class="dropdown">
        <i class="fa-solid fa-bars"></i>
        <div class="drop-content">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="product.html">Product</a></li>
            <li><a href="about.html">About us</a></li>
            <li><a href="contact.html">Contact us</a></li>
          </ul>
        </div>
      </div>
  </div>
  </nav>`;


// footer

document.querySelector(".footer").innerHTML=`<div class="footer-row">
<div class="f-col1"><a href="index.html" class="logowhite">BookParadise</a></div>
<div class="f-col2">
<a href="index.html" class="logowhite">BookParadise</a>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellendus incidunt eos ea, pariatur
    debitis.</p>
</div>
<div class="f-col3">
<h3>follow us</h3>
<ul>
    <li>facebook</li>
    <li>twiter</li>
    <li>instagram</li>
    <li>youtube</li>
</ul>
</div>
</div>

<hr>

<div class="footer-bottom">Copyright &copy; www.BookParadise.com | All right reseved!</div>`;



// pass hide & show

function show(){
    document.getElementById("pass").setAttribute("type","text");
    document.getElementById("icon").setAttribute("class","fa-regular fa-eye-slash")
}

function hide(){
    document.getElementById("pass").setAttribute("type","password");
    document.getElementById("icon").setAttribute("class","fa-regular fa-eye")
}


// form vallidation

function vallidation(){

var name = document.getElementById("name").value ;
var email = document.getElementById("email").value ;
var pass = document.getElementById("pass").value ;
var phone = document.getElementById("phone").value ;

var namecheck = /^[A-Za-z ]{3,}$/;
var emailcheck =  /^[A-Za-z0-9]{6,}@[A-Za-z]{2,}.[A-Za-z]{2,}$/;
var passcheck =  /^[A-Za-z0-9]{8,}$/;
var phonecheck = /^[0-9]{11}$/;



if(name.match(namecheck)){
    document.getElementById("nameerror").innerText = "**Yes, your right"
    document.getElementById("nameerror").style.color = "green"
}else{
    document.getElementById("nameerror").innerText = "**No, something else!"
    document.getElementById("nameerror").style.color = "red"
}

if(email.match(emailcheck)){
    document.getElementById("emailerror").innerText = "**Yes, your right"
    document.getElementById("emailerror").style.color = "green"
}else{
    document.getElementById("emailerror").innerText = "**No, something else!"
    document.getElementById("emailerror").style.color = "red"
}

if(pass.match(passcheck)){
    document.getElementById("passerror").innerText = "**Yes, your right"
    document.getElementById("passerror").style.color = "green"
}else{
    document.getElementById("passerror").innerText = "**No, something else!"
    document.getElementById("passerror").style.color = "red"
}

if(phone.match(phonecheck)){
    document.getElementById("phoneerror").innerText = "**Yes, your right"
    document.getElementById("phoneerror").style.color = "green"
}else{
    document.getElementById("phoneerror").innerText = "**No, something else!"
    document.getElementById("phoneerror").style.color = "red"
}


}

// Hamburger

document.addEventListener("click", function (event) {

    const dropdown = document.querySelector(".dropdown");
    const dropContent = dropdown.querySelector(".drop-content");

    if (!dropdown.contains(event.target)) {
        dropContent.style.display = "none";
    } else {
        dropContent.style.display = "block";
    }

});
