const pin=1256
const accNum=12345678910

// add money btn
document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault()

    const bank=document.getElementById('bank').value
    const accountNum=parseInt(document.getElementById('account-num').value)
    const addMoney=parseInt(document.getElementById('add-money').value)
    const pinNum=parseInt(document.getElementById('pin-num').value)
    const balance=parseInt(document.getElementById('balance').innerText)
    
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
    document.getElementById('balance').innerText=mainBalance
  
})
// cash-out-btn
document.getElementById('cash-out-btn').addEventListener('click',function(event){
     event.preventDefault()
     const balance=parseInt(document.getElementById('balance').innerText)
     const withdrawAmount=parseInt(document.getElementById('cash-out').value)
     const pinNum=parseInt(document.getElementById('out-pin-num').value)
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
     document.getElementById('balance').innerText=mainBalance
  
})
// transfer money
     document.getElementById('transfer-btn').addEventListener('click',function(event){
        event.preventDefault()
       const transferNum=document.getElementById('transfer-num').value
       const transferAmount=parseInt(document.getElementById('transfer-amount').value)
       const transferpin=parseInt(document.getElementById('transfer-pin').value)
       const balance=parseInt(document.getElementById('balance').innerText)
     
    if(transferNum.length<11){
        alert('Invalid Number')
        return
     } 
     if(pin!==transferpin){
        alert('Invalid Pin')
        return
    }
    const mainBalance=balance-transferAmount
     document.getElementById('balance').innerText=mainBalance
        
})










// toggling feature
document.getElementById('add-click').addEventListener('click',function(){
    document.getElementById('cash-out-parent').style.display="none"
    document.getElementById('add-money-parent').style.display="block"
    document.getElementById('transfer-parent').style.display="none"
})
document.getElementById('cash-out-click').addEventListener('click',function(){
       document.getElementById('add-money-parent').style.display="none"
       document.getElementById('cash-out-parent').style.display="block"
       document.getElementById('transfer-parent').style.display="none"
})
document.getElementById('transfer-click').addEventListener('click',function(){
       document.getElementById('transfer-parent').style.display="block"
       document.getElementById('add-money-parent').style.display="none"
       document.getElementById('cash-out-parent').style.display="none"
})


// log-out
document.getElementById('log-out').addEventListener('click',function(){
    window.location.href="./index.html"
})
