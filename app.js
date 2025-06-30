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


function callJSON(){
const fs = require('fs');
const data = fs.readFileSync('data.json', 'utf8');
const obj = JSON.parse(data);
return obj
}

function traverseJSON(json){
    if(json&&typeof json === 'object'){
        const stack = [{key: null, value: json}]

        while(0< stack.length){

            const {key, value} = stack.pop()
            if(key !== null){
                 if (value === null)
                    console.log(`${key}: null`)

                if(typeof value === 'object')
                    console.log(`${key}: {object}`)
                else 
                console.log(`${key}: ${value}`)
            }
           
            if(typeof value === 'object' && value !== null){
                for(subKey of Object.keys(value).reverse()){
                    stack.push({
                        key: subKey,
                        value: value[subKey]
                    })
                }
            }
        }
    }

    else 
    console.log("Error")
}


function find(targetKey, json) {
    if (json && typeof json === 'object') {
        const stack = [{ key: null, value: json }];

        while (stack.length > 0) {
            const { key, value } = stack.pop();

            if (key === targetKey) {
                return { key, value };
            }

            if (typeof value === 'object' && value !== null) {
                for (const subKey of Object.keys(value).reverse()) {
                    stack.push({
                        key: subKey,
                        value: value[subKey]
                    });
                }
            }
        }
    }

    return null;
}

const dataJson= callJSON()

const getObjects = []
for (const section of dataJson) {
  getObjects.push(Object.keys(section))
}

console.log(getObjects)


