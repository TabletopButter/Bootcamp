document.querySelector("form").addEventListener("submit", function(event){
    var errors = [];

    if(document.getElementById("email").value ===""){
        errors.push("Please enter a email");
    }
    if(document.getElementById("password").value===""){
        errors.push("Please enter a password");
    }

    if(errors.length>0){
        event.preventDefault();
        window.alert(errors.join(", "));

    }

})