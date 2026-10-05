
// Generate a basic insight based on DOB

// based on month: size 12
 const zodiacSigns=[
    "Capricorn","Aquarius","Pisces","Aries","Taurus","Gemini",
    "Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius"
 ];

//  based on date, sixe 31
 const compliments = [
  "You have an amazing smile!",
  "Your positivity is contagious.",
  "You bring out the best in others.",
  "You’re a great listener.",
  "Your creativity is inspiring.",
  "You have a kind heart.",
  "You’re stronger than you think.",
  "Your laughter is the best sound.",
  "You’re incredibly thoughtful.",
  "You make people feel special.",
  "Your determination is admirable.",
  "You’re full of brilliant ideas.",
  "You always know how to cheer people up.",
  "Your energy is uplifting.",
  "You’re so reliable and trustworthy.",
  "You have a beautiful way with words.",
  "Your presence makes everything better.",
  "You’re so talented at what you do.",
  "You always see the good in people.",
  "Your kindness makes a difference.",
  "You’re brave for trying new things.",
  "You make hard things look easy.",
  "You inspire people around you.",
  "You have a wonderful sense of humor.",
  "You make people feel at ease.",
  "You’re so patient and understanding.",
  "Your perspective is refreshing.",
  "You light up the room when you enter.",
  "You always find the right words to say.",
  "You’re one of a kind.",
  "You make the world a better place."
]

// size 20
const victimCardComplimenets= [
  "You always help others, but they rarely notice.",
  "You give so much, yet people take it for granted.",
  "You always put others first, even if no one does the same for you.",
  "You forgive easily, even when others wouldn’t.",
  "You always understand people, but they seldom understand you.",
  "You go out of your way for others, but they rarely go out of their way for you.",
  "You always spread kindness, but not everyone gives it back.",
  "You support everyone, but when you need support, few are there.",
  "You always make sacrifices, but they often go unnoticed.",
  "You’re always honest, yet people don’t value it enough.",
  "You stay loyal, even when others let you down.",
  "You always keep promises, but others break theirs.",
  "You encourage others, even when no one encourages you.",
  "You listen to everyone, but they don’t listen to you.",
  "You always try to make people smile, even when you’re hurting.",
  "You show respect, but don’t always get respect back.",
  "You believe in people, even when they doubt you.",
  "You’re there for everyone, but they aren’t always there for you.",
  "You always choose peace, even when others bring conflict.",
  "You give love freely, but don’t always receive it."
]

// "rohit" "negi" Day
//  5*4*9=180%30=0-29
// for multiple time same recommendations

// size 30
const recommendations=  [
  "Feed a street dog with some food.",
  "Plant a tree in your neighborhood.",
  "Call your parents and tell them you love them.",
  "Donate old clothes to someone in need.",
  "Write down three things you are grateful for today.",
  "Smile at a stranger to brighten their day.",
  "Cook a meal and share it with a friend or neighbor.",
  "Take a short walk in nature to clear your mind.",
  "Read a book for at least 20 minutes.",
  "Compliment someone sincerely today.",
  "Pick up plastic or trash from the street and dispose of it properly.",
  "Drink more water and stay hydrated.",
  "Spend 10 minutes meditating in silence.",
  "Help a child with their homework.",
  "Listen to someone without interrupting them.",
  "Send a thank-you message to someone who helped you recently.",
  "Sleep early to give your body proper rest.",
  "Support a local shop instead of a big chain.",
  "Give some food to a beggar or hungry person.",
  "Teach someone a skill you know.",
  "Water the plants at home or outside.",
  "Switch off unnecessary lights and save electricity.",
  "Save a small portion of money today instead of spending it.",
  "Practice deep breathing exercises for 5 minutes.",
  "Share motivational words with a friend who is struggling.",
  "Avoid your phone for 1 hour and spend time with family.",
  "Volunteer at a local charity or shelter.",
  "Write down your goals for the week.",
  "Forgive someone you’ve been holding a grudge against.",
  "Pray or spend a few minutes in spiritual reflection."
]


// size 20
const predictions= [
  "You will become a crorepoti sooner than you think.",
  "A dream job opportunity will open up for you.",
  "Your side hustle will turn into a successful business.",
  "You will travel to a country you’ve always wanted to visit.",
  "Your hard work will bring public recognition and praise.",
  "You will buy your own house sooner than expected.",
  "A long-term debt will finally be cleared.",
  "You will meet someone who changes your life for the better.",
  "Your health and energy will improve significantly.",
  "You will mentor others and be respected for your wisdom.",
  "A creative idea of yours will go viral.",
  "You will get a promotion with a big salary jump.",
  "Your investments will grow beyond your expectations.",
  "You will master a new skill that boosts your career.",
  "You will start a habit that transforms your daily life.",
  "A long-awaited wish will come true this year.",
  "You will build a powerful network of helpful people.",
  "Your confidence will rise and doors will open for you.",
  "You will become a source of inspiration for many.",
  "You will find true peace and clarity in your decisions."
]


const form=document.getElementById('astroForm');

form.addEventListener('submit',(event)=>{
  
   event.preventDefault();

   const Name=document.getElementById('name').value;
   const SurName=document.getElementById('surname').value;
   const Day=Number(document.getElementById('day').value);
   const Month=Number(document.getElementById('month').value);
   const Year=Number(document.getElementById('year').value);
   
   const result=document.getElementById('result');

   const first_message=`Hello ${Name} ${SurName}`;
   const second_message=`Your Zodiac sign is ${zodiacSigns[Month-1]}`;
   const third_message=compliments[Day-1];

   let index=Math.floor(Math.random()*20);
   const fourth_message=victimCardComplimenets[index];

  index=(Name.length*SurName.length*Year)%30;
  const fifth_message=recommendations[index];

  index=(Day*Month*Year)%20;
  const six_message=predictions[index];

   result.innerText= `${first_message}\n ${second_message}\n ${third_message}\n ${fourth_message}\n Our Recommendation for you: ${fifth_message}\n Your future Prediction is: ${six_message}\n`;
   

});