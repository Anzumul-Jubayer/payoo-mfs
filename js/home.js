const pin=1256
const accNum=12345678910
// get number 
function getNumber(id){
  const getInputNumber=parseInt(document.getElementById(id).value)
   return getInputNumber
}
function getBalance(id){
    const getInputBalance=parseInt(document.getElementById(id).innerText)
   return getInputBalance
}
function setInnerText(value){
    const availableBalance=document.getElementById('balance')
    availableBalance.innerText=value
    return availableBalance
}
// toggle function
function handleToggle(id){
   const forms= document.getElementsByClassName('forms')
    for(const form of forms){
        form.style.display='none'
    }
   document.getElementById(id).style.display="block"
}
// handle click
function handleClick(id){
       const formsBtn=document.getElementsByClassName('form-btn')
    for(const formbtn of formsBtn){
        
        formbtn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        formbtn.classList.add("border-gray-300")
    }
    const activeBtn=document.getElementById(id)
   activeBtn.classList.remove("border-gray-300") 
   activeBtn.classList.add("border-[#0874f2]","bg-[#0874f20d]")
}

// add money btn
document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault()

    const bank=document.getElementById('bank').value
    const accountNum=getNumber('account-num')
    const addMoney= getNumber('add-money')
    const pinNum=getNumber('pin-num')
    const balance=getBalance('balance')
    
    if(bank.includes('Select Bank')){
        alert('Please Select Bank ')
        return
    }
     if(accNum!==accountNum){
        alert('Please provide a valid bank number')
        return
    }else if(pin!==pinNum){
        alert('Invalid Pin')
        return
    }
    const mainBalance=addMoney+balance
    setInnerText(mainBalance)
  
})
// cash-out-btn
document.getElementById('cash-out-btn').addEventListener('click',function(event){
     event.preventDefault()
     const balance= getBalance('balance')  
     const withdrawAmount=getNumber('cash-out')
     const pinNum=getNumber('out-pin-num')
     const agNum=document.getElementById('agent-num').value
     if(agNum.length<11){
        alert('Invalid Number')
        return
     }
      
     if(pin!==pinNum){
        alert('Invalid Pin')
        return
    }

     const mainBalance=balance-withdrawAmount
     setInnerText(mainBalance)
  
})
// transfer money
     document.getElementById('transfer-btn').addEventListener('click',function(event){
        event.preventDefault()
       const transferNum=document.getElementById('transfer-num').value
       const transferAmount=getNumber('transfer-amount')
       const transferpin=getNumber('transfer-pin')
       const balance=getBalance('balance')
     
    if(transferNum.length<11){
        alert('Invalid Number')
        return
     } 
     if(pin!==transferpin){
        alert('Invalid Pin')
        return
    }
    const mainBalance=balance-transferAmount
    setInnerText(mainBalance)
        
})










// toggling feature
document.getElementById('add-click').addEventListener('click',function(){
    handleToggle('add-money-parent')
     handleClick('add-click')
   
})
document.getElementById('cash-out-click').addEventListener('click',function(){
     handleToggle('cash-out-parent')
      handleClick('cash-out-click')
      
})
document.getElementById('transfer-click').addEventListener('click',function(){
      handleToggle('transfer-parent')
      handleClick('transfer-click')
  
     
})
document.getElementById('coupon-click').addEventListener('click',function(){
     handleToggle('coupon-parent') 
     handleClick('coupon-click')     
})


// log-out
document.getElementById('log-out').addEventListener('click',function(){
    window.location.href="./index.html"
})
