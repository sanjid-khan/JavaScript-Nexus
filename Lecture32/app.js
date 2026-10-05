

const restaurents= [
  {
    "image": "fourth",
    "name": "Five Guys",
    "rating": 2,
    "food_type": "Japanese",
    "Price_for_two": 1184,
    "location": "Hauz Khas",
    "Distance_from_customer_home": "9.7",
    "offers": 7,
    "alchol": false,
    "Restaurant_Opening_time": 14,
    "Restaurant_Closing_time": 2
  },
  {
    "image": "nine",
    "name": "Panera Bread",
    "rating": 2,
    "food_type": "American",
    "Price_for_two": 853,
    "location": "Lajpat Nagar",
    "Distance_from_customer_home": "1.6",
    "offers": 0,
    "alchol": true,
    "Restaurant_Opening_time": 8,
    "Restaurant_Closing_time": 20
  },
  {
    "image": "fifth",
    "name": "Nobu",
    "rating": 4,
    "food_type": "Mexican",
    "Price_for_two": 1696,
    "location": "Connaught Place",
    "Distance_from_customer_home": "2.0",
    "offers": 3,
    "alchol": true,
    "Restaurant_Opening_time": 16,
    "Restaurant_Closing_time": 4
  },
  {
    "image": "fourth",
    "name": "The Capital Grille",
    "rating": 5,
    "food_type": "American",
    "Price_for_two": 172,
    "location": "Saket",
    "Distance_from_customer_home": "10.8",
    "offers": 9,
    "alchol": false,
    "Restaurant_Opening_time": 6,
    "Restaurant_Closing_time": 18
  },
  {
    "image": "First",
    "name": "Chili's",
    "rating": 4,
    "food_type": "Mediterranean",
    "Price_for_two": 1060,
    "location": "Vasant Kunj",
    "Distance_from_customer_home": "8.3",
    "offers": 20,
    "alchol": false,
    "Restaurant_Opening_time": 2,
    "Restaurant_Closing_time": 14
  },
  {
    "image": "fourth",
    "name": "Cheesecake Factory",
    "rating": 1,
    "food_type": "Mexican",
    "Price_for_two": 761,
    "location": "Dwarka",
    "Distance_from_customer_home": "10.9",
    "offers": 2,
    "alchol": false,
    "Restaurant_Opening_time": 2,
    "Restaurant_Closing_time": 14
  },
  {
    "image": "nine",
    "name": "Ruth's Chris Steak House",
    "rating": 2,
    "food_type": "American",
    "Price_for_two": 384,
    "location": "Vasant Kunj",
    "Distance_from_customer_home": "4.7",
    "offers": 19,
    "alchol": true,
    "Restaurant_Opening_time": 16,
    "Restaurant_Closing_time": 4
  },
  {
    "image": "seventh",
    "name": "The Capital Grille",
    "rating": 4,
    "food_type": "Japanese",
    "Price_for_two": 2206,
    "location": "Karol Bagh",
    "Distance_from_customer_home": "8.6",
    "offers": 1,
    "alchol": false,
    "Restaurant_Opening_time": 6,
    "Restaurant_Closing_time": 18
  },
  {
    "image": "sixth",
    "name": "Cracker Barrel",
    "rating": 3,
    "food_type": "American",
    "Price_for_two": 2117,
    "location": "Lajpat Nagar",
    "Distance_from_customer_home": "1.6",
    "offers": 6,
    "alchol": false,
    "Restaurant_Opening_time": 9,
    "Restaurant_Closing_time": 21
  },
  {
    "image": "fourth",
    "name": "Cheesecake Factory",
    "rating": 4,
    "food_type": "Thai",
    "Price_for_two": 878,
    "location": "Karol Bagh",
    "Distance_from_customer_home": "4.7",
    "offers": 22,
    "alchol": false,
    "Restaurant_Opening_time": 18,
    "Restaurant_Closing_time": 6
  },
  {
    "image": "nine",
    "name": "The Capital Grille",
    "rating": 4,
    "food_type": "Japanese",
    "Price_for_two": 379,
    "location": "Dwarka",
    "Distance_from_customer_home": "8.6",
    "offers": 9,
    "alchol": false,
    "Restaurant_Opening_time": 20,
    "Restaurant_Closing_time": 8
  },
  {
    "image": "First",
    "name": "Panera Bread",
    "rating": 4,
    "food_type": "American",
    "Price_for_two": 1251,
    "location": "Lajpat Nagar",
    "Distance_from_customer_home": "8.8",
    "offers": 1,
    "alchol": false,
    "Restaurant_Opening_time": 23,
    "Restaurant_Closing_time": 11
  },
  {
    "image": "tenth",
    "name": "Red Lobster",
    "rating": 2,
    "food_type": "American",
    "Price_for_two": 786,
    "location": "Saket",
    "Distance_from_customer_home": "3.7",
    "offers": 26,
    "alchol": false,
    "Restaurant_Opening_time": 23,
    "Restaurant_Closing_time": 11
  },
  {
    "image": "First",
    "name": "Outback Steakhouse",
    "rating": 3,
    "food_type": "Chinese",
    "Price_for_two": 1160,
    "location": "Connaught Place",
    "Distance_from_customer_home": "5.4",
    "offers": 4,
    "alchol": true,
    "Restaurant_Opening_time": 21,
    "Restaurant_Closing_time": 9
  },
  {
    "image": "third",
    "name": "Olive Garden",
    "rating": 3,
    "food_type": "French",
    "Price_for_two": 772,
    "location": "Lajpat Nagar",
    "Distance_from_customer_home": "9.1",
    "offers": 10,
    "alchol": false,
    "Restaurant_Opening_time": 8,
    "Restaurant_Closing_time": 20
  },
  {
    "image": "third",
    "name": "P.F. Chang's",
    "rating": 4,
    "food_type": "Japanese",
    "Price_for_two": 1034,
    "location": "Hauz Khas",
    "Distance_from_customer_home": "4.8",
    "offers": 27,
    "alchol": false,
    "Restaurant_Opening_time": 8,
    "Restaurant_Closing_time": 20
  },
  {
    "image": "seventh",
    "name": "Nobu",
    "rating": 5,
    "food_type": "Mexican",
    "Price_for_two": 1285,
    "location": "Vasant Kunj",
    "Distance_from_customer_home": "4.5",
    "offers": 21,
    "alchol": true,
    "Restaurant_Opening_time": 5,
    "Restaurant_Closing_time": 17
  },
  {
    "image": "First",
    "name": "Cheesecake Factory",
    "rating": 4,
    "food_type": "Korean",
    "Price_for_two": 938,
    "location": "Paharganj",
    "Distance_from_customer_home": "5.6",
    "offers": 11,
    "alchol": false,
    "Restaurant_Opening_time": 0,
    "Restaurant_Closing_time": 12
  },
  {
    "image": "tenth",
    "name": "Carrabba's Italian Grill",
    "rating": 5,
    "food_type": "Japanese",
    "Price_for_two": 2191,
    "location": "Saket",
    "Distance_from_customer_home": "7.7",
    "offers": 9,
    "alchol": false,
    "Restaurant_Opening_time": 4,
    "Restaurant_Closing_time": 16
  },
  {
    "image": "nine",
    "name": "Shake Shack",
    "rating": 2,
    "food_type": "Mediterranean",
    "Price_for_two": 1585,
    "location": "Karol Bagh",
    "Distance_from_customer_home": "7.9",
    "offers": 24,
    "alchol": false,
    "Restaurant_Opening_time": 20,
    "Restaurant_Closing_time": 8
  },
  {
    "image": "First",
    "name": "In-N-Out Burger",
    "rating": 1,
    "food_type": "Mexican",
    "Price_for_two": 2421,
    "location": "Hauz Khas",
    "Distance_from_customer_home": "6.0",
    "offers": 3,
    "alchol": true,
    "Restaurant_Opening_time": 10,
    "Restaurant_Closing_time": 22
  },
  {
    "image": "fourth",
    "name": "In-N-Out Burger",
    "rating": 4,
    "food_type": "Japanese",
    "Price_for_two": 1079,
    "location": "Karol Bagh",
    "Distance_from_customer_home": "10.0",
    "offers": 0,
    "alchol": false,
    "Restaurant_Opening_time": 6,
    "Restaurant_Closing_time": 18
  },
  {
    "image": "fourth",
    "name": "Applebee's",
    "rating": 5,
    "food_type": "Mexican",
    "Price_for_two": 2040,
    "location": "Vasant Kunj",
    "Distance_from_customer_home": "3.0",
    "offers": 22,
    "alchol": true,
    "Restaurant_Opening_time": 19,
    "Restaurant_Closing_time": 7
  },
  {
    "image": "seventh",
    "name": "Bonefish Grill",
    "rating": 5,
    "food_type": "Indian",
    "Price_for_two": 504,
    "location": "Lajpat Nagar",
    "Distance_from_customer_home": "8.9",
    "offers": 14,
    "alchol": false,
    "Restaurant_Opening_time": 17,
    "Restaurant_Closing_time": 5
  },
  {
    "image": "second",
    "name": "Chili's",
    "rating": 5,
    "food_type": "Mediterranean",
    "Price_for_two": 577,
    "location": "Rajouri Garden",
    "Distance_from_customer_home": "2.2",
    "offers": 21,
    "alchol": true,
    "Restaurant_Opening_time": 13,
    "Restaurant_Closing_time": 1
  },
  {
    "image": "First",
    "name": "TGI Fridays",
    "rating": 1,
    "food_type": "Chinese",
    "Price_for_two": 1184,
    "location": "Dwarka",
    "Distance_from_customer_home": "7.4",
    "offers": 21,
    "alchol": false,
    "Restaurant_Opening_time": 11,
    "Restaurant_Closing_time": 23
  },
  {
    "image": "third",
    "name": "Nobu",
    "rating": 1,
    "food_type": "French",
    "Price_for_two": 308,
    "location": "Hauz Khas",
    "Distance_from_customer_home": "4.2",
    "offers": 1,
    "alchol": false,
    "Restaurant_Opening_time": 8,
    "Restaurant_Closing_time": 20
  },
  {
    "image": "tenth",
    "name": "Ruth's Chris Steak House",
    "rating": 1,
    "food_type": "French",
    "Price_for_two": 2011,
    "location": "Hauz Khas",
    "Distance_from_customer_home": "10.3",
    "offers": 5,
    "alchol": false,
    "Restaurant_Opening_time": 20,
    "Restaurant_Closing_time": 8
  },
  {
    "image": "fourth",
    "name": "Olive Garden",
    "rating": 3,
    "food_type": "French",
    "Price_for_two": 2297,
    "location": "Chandni Chowk",
    "Distance_from_customer_home": "8.7",
    "offers": 16,
    "alchol": false,
    "Restaurant_Opening_time": 5,
    "Restaurant_Closing_time": 17
  },
  {
    "image": "fourth",
    "name": "Applebee's",
    "rating": 1,
    "food_type": "Mediterranean",
    "Price_for_two": 857,
    "location": "Lajpat Nagar",
    "Distance_from_customer_home": "5.4",
    "offers": 29,
    "alchol": true,
    "Restaurant_Opening_time": 22,
    "Restaurant_Closing_time": 10
  },
  {
    "image": "fifth",
    "name": "Buffalo Wild Wings",
    "rating": 4,
    "food_type": "Korean",
    "Price_for_two": 1219,
    "location": "Karol Bagh",
    "Distance_from_customer_home": "8.6",
    "offers": 17,
    "alchol": true,
    "Restaurant_Opening_time": 23,
    "Restaurant_Closing_time": 11
  },
  {
    "image": "fifth",
    "name": "The Capital Grille",
    "rating": 3,
    "food_type": "French",
    "Price_for_two": 1894,
    "location": "Connaught Place",
    "Distance_from_customer_home": "7.5",
    "offers": 10,
    "alchol": true,
    "Restaurant_Opening_time": 22,
    "Restaurant_Closing_time": 10
  },
  {
    "image": "second",
    "name": "P.F. Chang's",
    "rating": 5,
    "food_type": "Japanese",
    "Price_for_two": 1413,
    "location": "Hauz Khas",
    "Distance_from_customer_home": "2.2",
    "offers": 20,
    "alchol": false,
    "Restaurant_Opening_time": 23,
    "Restaurant_Closing_time": 11
  },
  {
    "image": "seventh",
    "name": "Nobu",
    "rating": 4,
    "food_type": "Mexican",
    "Price_for_two": 2264,
    "location": "Rajouri Garden",
    "Distance_from_customer_home": "2.2",
    "offers": 25,
    "alchol": false,
    "Restaurant_Opening_time": 12,
    "Restaurant_Closing_time": 0
  },
  {
    "image": "seventh",
    "name": "Shake Shack",
    "rating": 1,
    "food_type": "Thai",
    "Price_for_two": 1735,
    "location": "Saket",
    "Distance_from_customer_home": "1.5",
    "offers": 18,
    "alchol": true,
    "Restaurant_Opening_time": 13,
    "Restaurant_Closing_time": 1
  },
  {
    "image": "third",
    "name": "In-N-Out Burger",
    "rating": 5,
    "food_type": "French",
    "Price_for_two": 2388,
    "location": "Karol Bagh",
    "Distance_from_customer_home": "1.7",
    "offers": 20,
    "alchol": true,
    "Restaurant_Opening_time": 12,
    "Restaurant_Closing_time": 0
  },
  {
    "image": "seventh",
    "name": "Nobu",
    "rating": 5,
    "food_type": "Korean",
    "Price_for_two": 2146,
    "location": "Chandni Chowk",
    "Distance_from_customer_home": "1.5",
    "offers": 15,
    "alchol": false,
    "Restaurant_Opening_time": 10,
    "Restaurant_Closing_time": 22
  },
  {
    "image": "second",
    "name": "Texas Roadhouse",
    "rating": 4,
    "food_type": "Korean",
    "Price_for_two": 1393,
    "location": "Connaught Place",
    "Distance_from_customer_home": "7.9",
    "offers": 23,
    "alchol": true,
    "Restaurant_Opening_time": 20,
    "Restaurant_Closing_time": 8
  },
  {
    "image": "sixth",
    "name": "TGI Fridays",
    "rating": 4,
    "food_type": "Mediterranean",
    "Price_for_two": 1591,
    "location": "Dwarka",
    "Distance_from_customer_home": "3.5",
    "offers": 2,
    "alchol": false,
    "Restaurant_Opening_time": 8,
    "Restaurant_Closing_time": 20
  },
  {
    "image": "sixth",
    "name": "Texas Roadhouse",
    "rating": 1,
    "food_type": "Chinese",
    "Price_for_two": 471,
    "location": "Hauz Khas",
    "Distance_from_customer_home": "2.8",
    "offers": 19,
    "alchol": true,
    "Restaurant_Opening_time": 23,
    "Restaurant_Closing_time": 11
  },
  {
    "image": "First",
    "name": "Outback Steakhouse",
    "rating": 4,
    "food_type": "Italian",
    "Price_for_two": 1216,
    "location": "Saket",
    "Distance_from_customer_home": "8.5",
    "offers": 17,
    "alchol": false,
    "Restaurant_Opening_time": 14,
    "Restaurant_Closing_time": 2
  },
  {
    "image": "First",
    "name": "Cheesecake Factory",
    "rating": 5,
    "food_type": "American",
    "Price_for_two": 1575,
    "location": "Karol Bagh",
    "Distance_from_customer_home": "6.2",
    "offers": 16,
    "alchol": false,
    "Restaurant_Opening_time": 23,
    "Restaurant_Closing_time": 11
  },
  {
    "image": "third",
    "name": "Buffalo Wild Wings",
    "rating": 3,
    "food_type": "American",
    "Price_for_two": 843,
    "location": "Lajpat Nagar",
    "Distance_from_customer_home": "10.7",
    "offers": 19,
    "alchol": true,
    "Restaurant_Opening_time": 8,
    "Restaurant_Closing_time": 20
  },
  {
    "image": "First",
    "name": "In-N-Out Burger",
    "rating": 5,
    "food_type": "French",
    "Price_for_two": 506,
    "location": "Chandni Chowk",
    "Distance_from_customer_home": "8.7",
    "offers": 0,
    "alchol": false,
    "Restaurant_Opening_time": 15,
    "Restaurant_Closing_time": 3
  },
  {
    "image": "fifth",
    "name": "Nobu",
    "rating": 1,
    "food_type": "French",
    "Price_for_two": 2379,
    "location": "Saket",
    "Distance_from_customer_home": "6.1",
    "offers": 26,
    "alchol": false,
    "Restaurant_Opening_time": 2,
    "Restaurant_Closing_time": 14
  },
  {
    "image": "nine",
    "name": "Ruth's Chris Steak House",
    "rating": 4,
    "food_type": "American",
    "Price_for_two": 1817,
    "location": "Chandni Chowk",
    "Distance_from_customer_home": "3.2",
    "offers": 18,
    "alchol": false,
    "Restaurant_Opening_time": 9,
    "Restaurant_Closing_time": 21
  },
  {
    "image": "fifth",
    "name": "Shake Shack",
    "rating": 3,
    "food_type": "Thai",
    "Price_for_two": 2055,
    "location": "Rajouri Garden",
    "Distance_from_customer_home": "3.8",
    "offers": 19,
    "alchol": true,
    "Restaurant_Opening_time": 19,
    "Restaurant_Closing_time": 7
  },
  {
    "image": "second",
    "name": "Bonefish Grill",
    "rating": 3,
    "food_type": "Mexican",
    "Price_for_two": 1415,
    "location": "Karol Bagh",
    "Distance_from_customer_home": "4.8",
    "offers": 11,
    "alchol": true,
    "Restaurant_Opening_time": 15,
    "Restaurant_Closing_time": 3
  },
  {
    "image": "tenth",
    "name": "Applebee's",
    "rating": 4,
    "food_type": "American",
    "Price_for_two": 268,
    "location": "Dwarka",
    "Distance_from_customer_home": "8.1",
    "offers": 6,
    "alchol": false,
    "Restaurant_Opening_time": 21,
    "Restaurant_Closing_time": 9
  },
  {
    "image": "third",
    "name": "Outback Steakhouse",
    "rating": 1,
    "food_type": "Mediterranean",
    "Price_for_two": 1286,
    "location": "Vasant Kunj",
    "Distance_from_customer_home": "8.1",
    "offers": 26,
    "alchol": false,
    "Restaurant_Opening_time": 9,
    "Restaurant_Closing_time": 21
  },
  {
    "image": "fourth",
    "name": "Five Guys",
    "rating": 5,
    "food_type": "Italian",
    "Price_for_two": 992,
    "location": "Chandni Chowk",
    "Distance_from_customer_home": "3.3",
    "offers": 22,
    "alchol": false,
    "Restaurant_Opening_time": 15,
    "Restaurant_Closing_time": 3
  },
  {
    "image": "third",
    "name": "Bonefish Grill",
    "rating": 5,
    "food_type": "French",
    "Price_for_two": 1512,
    "location": "Hauz Khas",
    "Distance_from_customer_home": "9.6",
    "offers": 23,
    "alchol": true,
    "Restaurant_Opening_time": 23,
    "Restaurant_Closing_time": 11
  },
  {
    "image": "tenth",
    "name": "Five Guys",
    "rating": 1,
    "food_type": "Japanese",
    "Price_for_two": 363,
    "location": "Chandni Chowk",
    "Distance_from_customer_home": "1.1",
    "offers": 28,
    "alchol": false,
    "Restaurant_Opening_time": 1,
    "Restaurant_Closing_time": 13
  },
  {
    "image": "Eigth",
    "name": "Texas Roadhouse",
    "rating": 3,
    "food_type": "Korean",
    "Price_for_two": 2404,
    "location": "Paharganj",
    "Distance_from_customer_home": "9.1",
    "offers": 11,
    "alchol": false,
    "Restaurant_Opening_time": 15,
    "Restaurant_Closing_time": 3
  },
  {
    "image": "fourth",
    "name": "Ruth's Chris Steak House",
    "rating": 1,
    "food_type": "Italian",
    "Price_for_two": 2136,
    "location": "Karol Bagh",
    "Distance_from_customer_home": "6.5",
    "offers": 21,
    "alchol": true,
    "Restaurant_Opening_time": 11,
    "Restaurant_Closing_time": 23
  },
  {
    "image": "Eigth",
    "name": "Olive Garden",
    "rating": 2,
    "food_type": "Korean",
    "Price_for_two": 139,
    "location": "Rajouri Garden",
    "Distance_from_customer_home": "7.5",
    "offers": 10,
    "alchol": false,
    "Restaurant_Opening_time": 10,
    "Restaurant_Closing_time": 22
  },
  {
    "image": "First",
    "name": "The Capital Grille",
    "rating": 3,
    "food_type": "Italian",
    "Price_for_two": 1849,
    "location": "Hauz Khas",
    "Distance_from_customer_home": "1.0",
    "offers": 9,
    "alchol": false,
    "Restaurant_Opening_time": 4,
    "Restaurant_Closing_time": 16
  },
  {
    "image": "seventh",
    "name": "Buffalo Wild Wings",
    "rating": 5,
    "food_type": "French",
    "Price_for_two": 136,
    "location": "Hauz Khas",
    "Distance_from_customer_home": "7.0",
    "offers": 2,
    "alchol": false,
    "Restaurant_Opening_time": 22,
    "Restaurant_Closing_time": 10
  },
  {
    "image": "fourth",
    "name": "Applebee's",
    "rating": 3,
    "food_type": "Korean",
    "Price_for_two": 175,
    "location": "Rajouri Garden",
    "Distance_from_customer_home": "9.6",
    "offers": 7,
    "alchol": false,
    "Restaurant_Opening_time": 21,
    "Restaurant_Closing_time": 9
  },
  {
    "image": "seventh",
    "name": "Olive Garden",
    "rating": 1,
    "food_type": "Mexican",
    "Price_for_two": 906,
    "location": "Paharganj",
    "Distance_from_customer_home": "6.3",
    "offers": 4,
    "alchol": false,
    "Restaurant_Opening_time": 5,
    "Restaurant_Closing_time": 17
  },
  {
    "image": "nine",
    "name": "Ruth's Chris Steak House",
    "rating": 2,
    "food_type": "American",
    "Price_for_two": 883,
    "location": "Hauz Khas",
    "Distance_from_customer_home": "8.5",
    "offers": 14,
    "alchol": false,
    "Restaurant_Opening_time": 9,
    "Restaurant_Closing_time": 21
  },
  {
    "image": "tenth",
    "name": "Texas Roadhouse",
    "rating": 1,
    "food_type": "Italian",
    "Price_for_two": 810,
    "location": "Vasant Kunj",
    "Distance_from_customer_home": "9.8",
    "offers": 29,
    "alchol": false,
    "Restaurant_Opening_time": 14,
    "Restaurant_Closing_time": 2
  },
  {
    "image": "tenth",
    "name": "Panera Bread",
    "rating": 2,
    "food_type": "Chinese",
    "Price_for_two": 1589,
    "location": "Vasant Kunj",
    "Distance_from_customer_home": "9.1",
    "offers": 28,
    "alchol": true,
    "Restaurant_Opening_time": 4,
    "Restaurant_Closing_time": 16
  },
  {
    "image": "First",
    "name": "Olive Garden",
    "rating": 1,
    "food_type": "Chinese",
    "Price_for_two": 1602,
    "location": "Connaught Place",
    "Distance_from_customer_home": "7.5",
    "offers": 22,
    "alchol": false,
    "Restaurant_Opening_time": 13,
    "Restaurant_Closing_time": 1
  },
  {
    "image": "second",
    "name": "Texas Roadhouse",
    "rating": 2,
    "food_type": "Italian",
    "Price_for_two": 1430,
    "location": "Paharganj",
    "Distance_from_customer_home": "9.8",
    "offers": 26,
    "alchol": true,
    "Restaurant_Opening_time": 2,
    "Restaurant_Closing_time": 14
  },
  {
    "image": "seventh",
    "name": "Buffalo Wild Wings",
    "rating": 4,
    "food_type": "Italian",
    "Price_for_two": 1596,
    "location": "Lajpat Nagar",
    "Distance_from_customer_home": "8.0",
    "offers": 9,
    "alchol": true,
    "Restaurant_Opening_time": 12,
    "Restaurant_Closing_time": 0
  },
  {
    "image": "sixth",
    "name": "In-N-Out Burger",
    "rating": 1,
    "food_type": "Chinese",
    "Price_for_two": 534,
    "location": "Hauz Khas",
    "Distance_from_customer_home": "5.0",
    "offers": 24,
    "alchol": false,
    "Restaurant_Opening_time": 16,
    "Restaurant_Closing_time": 4
  },
  {
    "image": "sixth",
    "name": "Applebee's",
    "rating": 4,
    "food_type": "Korean",
    "Price_for_two": 218,
    "location": "Chandni Chowk",
    "Distance_from_customer_home": "3.4",
    "offers": 27,
    "alchol": true,
    "Restaurant_Opening_time": 5,
    "Restaurant_Closing_time": 17
  },
  {
    "image": "fourth",
    "name": "Cracker Barrel",
    "rating": 3,
    "food_type": "Chinese",
    "Price_for_two": 1292,
    "location": "Hauz Khas",
    "Distance_from_customer_home": "1.4",
    "offers": 23,
    "alchol": false,
    "Restaurant_Opening_time": 11,
    "Restaurant_Closing_time": 23
  },
  {
    "image": "tenth",
    "name": "TGI Fridays",
    "rating": 1,
    "food_type": "French",
    "Price_for_two": 815,
    "location": "Hauz Khas",
    "Distance_from_customer_home": "2.4",
    "offers": 27,
    "alchol": false,
    "Restaurant_Opening_time": 13,
    "Restaurant_Closing_time": 1
  },
  {
    "image": "seventh",
    "name": "Cracker Barrel",
    "rating": 3,
    "food_type": "American",
    "Price_for_two": 2326,
    "location": "Rajouri Garden",
    "Distance_from_customer_home": "2.4",
    "offers": 27,
    "alchol": true,
    "Restaurant_Opening_time": 17,
    "Restaurant_Closing_time": 5
  },
  {
    "image": "sixth",
    "name": "Five Guys",
    "rating": 3,
    "food_type": "American",
    "Price_for_two": 753,
    "location": "Saket",
    "Distance_from_customer_home": "4.0",
    "offers": 22,
    "alchol": false,
    "Restaurant_Opening_time": 6,
    "Restaurant_Closing_time": 18
  },
  {
    "image": "fifth",
    "name": "Ruth's Chris Steak House",
    "rating": 1,
    "food_type": "Japanese",
    "Price_for_two": 1300,
    "location": "Dwarka",
    "Distance_from_customer_home": "9.1",
    "offers": 18,
    "alchol": true,
    "Restaurant_Opening_time": 10,
    "Restaurant_Closing_time": 22
  },
  {
    "image": "nine",
    "name": "Bonefish Grill",
    "rating": 1,
    "food_type": "Thai",
    "Price_for_two": 512,
    "location": "Chandni Chowk",
    "Distance_from_customer_home": "4.8",
    "offers": 15,
    "alchol": true,
    "Restaurant_Opening_time": 0,
    "Restaurant_Closing_time": 12
  },
  {
    "image": "second",
    "name": "Cracker Barrel",
    "rating": 4,
    "food_type": "Thai",
    "Price_for_two": 1275,
    "location": "Lajpat Nagar",
    "Distance_from_customer_home": "6.1",
    "offers": 22,
    "alchol": false,
    "Restaurant_Opening_time": 19,
    "Restaurant_Closing_time": 7
  },
  {
    "image": "second",
    "name": "Texas Roadhouse",
    "rating": 4,
    "food_type": "Japanese",
    "Price_for_two": 2388,
    "location": "Dwarka",
    "Distance_from_customer_home": "2.7",
    "offers": 13,
    "alchol": false,
    "Restaurant_Opening_time": 4,
    "Restaurant_Closing_time": 16
  },
  {
    "image": "sixth",
    "name": "Olive Garden",
    "rating": 2,
    "food_type": "Thai",
    "Price_for_two": 1265,
    "location": "Chandni Chowk",
    "Distance_from_customer_home": "9.9",
    "offers": 20,
    "alchol": true,
    "Restaurant_Opening_time": 8,
    "Restaurant_Closing_time": 20
  },
  {
    "image": "tenth",
    "name": "Cracker Barrel",
    "rating": 4,
    "food_type": "Italian",
    "Price_for_two": 1577,
    "location": "Chandni Chowk",
    "Distance_from_customer_home": "3.9",
    "offers": 17,
    "alchol": false,
    "Restaurant_Opening_time": 4,
    "Restaurant_Closing_time": 16
  },
  {
    "image": "second",
    "name": "Five Guys",
    "rating": 1,
    "food_type": "Indian",
    "Price_for_two": 267,
    "location": "Saket",
    "Distance_from_customer_home": "1.9",
    "offers": 24,
    "alchol": true,
    "Restaurant_Opening_time": 9,
    "Restaurant_Closing_time": 21
  },
  {
    "image": "third",
    "name": "Red Lobster",
    "rating": 2,
    "food_type": "Korean",
    "Price_for_two": 2030,
    "location": "Saket",
    "Distance_from_customer_home": "2.3",
    "offers": 22,
    "alchol": false,
    "Restaurant_Opening_time": 3,
    "Restaurant_Closing_time": 15
  },
  {
    "image": "First",
    "name": "Olive Garden",
    "rating": 1,
    "food_type": "American",
    "Price_for_two": 2291,
    "location": "Chandni Chowk",
    "Distance_from_customer_home": "10.5",
    "offers": 13,
    "alchol": false,
    "Restaurant_Opening_time": 2,
    "Restaurant_Closing_time": 14
  },
  {
    "image": "fourth",
    "name": "Texas Roadhouse",
    "rating": 4,
    "food_type": "French",
    "Price_for_two": 396,
    "location": "Chandni Chowk",
    "Distance_from_customer_home": "7.3",
    "offers": 14,
    "alchol": false,
    "Restaurant_Opening_time": 1,
    "Restaurant_Closing_time": 13
  },
  {
    "image": "third",
    "name": "Applebee's",
    "rating": 1,
    "food_type": "Korean",
    "Price_for_two": 1253,
    "location": "Vasant Kunj",
    "Distance_from_customer_home": "3.7",
    "offers": 19,
    "alchol": true,
    "Restaurant_Opening_time": 9,
    "Restaurant_Closing_time": 21
  },
  {
    "image": "second",
    "name": "Five Guys",
    "rating": 4,
    "food_type": "French",
    "Price_for_two": 1021,
    "location": "Chandni Chowk",
    "Distance_from_customer_home": "9.1",
    "offers": 17,
    "alchol": false,
    "Restaurant_Opening_time": 21,
    "Restaurant_Closing_time": 9
  },
  {
    "image": "nine",
    "name": "Buffalo Wild Wings",
    "rating": 1,
    "food_type": "American",
    "Price_for_two": 585,
    "location": "Rajouri Garden",
    "Distance_from_customer_home": "5.7",
    "offers": 26,
    "alchol": false,
    "Restaurant_Opening_time": 20,
    "Restaurant_Closing_time": 8
  },
  {
    "image": "Eigth",
    "name": "P.F. Chang's",
    "rating": 3,
    "food_type": "French",
    "Price_for_two": 381,
    "location": "Rajouri Garden",
    "Distance_from_customer_home": "5.9",
    "offers": 6,
    "alchol": false,
    "Restaurant_Opening_time": 23,
    "Restaurant_Closing_time": 11
  },
  {
    "image": "fifth",
    "name": "TGI Fridays",
    "rating": 2,
    "food_type": "French",
    "Price_for_two": 127,
    "location": "Hauz Khas",
    "Distance_from_customer_home": "3.0",
    "offers": 11,
    "alchol": false,
    "Restaurant_Opening_time": 20,
    "Restaurant_Closing_time": 8
  },
  {
    "image": "third",
    "name": "Olive Garden",
    "rating": 2,
    "food_type": "French",
    "Price_for_two": 644,
    "location": "Rajouri Garden",
    "Distance_from_customer_home": "4.1",
    "offers": 22,
    "alchol": false,
    "Restaurant_Opening_time": 9,
    "Restaurant_Closing_time": 21
  },
  {
    "image": "nine",
    "name": "The Capital Grille",
    "rating": 3,
    "food_type": "American",
    "Price_for_two": 333,
    "location": "Dwarka",
    "Distance_from_customer_home": "10.7",
    "offers": 12,
    "alchol": false,
    "Restaurant_Opening_time": 21,
    "Restaurant_Closing_time": 9
  },
  {
    "image": "fourth",
    "name": "Red Lobster",
    "rating": 1,
    "food_type": "Chinese",
    "Price_for_two": 2395,
    "location": "Chandni Chowk",
    "Distance_from_customer_home": "8.7",
    "offers": 4,
    "alchol": false,
    "Restaurant_Opening_time": 18,
    "Restaurant_Closing_time": 6
  },
  {
    "image": "Eigth",
    "name": "The Capital Grille",
    "rating": 3,
    "food_type": "French",
    "Price_for_two": 1066,
    "location": "Lajpat Nagar",
    "Distance_from_customer_home": "4.0",
    "offers": 4,
    "alchol": false,
    "Restaurant_Opening_time": 16,
    "Restaurant_Closing_time": 4
  },
  {
    "image": "fifth",
    "name": "Cracker Barrel",
    "rating": 3,
    "food_type": "Thai",
    "Price_for_two": 2200,
    "location": "Paharganj",
    "Distance_from_customer_home": "1.5",
    "offers": 1,
    "alchol": false,
    "Restaurant_Opening_time": 16,
    "Restaurant_Closing_time": 4
  },
  {
    "image": "First",
    "name": "Applebee's",
    "rating": 3,
    "food_type": "Italian",
    "Price_for_two": 481,
    "location": "Vasant Kunj",
    "Distance_from_customer_home": "8.0",
    "offers": 26,
    "alchol": false,
    "Restaurant_Opening_time": 6,
    "Restaurant_Closing_time": 18
  },
  {
    "image": "fourth",
    "name": "In-N-Out Burger",
    "rating": 2,
    "food_type": "Mediterranean",
    "Price_for_two": 260,
    "location": "Vasant Kunj",
    "Distance_from_customer_home": "4.5",
    "offers": 28,
    "alchol": true,
    "Restaurant_Opening_time": 1,
    "Restaurant_Closing_time": 13
  },
  {
    "image": "Eigth",
    "name": "Shake Shack",
    "rating": 4,
    "food_type": "Mexican",
    "Price_for_two": 1440,
    "location": "Hauz Khas",
    "Distance_from_customer_home": "6.8",
    "offers": 4,
    "alchol": true,
    "Restaurant_Opening_time": 1,
    "Restaurant_Closing_time": 13
  },
  {
    "image": "tenth",
    "name": "Chili's",
    "rating": 3,
    "food_type": "Chinese",
    "Price_for_two": 1658,
    "location": "Dwarka",
    "Distance_from_customer_home": "6.0",
    "offers": 21,
    "alchol": false,
    "Restaurant_Opening_time": 1,
    "Restaurant_Closing_time": 13
  },
  {
    "image": "seventh",
    "name": "Shake Shack",
    "rating": 5,
    "food_type": "Mexican",
    "Price_for_two": 2007,
    "location": "Lajpat Nagar",
    "Distance_from_customer_home": "11.0",
    "offers": 21,
    "alchol": true,
    "Restaurant_Opening_time": 2,
    "Restaurant_Closing_time": 14
  },
  {
    "image": "nine",
    "name": "Olive Garden",
    "rating": 2,
    "food_type": "Chinese",
    "Price_for_two": 617,
    "location": "Karol Bagh",
    "Distance_from_customer_home": "9.6",
    "offers": 23,
    "alchol": false,
    "Restaurant_Opening_time": 8,
    "Restaurant_Closing_time": 20
  },
  {
    "image": "Eigth",
    "name": "Ruth's Chris Steak House",
    "rating": 1,
    "food_type": "Japanese",
    "Price_for_two": 1185,
    "location": "Karol Bagh",
    "Distance_from_customer_home": "1.6",
    "offers": 0,
    "alchol": true,
    "Restaurant_Opening_time": 6,
    "Restaurant_Closing_time": 18
  },
  {
    "image": "seventh",
    "name": "Cracker Barrel",
    "rating": 3,
    "food_type": "French",
    "Price_for_two": 2083,
    "location": "Karol Bagh",
    "Distance_from_customer_home": "5.2",
    "offers": 16,
    "alchol": false,
    "Restaurant_Opening_time": 18,
    "Restaurant_Closing_time": 6
  }
]


function getrestaurent(restaurents){

   const root=document.getElementById('root');

    restaurents.forEach(restaurent=>{

        // create a card
        // 1: image
        // 2: Card content
        //    i: card_header( Name and rating)
        //    ii:card_footer(food_type and price)
        //    iii: card_location(restaurent location ,distance)


    // Create a card
    const card=document.createElement('div');
    card.classList.add('card');

    // create image
    const image=document.createElement('img');
    image.src=`images/${restaurent.image}.jpg`;

    // card-content
    const Card_content=document.createElement('div');
    Card_content.classList.add('card-content');

    // card-header
    const Card_header=document.createElement('div');
    Card_header.classList.add('card-header');

    const h3=document.createElement('h3');
    h3.textContent=restaurent.name;

    const rate=document.createElement('span');
    rate.textContent="Rating: " + restaurent.rating;
    rate.classList.add('rating');

    Card_header.appendChild(h3);
    Card_header.appendChild(rate);


    // card-footer
    const Card_footer=document.createElement('div');
    Card_footer.classList.add('card-footer');

    const food=document.createElement('span');
    food.textContent=restaurent.food_type;

    const price=document.createElement('span');
    price.textContent="₹ "+restaurent.Price_for_two;

    Card_footer.appendChild(food);
    Card_footer.appendChild(price);


    // card-location
    const Card_location=document.createElement('div');
    Card_location.classList.add('card-location');

    const location=document.createElement('span');
    location.textContent=restaurent.location;

    const distance=document.createElement('span');
    distance.textContent=restaurent.Distance_from_customer_home+"km";

    Card_location.appendChild(location);
    Card_location.appendChild(distance);

    Card_content.appendChild(Card_header);
    Card_content.appendChild(Card_footer);
    Card_content.appendChild(Card_location);

    card.appendChild(image);
    card.appendChild(Card_content);

    root.appendChild(card);


    })
}



getrestaurent(restaurents);

document.getElementById('Alcohol').addEventListener('click',()=>{

 const result=  restaurents.filter((obj)=>obj.alchol);
//  document.getElementById('root').innerHTML="";
document.getElementById('root').replaceChildren();
 getrestaurent(result);
})



document.getElementById('Open').addEventListener('click',()=>{

   const result= restaurents.filter((obj)=>obj.Restaurant_Opening_time>8);
   document.getElementById('root').replaceChildren();
   getrestaurent(result);
})


document.getElementById('Offers').addEventListener('click',()=>{
   const result=restaurents.filter((obj)=>obj.offers>25);
   document.getElementById('root').replaceChildren();
   getrestaurent(result);
})


document.getElementById('Rating').addEventListener('click',()=>{

 const result=  restaurents.filter((obj)=>obj.rating>4.5);
//  document.getElementById('root').innerHTML="";
document.getElementById('root').replaceChildren();
 getrestaurent(result);

})


document.getElementById('Filters').addEventListener('click',()=>{

  document.getElementById('filterPopup').classList.remove("hidden");

})

document.getElementById('applyFilter').addEventListener('click',()=>{

  const element=  document.querySelector('input[name="filterOption"]:checked');
   const answer=  element.value;

   if(answer==="rating")
   {
    restaurents.sort((a,b)=>b.rating-a.rating);
   }

   else if(answer==="highlow"){
    restaurents.sort((a,b)=>b.Price_for_two-a.Price_for_two)
   }

   else if(answer==="costLowHigh"){
    restaurents.sort((a,b)=>a.Price_for_two-b.Price_for_two)
   }

   else if(answer==='distance'){
    restaurents.sort((a,b)=>a.Distance_from_customer_home-b.Distance_from_customer_home);
   }

   document.getElementById('root').replaceChildren();
   document.getElementById('filterPopup').classList.add("hidden");
   getrestaurent(restaurents);

})


document.getElementById('closefilter').addEventListener('click',()=>{
  document.getElementById('filterPopup').classList.add("hidden");
})