// const original_answewr=["sachin tendulkar","west indies","sachin tendulkar","264","Mitchell Starc"]
const original_answewr={
   q1: "sachin tendulkar",
   q2: "west indies",
   q3: "sachin tendulkar",
   q4: "264",
   q5: "Mitchell Starc"}


const form=document.querySelector('form');

form.addEventListener('submit',(event)=>{

    event.preventDefault();
    const data= new FormData(form);

    const answer=Array.from(data.values());
    console.log(answer);

    let result=0;
    for(let [key,value] of data.entries())
    {
        if(value==original_answewr[key])
            result++;
    }

        const out=document.getElementById('out');
        out.innerText=`${result} out of 5 is correct`;

    form.reset();

});

// **********************************************************

// Summary
// Form submit করার event ধরছো।
// Page reload রোধ করছো।
// FormData থেকে ইউজারের উত্তর নিয়ে আসছো।
// প্রতিটি উত্তর original_answewr এর সাথে মিলিয়ে গুনছো।
// Result out element এ দেখাচ্ছো।
// Form খালি করে দিচ্ছো।


