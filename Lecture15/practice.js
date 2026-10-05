const arr=[2,4,8,1,3,5,10];

const result0=arr.forEach((num)=>console.log(num));
const result1=arr.forEach((num,index)=>console.log(num,index));
const result2=arr.forEach((num,index,a)=>{
    a[index]=num*4;
})
console.log(result2);



 let arr1=[10,22,33,41,50];

 const ans1=arr1.filter((num)=>num%2==0);
 console.log(ans1);
 


 const students1 = [
    { name: "rohan", age: 22, marks: 70 },
    { name: "Mohan", age: 24, marks: 80 },
    { name: "Darshan", age: 28, marks: 30 },
    { name: "Mohit", age: 32, marks: 40 },
    { name: "Shadik", age: 12, marks: 90 },
];

const an1=students1.filter((obj)=>obj.age>25);
console.log(an1);

const an2=students1.filter((obj)=>obj.marks>50);
console.log(an2);


const arr2=[5,6,7,8,9];

const res=arr2.filter((num)=>num%2==0).map((num)=>num*2);

const res1=arr2.filter((num)=>num>6).map((num)=>num*2).map((num)=>num*2);
console.log(res1);



// *****************************************************************


const products = [
    {name: 'Laptop', price: 50000},
    {name: 'Mobile', price: 15000},
    {name: 'Tablet', price: 25000}
];

// প্রতিটি product দেখানো

products.forEach((product)=>console.log(`${product.name}: ${product.price}৳`));





const users = [
    {id: 1, name: 'Alice', age: 25},
    {id: 2, name: 'Bob', age: 30},
    {id: 3, name: 'Charlie', age: 35}
];

// শুধু নামের array তৈরি
const userNames = users.map(user => user.name);
console.log(userNames); // ['Alice', 'Bob', 'Charlie']

// নতুন format-এ data transform করা
const userProfiles = users.map(user => ({
    userId: user.id,
    fullName: user.name.toUpperCase(),
    birthYear: 2024 - user.age
}));
console.log(userProfiles);



const students = [
    {name: 'Rahim', score: 85, passed: true},
    {name: 'Karim', score: 45, passed: false},
    {name: 'Jamal', score: 92, passed: true},
    {name: 'Babul', score: 33, passed: false},
    {name: 'Kabul', score: 78, passed: true}
];

// ১. যারা পাস করেছে
const passedStudents = students.filter(student => student.passed);
console.log(passedStudents);
// Output: Rahim, Jamal, Kabul

// ২. যাদের score ৮০-এর বেশি
const highScorers = students.filter(student => student.score > 80);
console.log(highScorers);
// Output: Rahim, Jamal

// ৩. নাম যেখানে 'a' আছে
const studentsWithA = students.filter(student => 
    student.name.toLowerCase().includes('a')
);
console.log(studentsWithA);
// Output: সবাই (সব names-এ 'a' আছে)



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.filter(num => num % 2 === 0).map(num => num * 3).filter(num => num > 15);          

console.log(result); 




const employees = [
    {id: 1, name: 'Alice', department: 'IT', salary: 60000, experience: 3},
    {id: 2, name: 'Bob', department: 'HR', salary: 45000, experience: 5},
    {id: 3, name: 'Charlie', department: 'IT', salary: 75000, experience: 8},
    {id: 4, name: 'David', department: 'Sales', salary: 55000, experience: 2},
    {id: 5, name: 'Eve', department: 'IT', salary: 80000, experience: 10}
];

// ১. প্রথমে forEach দিয়ে সব দেখানো
console.log("All Employees:");
employees.forEach(emp => {
    console.log(`${emp.name} - ${emp.department} - ${emp.salary}৳`);
});

// ২. শুধু IT department-এর employees
const itEmployees = employees.filter(emp => emp.department === 'IT');
console.log("\nIT Department Employees:");
console.log(itEmployees);

// ৩. IT employees-দের salary ১০% বড়িয়ে নতুন array
const updatedSalaries = itEmployees.map(emp => ({
    ...emp,
    salary: emp.salary * 1.10, // ১০% increase
    bonus: emp.experience > 5 ? 10000 : 5000
}));

console.log("\nUpdated IT Salaries with Bonus:");
updatedSalaries.forEach(emp => {
    console.log(`${emp.name}: ${emp.salary.toFixed(2)}৳ + Bonus: ${emp.bonus}৳`);
});

// ৪. ৫ বছরের বেশি experience যাদের
const experiencedIT = updatedSalaries.filter(emp => emp.experience > 5);
console.log("\nExperienced IT Employees (>5 years):");
console.log(experiencedIT);