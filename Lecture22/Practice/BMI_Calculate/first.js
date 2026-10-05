
const button=document.querySelector('button');

button.addEventListener('click',(event)=>{

    const val1=document.getElementById('first');
    const num1=Number(val1.value);

    const val2=document.getElementById('second');
    const num2=Number(val2.value);

    if((isNaN(num1) || isNaN(num2)))
    return;

    const mtsqr= num2*num2;

    const bmi=(num1)/mtsqr;

  const result=  document.getElementById('result');

  result.innerText=" Your BMI is :"+bmi.toFixed(3);


})