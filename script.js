const form=document.getElementById('form');
const username=document.getElementById('username');
const password=document.getElementById('password');
const confirmPassword=document.getElementById('password2');
const email=document.getElementById('email');
const demo=document.querySelector('.demo');


//when form is submited

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
   
})


function checkInputs(){

    //get value from thte inputs

    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const confirmpasswordValue=confirmPassword.value.trim();
    confirmpasswordValue

    //check to see if inputs have a value
    if(usernameValue==''){
        ///show error
        //add error class

        setErrorFor(username,'User Name cannot be blank')
        return;
    }else{
        //add success class
        setSuccessFor(username);
    }
    
    
    if(emailValue==''){
        setErrorFor(email,'Email cannot be blank')
        return;
    }else if(!validateEmail(emailValue)){
        setErrorFor(email,'Email is not valid');
        return;
    }else{
        setSuccessFor(email);
    }
    if(passwordValue===''){

        setErrorFor(password,'Password cannot be blank');
        return;

    }else if(passwordValue.length>7){
       
        setSuccessFor(password)
    }else{
        setErrorFor(password,'Password must be at leaset 8 characters');
        return;
    }
    if(confirmpasswordValue==""){
        setErrorFor(confirmPassword,'Password cannot be blank');
        return;
    }else if(passwordValue==confirmpasswordValue){
        setSuccessFor(confirmPassword);
        
    }else{
        setErrorFor(confirmPassword,'passwords must match')
        return;
    
    
    }
    // if(usernameValue.classList.contains("success")&&emailValue.classList.contains("success")&&passwordValue.classList.contains("success")&&confirmpasswordValue.classList("success")){
    //         alert("GODD!")
    //     }
    demo.innerHTML='I wanna know what love is';
    demo.style.display='block';

    setTimeout(function(){
        demo.classList.remove('demo');
        demo.innerHTML='';

    },3000)

    
    


 
}

function setErrorFor(input,message){
    const formControl=input.parentElement; //.form-control 
    const small=formControl.querySelector('small');


    //add error message insside small
    formControl.className='form-control error';

    small.innerText=message;

}

function setSuccessFor(input){
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
   
    //add success message

    
    formControl.className='form-control success';
    
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}