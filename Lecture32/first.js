
const fs = require('fs');

const restaurent=[];
const images=["First","second","third","fourth","fifth","sixth","seventh","Eigth","nine","tenth"]
const rest_name=["Olive Garden",
  "Cheesecake Factory",
  "Red Lobster",
  "Texas Roadhouse",
  "Applebee's",
  "Buffalo Wild Wings",
  "P.F. Chang's",
  "Chili's",
  "Outback Steakhouse",
  "Carrabba's Italian Grill",
  "Bonefish Grill",
  "The Capital Grille",
  "Nobu",
  "Ruth's Chris Steak House",
  "TGI Fridays",
  "Panera Bread",
  "Cracker Barrel",
  "Shake Shack",
  "In-N-Out Burger",
  "Five Guys"];
const foodTypes=["Italian",
  "Chinese",
  "Mexican",
  "Indian",
  "Japanese",
  "Thai",
  "French",
  "Mediterranean",
  "American",
  "Korean"];
const delhiLocations = [
  "Connaught Place",
  "Karol Bagh",
  "Dwarka",
  "Lajpat Nagar",
  "Hauz Khas",
  "Saket",
  "Rajouri Garden",
  "Paharganj",
  "Chandni Chowk",
  "Vasant Kunj"
];

for(let i=0; i<100; i++)
{
    const obj={};
    obj["image"]=images[Math.floor(Math.random()*10)];
    obj["name"]=rest_name[Math.floor(Math.random()*20)];
    obj["rating"]=Math.floor(Math.random()*5+1);
    obj["food_type"]=foodTypes[Math.floor(Math.random()*10)];
    obj["Price_for_two"]=Math.floor(Math.random()*2401+100);
    obj["location"]=delhiLocations[Math.floor(Math.random()*10)];
    obj["Distance_from_customer_home"]=(Math.random()*10+1).toFixed(1);
    obj["offers"]=Math.floor(Math.random()*30);
    obj["alchol"]=Math.random()>0.7;
    obj["Restaurant_Opening_time"] = Math.floor(Math.random() * 24);
    obj["Restaurant_Closing_time"] = (obj["Restaurant_Opening_time"] + 12) % 24;

    restaurent.push(obj);
}

console.log(restaurent);

const jsonData=JSON.stringify(restaurent,null,4);
fs.writeFileSync('arrayData.json',jsonData,'utf8');

// Array convert into JSon(HomeWork);
