const form = document.querySelector('#form');
const UserId = document.querySelector('#UserId');
const EmailId = document.querySelector('#EmailId');
const mobile = document.querySelector('#mobile');
const Passwd = document.querySelector('#Passwd');
const cPasswd = document.querySelector('#cPasswd');
form.addEventListener("submit", function(event){
    
    if(!validateInput()) {
        event.preventDefault();
      }
   

})
function validateInput(){
    const username = UserId.Value.trim()
    const email = EmailId.Value.trim()
    const phone = mobile.Value.trim()
    const password = Passwd.Value.trim()
    const cpass = cPasswd.Value.trim()
    let succes=true

    if(username ===''){
        succes=false
        setError(UserId,'username is required');
    }else
        setSuccess(UserId);

    if(email ===''){
        succes=false
        setError(EmailId,'Email is empty');
    }else if(!validateEmail(email)){
        setError(EmailId,'Enter a valid email');
    }else
        setSuccess(EmailId);
    if(password ===''){
         succes=false
         setError(Passwd,'password is empty')
   
        }
    else if(password.length<8){
          setError(Passwd,'password is too short');
         }
    else
         setSuccess(Passwd);
    if(cpass ===''){
         succes=false
         alert('password is empty')
         setError(cPasswd,'password is empty');
    

    }else if(cpass !==password){
        succes=false
        setError(cPasswd,'password not match');
    }else
        setSuccess(cPasswd);

    if (phone.length !==10){
        succes=false
         setError(mobile,"Enter a valid phone number");
    }else  
         setSuccess(mobile);





}
function setError(element,message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('error')
    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')

    
}
function setSuccess(element) {
    const inputGroup =element.parentElement;
    const errorElement=inputGroup.querySelector('error')
    errorElement.innerText = '';
    inputGroup.classList.remove('error')
    inputGroup.classList.add('success')

    
};
const validateEmail = (EmailId) => {
    return String(EmailId)
    .toLowerCase()
    .match(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    
 };