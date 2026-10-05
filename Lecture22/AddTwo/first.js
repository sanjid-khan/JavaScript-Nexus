// const button=document.querySelector('button');

// button.addEventListener('click',()=>{

    // read the data
//     const input1=document.getElementById('first');
//     const number1=Number(input1.value);

//     const input2=document.getElementById('second');
//     const number2=Number(input2.value);

//    if((isNaN(number1) || isNaN(number2)))
//     return;

    // output the result
//     const result=number1+number2;
//     const re=  document.getElementById('result');
//     re.textContent= "Result: " +result;
// });



 const button=document.querySelector('button');

 button.addEventListener('click',()=>{

    const input1=document.getElementById('first');
    const num1=Number(input1.value);

    const input2=document.getElementById('second');
    const num2=Number(input2.value);

    if((isNaN(num1) || isNaN(num2)))
    return;

    const result=num1+num2;
    const res=document.getElementById('result');
    res.textContent="Result: "+result;

 })




 

// BMI Calculator
// Dhaej Calculator(Male)
// Alimony Calculator (Female)






































