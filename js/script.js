// login button functionality
document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault()
   const mobileNum = 12345678910
   const pinNum=1256
   const mobileNumValue=document.getElementById('mobile-num').value
   const inputNum=parseInt(mobileNumValue)
   const PinNumValue=document.getElementById('pin').value
   const inputPinNum=parseInt(PinNumValue)
   if(inputNum===mobileNum && inputPinNum===pinNum){
       window.location.href="./home.html"
   }else{
      alert("Invalid Credential")
   }

})