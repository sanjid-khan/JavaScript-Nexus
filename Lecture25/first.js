

const questionBank = [
    {question: "Who has the most centuries in international cricket?", options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"], answer: "Sachin Tendulkar"},
    {question: "Which country won the first ICC Cricket World Cup?", options: ["Australia", "England", "West Indies", "India"], answer: "West Indies"},
    {question: "Who is known as the 'Goat of Cricket'?", options: ["Virat Kohli", "Don Bradman", "MS Dhoni", "Sachin Tendulkar"], answer: "Don Bradman"},
    {question: "Who holds the highest individual score in ODI cricket?", options: ["264", "200", "237", "275"], answer: "264"},
    {question: "Which bowler has taken the most wickets in Test cricket?", options: ["Pat Cummins", "Shane Warne", "Bumrah", "Muttiah Muralitharan"], answer: "Muttiah Muralitharan"},
    {question: "Who won the 2011 ICC Cricket World Cup?", options: ["India", "Sri Lanka", "Australia", "Pakistan"], answer: "India"},
    {question: "Which cricketer is called 'Captain Cool'?", options: ["Virat Kohli", "MS Dhoni", "Kane Williamson", "Steve Waugh"], answer: "MS Dhoni"},
    {question: "Which Indian cricketer is nicknamed 'Hitman'?", options: ["Shikhar Dhawan", "Rohit Sharma", "Virat Kohli", "Hardik Pandya"], answer: "Rohit Sharma"},
    {question: "Which country is called the 'Baggy Greens'?", options: ["England", "Australia", "New Zealand", "South Africa"], answer: "Australia"},
    {question: "Who was the first batsman to score a double century in ODIs?", options: ["Virender Sehwag", "Sachin Tendulkar", "Rohit Sharma", "Chris Gayle"], answer: "Sachin Tendulkar"},
    {question: "Which country hosted the 2019 ICC Cricket World Cup?", options: ["India", "Australia", "England", "South Africa"], answer: "England"},
    {question: "Who is the fastest batsman to 8000 runs in Test cricket?", options: ["Kumar Sangakkara", "Virat Kohli", "Steve Smith", "AB de Villiers"], answer: "Kumar Sangakkara"},
    {question: "Which team is known as the 'Black Caps'?", options: ["New Zealand", "South Africa", "Pakistan", "England"], answer: "New Zealand"},
    {question: "Which bowler has the record for most wickets in ODIs?", options: ["Shane Warne", "Muttiah Muralitharan", "Wasim Akram", "Lasith Malinga"], answer: "Muttiah Muralitharan"},
    {question: "Who is the only batsman to score 100 international centuries?", options: ["Virat Kohli", "Sachin Tendulkar", "Ricky Ponting", "Brian Lara"], answer: "Sachin Tendulkar"},
    {question: "Which country won the 2021 ICC T20 World Cup?", options: ["Australia", "India", "Pakistan", "England"], answer: "Australia"},
    {question: "Who is the fastest to 10,000 runs in ODIs?", options: ["Virat Kohli", "Sachin Tendulkar", "Ricky Ponting", "Brian Lara"], answer: "Virat Kohli"},
    {question: "Which player is nicknamed 'The Wall'?", options: ["Rahul Dravid", "Jacques Kallis", "Hashim Amla", "Steve Smith"], answer: "Rahul Dravid"},
    {question: "Which bowler has taken 4 wickets in 4 balls in international cricket?", options: ["Lasith Malinga", "Wasim Akram", "Shaheen Afridi", "Brett Lee"], answer: "Lasith Malinga"},
    {question: "Who won the ICC Champions Trophy in 2013?", options: ["India", "England", "Australia", "Sri Lanka"], answer: "India"}
];



function RandomQuestion(){

//    const data= new Set();
// //    use set for unique object
//    while(data.size!=5){
//     const index= Math.floor(Math.random()*20);
//     data.add(questionBank[index]);
//    }

// //    convert set into array
//    return [...data];
// // sort function


// randonly sort  karenge isko aaj hum log

// questionBank.sort(()=>Math.random()-0.5);

// return questionBank.slice(0,5);

const arr=[];
let length=questionBank.length;

for(let i=0; i<5;i++)
{
    const index=Math.floor(Math.random()*length);
    arr.push(questionBank[index]);

    // swap
    questionBank[index],questionBank[length-1]=[questionBank[length-1],questionBank[index]];
    length--;
}
return arr;
 
}



// select the form and insert all the elements into it

// {question: "Who has the most centuries in international cricket?", options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"], answer: "Sachin Tendulkar"},

const form=document.querySelector('form');

const problem= RandomQuestion();




// const original_answewr={q1: "sachin tendulkar"}
const original_answewr={};
// key value

problem.forEach((obj,index)=>{

const div_element= document.createElement('div');
div_element.className="question";

original_answewr[`q${index+1}`]=obj['answer'];

const para=document.createElement('p');
para.textContent= `${index+1}. ${obj['question']}`;
div_element.appendChild(para);


// create 4 options

// ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"]

obj[`options`].forEach((data)=>{
  const label=  document.createElement('label');
  const input=document.createElement('input');
  input.type="radio";
  input.name=`q${index+1}`;
  input.value=data;

  label.appendChild(input);

  label.appendChild(document.createTextNode(data));

  div_element.appendChild(label);

  div_element.appendChild(document.createElement('br'));
})

form.appendChild(div_element);

});

const button=  document.createElement('button');
button.type='submit';
button.className='submit-btn';
button.textContent="Submit";

form.appendChild(button);




// Check the submitted form


form.addEventListener('submit',(event)=>{

    event.preventDefault();
    const data= new FormData(form);

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


