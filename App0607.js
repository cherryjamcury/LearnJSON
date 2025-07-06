/**
 *  JSON Operations Practiced:
 * 1. Reading a JSON file using fs.readFileSync()
 * 2. Parsing JSON into a JavaScript object
 * 3. Traversing a nested JSON structure
 * 4. Finding entries by key or value
 * 5. Modifying existing entries
 * 6. Adding new entries or nested objects
 * 7. Saving changes back into the JSON file
 */

const fs = require('fs');
const path = require('path');

// Load JSON File
function loadJSON(filename) {
  const data = fs.readFileSync(path.resolve(__dirname, filename), 'utf8');
  return JSON.parse(data);
}

// Load & Structure
const jsonObj = loadJSON('data0607.json');
const jsonStuff = jsonObj["stuff"];
const jsonKitchen = jsonStuff["kitchen"];
const jsonEmployees = jsonObj["employees"];

// Normalize String for Comparison
function toStandardForm(str) {
  return typeof str === 'string' ? str.trim().toUpperCase() : '';
}

// Show Top-Level Structure
function showTopLevelStructure(json) {
  if (!json || typeof json !== 'object') {
    console.log("Invalid or empty input.");
    return;
  }

  console.log("📂 JSON Top-Level Keys:");
  for (const [key, value] of Object.entries(json)) {
    if (Array.isArray(value)) {
      console.log(`- ${key}: [Array of length ${value.length}]`);
    } else if (typeof value === 'object' && value !== null) {
      console.log(`- ${key}: Object`);
    } else {
      console.log(`- ${key}: ${value}`);
    }
  }
}

// Stack-Based JSON Traversal
function traverseJSON(json, employees = {}) {
  const stack = [{ key: null, value: json }];

  while (stack.length > 0) {
    const { key, value } = stack.pop();

    if (key !== null && Array.isArray(value)) {
      value.forEach(id => {
        if (employees[id]) {
          console.log(`✅ Found employee (${id}):`, employees[id]);
        } else {
          console.log(`❓ Unknown ID: ${id}`);
        }
      });
    }

    if (typeof value === 'object' && value !== null) {
      Object.keys(value).reverse().forEach(subKey => {
        stack.push({ key: subKey, value: value[subKey] });
      });
    }
  }
}

// Get Host Info From Hall
function getHostInfoFromHall(json) {
  const hosts = json.stuff?.hall?.Hosts || [];
  const employeeDetails = hosts.map(id => json.employees[id]);
  console.log("🧍 Hosts:", employeeDetails);
}

// Validate ID Format
function isValidID(id) {
  const regex = /^#\S+$/; // Starts with '#' and contains no spaces
  return regex.test(id);
}

// Find Employee by ID
function findById(jsonObj, id) {
  if (!isValidID(id)) {
    console.warn(`Invalid ID format: ${id}`);
    return null;
  }

  if (jsonObj && typeof jsonObj === 'object' && id in jsonObj) {
    return jsonObj[id];
  }

  console.warn(` No employee found with ID: ${id}`);
  return null;
}

//Find Employee by Name
function findByName(jsonObj, name) {
  const searchName = toStandardForm(name);

  if (searchName.length === 0) {
    console.warn(`Invalid name input: "${name}"`);
    return null;
  }

  const found = Object.entries(jsonObj).find(([id, person]) =>
    toStandardForm(person.name) === searchName
  );

  if (found) {
    const [id, person] = found;
    return { id, ...person };
  }

  console.warn(`No employee found with name: ${name}`);
  return null;
}

// 🔹 Extract Values by Key (e.g., list of names or salaries)
function extractField(jsonObj, field) {
  if (!jsonObj || typeof jsonObj !== 'object') {
    console.warn("Invalid JSON input");
    return [];
  }

  const keyToFind = toStandardForm(field);

  return Object.entries(jsonObj).map(([id, person]) => {
    for (const key in person) {
      if (toStandardForm(key) === keyToFind) {
        return person[key];
      }
    }
    return null;
  });
}


// -------------------
// Test Function Calls (uncomment to use)
// -------------------

// showTopLevelStructure(jsonStuff.kitchen);
// getHostInfoFromHall(jsonObj);
// traverseJSON(jsonKitchen, jsonEmployees);
// console.log(findByName(jsonEmployees, 'Luna'));
// console.log(findById(jsonEmployees, '#10020'));
// console.log(extractField(jsonEmployees, 'salary'));

