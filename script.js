var email, output, color;
function checkEmail(e){
    console.log(e);
    email = document.getElementById(e).value;
    console.log(email);

    if(validateEmail(email)){
        output = 'Thanks for joining us';
        if(e=='email1'){
            color = 'green';
        }
        else{
            color = 'white';
        }
    }
    else{
        output = 'Please check your email';
        if(e=='email1'){
            color = 'red';
        }
        else{
            color = 'white';
        }
    }
    var ele =  document.getElementById(e+'-submit');
    ele.innerHTML = output;
    ele.style.color = color;
}
const validateEmail = (e) => {
    return String(e)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };