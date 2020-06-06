const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userPass = document.getElementById('user-password');
const userConfPass = document.getElementById('conf-password');
const signupBtn = document.querySelector('.signup-btn');







signupBtn.addEventListener('click',function(){

    if(userName.value=='' || userEmail.value=='' || userPass.value=='' || userConfPass.value==''){
        alert('plz fill fileds');
        return false;
    }
    else if(userPass.value!=userConfPass.value ){
        alert('Plz enter same pass');
        return false;
    }
    else{

    location.replace('/')
    var name = userName.value;
    var email = userEmail.value;
    var pass = userPass.value;
    let userData = {name,email,pass};
    
    var options = {
    method:'POST',
    body:JSON.stringify(userData),
    headers:{
        'Content-type':'application/json'
    }
    }
}
    
    fetch('/signup',options).then(res => res.json()).then(data=>console.log(data))
    
    })
    

