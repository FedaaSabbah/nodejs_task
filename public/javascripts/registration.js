$(document).ready(function() {
    $("#register").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var passwordConfirm = $("#passwordConfirm").val();
    if (name == '' || email == '' || password == '' || passwordConfirm == '') {
    alert("Please fill all fields...!!!!!!");
    } else if ((password.length) < 8) {
    alert("Password should atleast 8 character in length...!!!!!!");
    } else if (!(password).match(passwordConfirm)) {
    alert("Your passwords don't match. Try again?");
    } else {
//الصفحة الي بدي اروح مشان ادخل البيانات في الجدول 
    $.post("page to insert", {
    name1: name,
    email1: email,
    password1: password
    }, function(data) {
    if (data == 'You have Successfully Registered.....') {
    $("form")[0].reset();
    }
    alert(data);
    });
    }
    });
    });