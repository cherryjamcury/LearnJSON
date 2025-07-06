/*
In this work i practiced with some basic operations on JSON 
1: Connecting to JSON file through readFileSync()
2 How to traverse through JSON FILE 
3 how to Find specific entry based on key value 
4 How to modify existing etries inside JSOn 
5 Hw to add nwe Entry 
6 How to add nw objet 
7 How to save chages intor JSOn File 
*/


// function callJSON(){
// const fs = require('fs');
// const data = fs.readFileSync('data.json', 'utf8');
// const obj = JSON.parse(data);
// return obj
// }



// const fs = require('fs')
// const data = fs.readFileSync('myData.json', 'utf8')
// const jsonObj = JSON.parse(data)
// //Manual Approach 
// const hosts = jsonObj["stuff"]["hall"]["Hosts"];
// console.log(hosts)
// const hostInfo = jsonObj["employees"][hosts]
// console.log(hostInfo)


// const jsonStuff = jsonObj["stuff"]
// const jsonEmployees = jsonObj["employees"]
// //Scenarion; Im given a json database and entries which aareneednd. In this situatia n it is no such diiuclt to find data correspond required 
// function traverseJSON(jsonObj){

// const stack = []
// stack.push({
//     key: null, 
//     value: jsonObj
// })


//  while(0 < stack.length){

//     const {key, value} = stack.pop()
//     if(key !== null){
//         if(Array.isArray(value))
//            {


//             if(value.length !== 0) 

//             for(let i = 0; i < value.length; i++){
//                 console.log(jsonEmployees[value[i]])
//             }
//            }

//     }

//     if(typeof value === "object" && value !== null){
      
//         for(subKey of  Object.keys(value).reverse()){
//            stack.push({

//             key: subKey,
//             value: value[subKey]
//            })
//         }


//     }

// }

// }


// traverseJSON(jsonStuff)


// Figurign oout what are indide JSOn 

console.log(Object.entries(jsonObj))










// console.log(obj[0]['stuff']['kitchen']["employee"]["name"])
// console.log(obj[0]['stuff']['kitchen']["employee"]["position"])
// console.log(obj[0]['stuff']['kitchen']["employee"]["worktime"])








// const stack = [{key: null, value : obj}]

//         while(0< stack.length){

//             const {key, value} = stack.pop()
//             if(key !== null){
//                  if (value === null)
//                     console.log(`${key}: null`)

//                 if(typeof value === 'object')
//                     console.log(`${key}: {object}`)
//                 else 
//                 console.log(`${key}: ${value}`)
//             }
           
//             if(typeof value === 'object' && value !== null){
//                 for(subKey of Object.keys(value).reverse()){
//                     stack.push({
//                         key: subKey,
//                         value: value[subKey]
//                     })
//                 }
//             }
//         }


// function findLucky(arr) {
//     const freq = {};


//     for (let num of arr) {
//         freq[num] = (freq[num] || 0) + 1;
//     }

//     let lucky = -1;

//     console.log(freq)

//     for (let num in freq) {
//         const number = parseInt(num);
//         console.log(number)
//         if (number === freq[num]) {
//             lucky = Math.max(lucky, number);
//         }
//     }

//     return lucky;
// }
















// function traverseJSON(json){
//     if(json&&typeof json === 'object'){
//         const stack = [{key: null, value: json}]

//         while(0< stack.length){

//             const {key, value} = stack.pop()
//             if(key !== null){
//                  if (value === null)
//                     console.log(`${key}: null`)

//                 if(typeof value === 'object')
//                     console.log(`${key}: {object}`)
//                 else 
//                 console.log(`${key}: ${value}`)
//             }
           
//             if(typeof value === 'object' && value !== null){
//                 for(subKey of Object.keys(value).reverse()){
//                     stack.push({
//                         key: subKey,
//                         value: value[subKey]
//                     })
//                 }
//             }
//         }
//     }

//     else 
//     console.log("Error")
// }


// function find(targetKey, json) {
//     if (json && typeof json === 'object') {
//         const stack = [{ key: null, value: json }];

//         while (stack.length > 0) {
//             const { key, value } = stack.pop();

//             if (key === targetKey) {
//                 return { key, value };
//             }

//             if (typeof value === 'object' && value !== null) {
//                 for (const subKey of Object.keys(value).reverse()) {
//                     stack.push({
//                         key: subKey,
//                         value: value[subKey]
//                     });
//                 }
//             }
//         }
//     }

//     return null;
// }

// const dataJson= callJSON()

// const getObjects = dataJson.map(section => Object.keys(section)[0]);
// const users = dataJson[0][getObjects[0]];
// const occupations = dataJson[1][getObjects[1]];
// const educations = dataJson[2][getObjects[2]];
// const hobbies = dataJson[3][getObjects[3]];
// const skills = dataJson[4][getObjects[4]];

// for (const user of users) {
//   console.log("\n🔹 User:", user.name.first, user.name.last);

//   // Occupation
//   const occupation = occupations.find(o => o.id === user.occupationId);
//   console.log("Occupation:", occupation?.title);

//   // Education
//   console.log("Education:");
//   for (const eduId of user.educationIds) {
//     const edu = educations.find(e => e.id === eduId);
//     console.log(` - ${edu.institution}, ${edu.degree}`);
//   }

//   // Hobbies
//   console.log("Hobbies:");
//   for (const hobbyId of user.hobbyIds) {
//     const hobby = hobbies.find(h => h.id === hobbyId);
//     console.log(` - ${hobby.name} (${hobby.type})`);
//   }

//   // Skills
//   console.log("Skills:");
//   for (const skillId of user.skillIds) {
//     const skill = skills.find(s => s.id === skillId);
//     console.log(` - ${skill.name} (${skill.level})`);
//   }
// }
