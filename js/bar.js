
function openForm() {
  var form = document.getElementById("myForm");
  if(form.style.display === "block"){
  	form.style.display = "none";
  }
  else{
  	form.style.display = "block";
  }
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function formValidation(){ 
  var password = document.getElementById('pass'); 
  var fname = document.getElementById('fname'); 
  var lname = document.getElementById('lname'); 
  var email = document.getElementById('mail'); 
  var str1 = '@'; var str2 = ".com"; 
  if(fname.value != /^[a-zA-Z]*$/ || lname.value != /^[a-zA-Z]*$/){ 
    alert('check name again');
     return; 
   }
    if(password.value == "" || fname =="" || lname == "" || email == ""){
    alert("Enter All Details");
    return;
    }
    if( email.value.indexOf(str1) == -1 || email.value.indexOf(str2) == -1 || email.value.indexOf(str1) > email.value.indexOf(str2) ){ 
    alert('Check Email');
    return;
    }
    if( password.value.length < 6){
    alert("Password length should be minimum 6");
    return; 
   }
}



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
function clickIt(){
 document.getElementById('slideshowButton2').click();

}

function myfunc(idOfImg){
      
      idOfImg.id='test1';
      console.log("chal gya");
    }
