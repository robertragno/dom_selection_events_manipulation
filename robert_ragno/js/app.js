document.addEventListener("DOMContentLoaded", function(event) {
	
	console.log("JavaScript is working");

	//1. When full name is filled out it should populate the name card automagically.
	document.getElementById("fullName").addEventListener("keyup", function() {
    	document.getElementsByClassName("txt-center cool-title")[0].innerHTML = fullName.value;
	});

	
	//2. About yourself cannot be more than 140 characters long.
	
	var textBox = document.getElementsByTagName("textarea")[0];
	textBox.addEventListener("keyup", function() {
		if (textBox.value.length > 140) {
			document.getElementById("textalert").innerHTML = "&#42;About me must be 140 characters or less";
		}
		else {
				document.getElementById("textalert").innerHTML = "";
			}
	});

	//3. Username must be at least 4 characters long.
	var charCount = document.getElementById("user");

	charCount.addEventListener("keyup", function() {
		if (charCount.value.length < 4) {
			document.getElementById("passalert").innerHTML = "&#42;Username must be at least 4 characters";
			//Non-functional Submit blocker
			/*document.getElementsByClassName("btn btn-primary")[0].addEventListener("click", function() { 
				alert("Username must be at least 4 characters!");
				//event.preventDefault();
			});*/
		} 
		else {
				document.getElementById("passalert").innerHTML = "";
			}
	});



});
