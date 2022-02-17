//all span tag
let expense = document.getElementById('total-expense');
let balance= document.getElementById('balance');
let savingAmount= document.getElementById('saving-amount');
let remainingBalance= document.getElementById('remaining-balance'); 

//span tag value
expense.innerText=0;
balance.innerText=0;
savingAmount.innerText=0;
remainingBalance.innerText=0;

//buttons
const calculate = document.getElementById('calculate');
const save=document.getElementById('savings');



//calculation event
calculate.addEventListener('click', function(){
    let total=0;
    let expense=0;
    
    const income= document.getElementById('income').value;
    const food= document.getElementById('food').value;
    const rent= document.getElementById('rent').value;
    const clothes=document.getElementById('clothes').value;

    expense= parseInt(food) + parseInt(rent) + parseInt(clothes);
    
    document.getElementById('total-expense').innerText=expense;

    total = income -expense;

    document.getElementById('balance').innerText=total;

    
    
    

   
})



//saving event
save.addEventListener('click', function(){
    let percantage=0;
    let savingBalance=0;
    const income= document.getElementById('income').value;
    const save=document.getElementById('save').value;

    percantage= (save * income) / 100;
     
    document.getElementById('saving-amount').innerText=percantage;

    let balance= document.getElementById('balance').innerText;

    savingBalance=balance - percantage;

    document.getElementById('remaining-balance').innerText=savingBalance; 

    
   
})

