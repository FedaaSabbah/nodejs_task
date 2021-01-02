function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


$(document).ready(function() {
    $("#login").click(function() {
 
    var email = $("#email").val();
    var password = $("#password").val();

    if ( email == '' || password == '') {
    alert("Please fill all fields...!!!!!!");
    } else if ((password.length) < 8) {
    alert("Password should at least 8 character in length...!!!!!!");
    }  else if(!validateEmail(email)){
        alert("  the email is not valid");
    }
    else {
        //ناخد البيانات على شكل json لداتا بيس
    }
    });
    });