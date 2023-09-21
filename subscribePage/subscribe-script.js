let form = document.getElementById("formContainer");
let error = document.getElementById("error")
let btnNavM = document.getElementById("btn-nav-mobile");
let navM = document.getElementById("navbar-mobile");
let success = document.getElementById("success");

let username = document.getElementById("inputName");
let email = document.getElementById("inputEmail");
let phone = document.getElementById("inputPhone")
let country = document.getElementById("inputCountry");
let tos = document.getElementById("userTos");
let submit = document.getElementById("btnSubmit");

let i=1;
function navMshow(){
    navM.style.display="block";
    i=i*-1;
}

function navMhide(){
    navM.style.display="none";
    i=i*-1;
}

btnNavM.addEventListener("click",(e)=>{
    if(i==1){
        navMshow();
        return;
    }
    navMhide();
})

function showError(msg){
    error.style.display="block"
    console.log(msg);
    error.innerHTML=msg;
}

function showSuccess(msg){
    success.style.display="block"
    console.log(msg);
    success.innerHTML=msg;
}

function hideSuccess(){
    success.style.display="none";
}

function hideError(){
    error.style.display="none";
}

function valForm(a,b,c,d,e){
    if(!a || !b || !c){
        return 1;
    }

    if( d.selectedIndex==0){
        return 2;
    }

    if(!e.checked){
        return 3;
    }
}

function valName(a){   
    if(a.length<3){
        return false;
    }
    return true;
}

function valEmail(a){
    let split = a.split("@");
    let split2 = a.split(".");
    if(split.length==1){ //gada @
        return 0;
    }
    else if(split2.length==1){ //gada .com
        return 1
    }
    return 2;
}

function valPhone(a){
    for(let i=0;i<a.length;i++){
        const charCode = a.charCodeAt(i);
        if (charCode < 48 || charCode > 57) {
            return false;
        }
    }
    return true;
}


function formSubmit(){
    let cekform = valForm(username.value, email.value, phone.value, country, tos);
    let cekEmail = valEmail(email.value);

    if(cekform==1){
        showError("Please fill the required fields");
        hideSuccess();
        return;
    }
    else if(cekform==2){
        showError("Please select a country");
        hideSuccess();
        return;
    }
    else if(cekform==3){
        showError("You need to agree with terms and conditions");
        hideSuccess();
        return;
    }

    if(!valName(username.value)){
        showError("Name length has to be more than 3");
        hideSuccess();
        return;
    }

    if(cekEmail==0){
        showError("Email has to contain '@' ");
        hideSuccess();
        return;
    }
    else if(cekEmail==1){
        showError("Email has to contain '.com' ");
        hideSuccess();
        return;
    }

    if(!valPhone(phone.value)){
        showError("Phone field only accept numbers");
        hideSuccess();
        return;
    }

    hideError();
    showSuccess("Successfully Registered");
}


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    formSubmit();
})
