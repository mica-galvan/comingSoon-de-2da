

document.getElementById("btn_form").addEventListener("click", function(event){
    event.preventDefault();
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var colorText = "#828282";
    var colorBorder = "#A3A3A3";
    var email = document.getElementById("email");
    var check1 = document.getElementById("checkbox1");
    var check2 = document.getElementById("checkbox2");
    var checkText1 = document.getElementById("checkbox-text1");
    var checkText2 = document.getElementById("checkbox-text2");
    var alert = document.getElementById("alert");

    successful = true;

    if (!email.value.match(validRegex)) {
        email.style.borderColor= "red";
        successful = false;
    }else{
        email.style.borderColor= colorBorder;
    }

    if (!check1.checked) {
        checkText1.style.color= "red";
        successful = false;
    }else{
        checkText1.style.color= colorText;
    }

    if (!check2.checked) {
        checkText2.style.color= "red";
        successful = false;
    }else{
        checkText2.style.color= colorText;
    }

    if(successful){

        fetch('https://o24zodctxl.execute-api.us-east-1.amazonaws.com/dev/send_mail', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ "email": email.value, "politic": check1.checked, "membership": check2.checked })
            })
            .then(function(json) {
                // Usamos la información recibida como necesitemos
                if(json.status){
                    alert.style.display = "block";
                    setTimeout(function(){ alert.style.display = "none"; }, 4000);
                }
        });

    }else{
        alert.style.display = "none";
    }
    
});