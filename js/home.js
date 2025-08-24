const pin=1256
const accNum=12345678910
const transactionData=[]
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
    const data={
        name:'Add Money',
        time:new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData)
  
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
       
     const data={
        name:'Cash Out',
        time:new Date().toLocaleTimeString()
    }
    transactionData.push(data)
  
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
      const data={
        name:'Transfer Money',
        time:new Date().toLocaleTimeString()
    }
    transactionData.push(data)
        
})
// pay money
document.getElementById('pay-money-btn').addEventListener('click',function(event){
    event.preventDefault()

    const bank=document.getElementById('pay-bank').value
    const payMoney= getNumber('pay-money')
    const pinNum=getNumber('pay-pin')
    const balance=getBalance('balance')
    const paymentNum=document.getElementById('payment-num').value
    
    if(bank.includes('Select Bank')){
        alert('Please Select Bank ')
        return
    }
     if(paymentNum.length<11){
        alert('Please provide a valid bank number')
        return
    }else if(pin!==pinNum){
        alert('Invalid Pin')
        return
    }
    const mainBalance=balance-payMoney
    setInnerText(mainBalance)
      const data={
        name:'Pay Bill',
        time:new Date().toLocaleTimeString()
    }
    transactionData.push(data)
  
})

// transaction
document.getElementById('transaction-click').addEventListener('click',function(){
      const transactionContainer=document.getElementById('transaction-container')
     transactionContainer.innerHTML = "" 
     for (const data of transactionData){
        const div=document.createElement('div')
        div.innerHTML=`
        <div class=" flex justify-between items-center   bg-white p-3 border-1 border-[#0808081a] rounded-[12px] mt-2">
               <div class="flex   items-center  gap-3">
              <div class=" rounded-full p-3 bg-[#0808080d]">
                <img src="./assets/wallet1.png" alt="">
              </div>
              <div>
                <h1 class="text-[1rem] font-semibold">${data.name}</h1>
                <p class="text-xs text-[#08080880]">${data.time}</p>
              </div>
            </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        
        `
        transactionContainer.appendChild(div)
     }
     
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
document.getElementById('pay-click').addEventListener('click',function(){
     handleToggle('pay-parent') 
     handleClick('pay-click')     
})
document.getElementById('transaction-click').addEventListener('click',function(){
     handleToggle('transaction-parent') 
     handleClick('transaction-click')     
})


// log-out
document.getElementById('log-out').addEventListener('click',function(){
    window.location.href="./index.html"
})

