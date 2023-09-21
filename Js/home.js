// nav bar login btn js
 
function activeLoginCard(){
    let loginCard= document.querySelector('#login');

 
    loginCard.style.opacity = 1;
    flag=1;
 
}

// login card submit btn
function validDetail(){
    const userId=document.querySelector('#userId');
    const userPassword=document.querySelector('#userPassword');
     const submit=document.querySelector('#submit');
    if(userId.value==='Admin'&& userPassword.value==='12345678')
    {
       location.href='../main.html';
       alert('login success');

        userId.value='';
        userPassword.value='';

    }
    else{
        alert('login failed try again')
        userId.value='';
        userPassword.value='';

    }

}