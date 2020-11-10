$(document).ready(function(){

   let pword=false;
   let email=false;


    $("#email").focus(function(){
        $("#email").val('');

        $("#email").blur(function(){
            let emailPat=new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);


            if(!emailPat.text($("email").val())){
                $("#validEmailDisplay").text("Please enter a valid email.").addClass('red');
                return email=false;
            }
            else{
                $("#validEmailDisplay").text('');
                return email=true;
            }
        })
    })

    $("#password").focus(function(){

        $("#password").removeAttr("type").attr("type","password").val('');
        
        $("#password").blur(function(){

            let pwdL=$("#password").val().length;

            if(pwdL<6){
                $("#validPasswordDisplay").text("Your password should be six characters or more").addClass('red');
                return pword=false;
            }
            else{
                $("#validPasswordDisplay").text("");
                return pword=true;
            }
        })

    })

    $("#form-submit").submit(function(sub){
        if(email && pword){
            alert("Form has been succesfully submitted");
        }
        else{
            $("#validEmailDisplay").text("Please enter a valid email.").addClass('red');
            $("#validPasswordDisplay").text("Your password should be six chracters or more").addClass('red');
            sub.preventDefault();
        }
    })
})