
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


$(document).ready(function(){
  $(".fakeClass").click(function(){
  		var str = this.id;
  	$("#contentDisplay").fadeIn();
  	switch(str){
  		case '1':
  			$(".content").html("In this NSS volunteers teach the slum children after college hours. The noble work of Each One Teach One seems to come true seeing the dedication with which students take out Being a part of this club gives our volunteers a chance to get aware of the difficulties that children of our society from financially weak families are facing. Our volunteers and the slum children share a very loving relationship.");				//sankalp
  			break;
  		case '2':
  			$(".content").html("In this our team organises various medical camps for the welfare of the society like, Dental Camp, Blood Donation Camp, and Eye Check up Camp. The scheduled day the whole team puts in effort to make the event a success. A team of doctors is invited for the check up. People from the campus and nearby areas attend the camp.");				//paryas
  			break;
  		case '3':
	  		$(".content").html("In this the volunteers give the slum children of middle age, computer education. They teach the children how to use a computer, typing, and various keys in it etc. It not only gives the volunteers a chance to interact with them but also gives a golden chance to the slum children to enhance their knowledge. The club attempts to provide them with facilities in education that they lack otherwise.");				//unnati
  			break;
  		case '4':
  			$(".content").html("Under this part of the club our team organises various events that provide our volunteers fair chance to get face to face with the problems that our society as well as its various generations are facing.  Events like cloth donation, slipper donation, Shramdaan and rallies regarding awareness are organised.  In cloth donation and slipper donation selected volunteers visit the village area for the donation. Our team organises various rallies in which we visit the nearby slum area where with help of reciting slogans, posters, personally meeting the people and giving pamphlets we spread awareness. Another event called Shramdaan is organised in which the volunteers take the initiative to clean the area in the campus as well outside the campus.");				//ummang
  			break;
  		case '5':
  			$(".content").html("Chitkara University NSS Unit Cell is unit volunteers working for the welfare of the University as well as the society. Its hardworking volunteers work with only one motive that is, 'Not Me,But You'. It provides the volunteers a stage to groom them self. This unit is standing on four pillars i.e. Sankalp, Unnati, Prayas, Umang. ");
  			break;
  	}
  	;
  });
  $(".close").click(function(){
  	$("#contentDisplay").fadeOut()
  })
});

