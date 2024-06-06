
///Ex.1
// function MiddleCharacter(word) {
//     if (!word || word.trim() === "") {
//       return "Invalid value";
//     }
  
//     const middle = Math.floor(word.length / 2);
  
//     if (length % 2 !== 0) {
//       return word[middle];
//     } 
//     else {
//       return word[middle - 1] + word[middle];
//     }
//   }
  
//   const userInput = prompt("Enter word,please");
  
//   if (userInput === null) {
//     alert("Canceled");
//   } else {
//     const result = MiddleCharacter(userInput);
//     alert(result);
//   }


// The end of Ex.1



  ///Ex.2
//   function getUniqueSkills(users) {
//     return users.reduce((uniqueSkills, user) => {
//       user.skills.forEach(skill => {
//         if (!uniqueSkills.includes(skill)) {
//           uniqueSkills.push(skill);
//         }
//       });
//       return uniqueSkills;
//     }, []);
//   }
  
   
//   function getTotalBalanceOfCertainUsers(users) {
//     return users
//       .filter(user => user.friends.length === 2 && user.age < 30)
//       .reduce((Balance, user) => Balance + user.balance, 0);
//   }
//   const users = [
//     {
//       id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       id: "249b6175-5c30-44c6-b154-f120923736f5",
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     }

//   ];
//   console.log(getUniqueSkills(users));
//   console.log(getTotalBalanceOfCertainUsers(users));




// The end of Ex.2





//Ex. 3

//Differences between spread and rest operators, examples of their use

//Spread

//The spread operator expands elements from, for example, an array or string into individual elements
//const numbers = [1, 2, 3];
//const copy = [...numbers]; // copy = [1, 2, 3] (новий масив)
//

//Rest
//The rest operator, on the other hand, collects the remaining elements into one array
//
// function sum(...numbers) {
//     let total = 0;
//     for (const num of numbers) {
//       total += num;
//     }
//     return total;
//   }
  
//   const result1 = sum(1, 2, 3); // result1 = 6
// 




//// The end of Ex.3


//Ex. 4

document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('#userList li');

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            const name = item.textContent;
            alert(`Hello, ${name}`);
        });
    });
});

//// The end of Ex.4