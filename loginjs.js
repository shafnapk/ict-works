
    
    
    
   
    var errorname=document.getElementById("erroruser");
    var errorpasw=document.getElementById("errorp");
    //  if(naml.value.trim()== "") {

    //     errorname.innerHTML="Please enter username";
    //      return false;
    // }
    function usernamevaldation() {
        let naml=document.getElementById("username");
        let regexfn= /^[a-zA-Z]+$/;
        if(regexfn.test(naml.value)) {            
            errorname.innerHTML="";
            return true;              
        }
        else {
            errorname.innerHTML="please enter valid username";
            errorname.style.color="red";
            return false;
        }          
    }

    function passwordvaldation() {
        let pasw = document.getElementById("password");
        let regexfn= /^[0-9]+$/;
        if(regexfn.test(pasw.value)) {            
            errorpasw.innerHTML="";
            return true;        
        }
        else {
            errorpasw.innerHTML="please enter valid password";
            errorpasw.style.color="red";
            return false;
        }
    }

function validate(callback){
    
    let naml = document.getElementById("username");
    let namlv = naml.value;
    let pasw = document.getElementById("password");
    let paswv = pasw.value;

    if (namlv.trim() == ""){
        errorname.innerHTML="Please enter username";
        errorname.style.color="red";
    }
    if (paswv.trim() == ""){
        errorpasw.innerHTML="please enter password";
        errorpasw.style.color="red";
    }

    if (namlv.trim() != "" && paswv.trim() != ""){
        var xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(this.readyState==4 && this.status==200) {
                var ajaxson= JSON.parse(this.responseText);
                callback(namlv, paswv, ajaxson);                                                       
            }
        };
        xhttp.open("GET","login.json",true);
        xhttp.send();
    }    
}


//function for callback
function gotoApp(name, password, ajaxResp) {    
    if (name == ajaxResp.name && password == ajaxResp.password) {
        window.location.replace("home.html"); 
    }       
    else{
        document.getElementById("invalidCredentials").innerText = "Invalid Credentials";
    }          
}
    
