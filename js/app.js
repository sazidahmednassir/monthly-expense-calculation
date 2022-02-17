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


//function error
function err (id){
    document.getElementById(id).style.display='inline-block';
}



//input value function
function Inputvalue(id){
    let inputBox =document.getElementById(id);
    let inputAmount= parseInt(inputBox.value);
     if(isNaN(inputAmount) || inputAmount< 0){
         inputBox.value= '';
         alert('enter value');
       
     }
     else{
    return inputAmount;
     }
}


//setText Function
function setText (id, val){
   let innerTextId =document.getElementById(id);
//    let innerTextAmount= parseInt(innerTextId).innerText;
//    console.log(innerTextAmount);

//        if(isNaN(innerTextAmount) || innerTextAmount < 0){
//            innerTextId.innerText= 0;
//        } else{
//         innerTextId.innerText= innerTextAmount;
//        }
   if(isNaN(val) || val < 0){
    innerTextId.innerText= 0;
   } else{
    innerTextId.innerText= val;
   }


     
}



//calculation event
calculate.addEventListener('click', function(){
    let total=0;
    let expense=0;
    
    const income=  Inputvalue('income');
    const food=  Inputvalue('food');
    const rent=  Inputvalue('rent');
    const clothes=  Inputvalue('clothes');

    expense= parseInt(food) + parseInt(rent) + parseInt(clothes);
    console.log(expense);
    
    setText('total-expense', expense)
    

    total = income -expense;

    setText('balance' , total);

    
    
    

   
})



//saving event
save.addEventListener('click', function(){
    let percantage=0;
    let savingBalance=0;
    const income=  Inputvalue('income');
    const save= Inputvalue('save');

    percantage= (save * income) / 100;
     
    

    setText('saving-amount' , percantage);

    let balance= document.getElementById('balance').innerText;

    savingBalance=balance - percantage;

    

    setText('remaining-balance', savingBalance)

    
   
})

