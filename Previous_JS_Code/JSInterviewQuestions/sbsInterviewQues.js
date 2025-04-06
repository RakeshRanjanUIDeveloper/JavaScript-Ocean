const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); // ["Orange", "Lemon"]
const citrus2 = fruits.slice(1, 1); // []
console.log(fruits); // ["Banana", "Orange", "Lemon", "Apple", "Mango"]
console.log(citrus); // ["Orange", "Lemon"]
console.log(citrus2); // []
const newFruits = fruits.splice(1, 3, "Grapes", "Cherry"); // ["Orange", "Lemon", "Apple"]
console.log(fruits); // ["Banana", "Grapes", "Cherry", "Mango"]
console.log(newFruits); // ["Orange", "Lemon", "Apple"]


//Quest2
function a() {
    alert("A!");
   
    function b() {
      alert("B!");
    }
   
    return b();
  }
   
  var s = a();
  alert("break");
  s();
//output ->An alert with the message "A!".
//An alert with the message "B!".
//An alert with the message "break".
//A TypeError because undefined is not a function.  

//ques3
const fetchNamesWithThen = () => {
	console. log("Then: Start")
 
	fetch(nameUrl)
		.then(resp =>resp.json())
		.then(data => data.forEach(name =>{
			console.log("Then: inside the last .then")
			const li = document.createElement ("li")
			li.textContent = name.name;
			container.appendChild(li)
			}));
	console. log("Then: End of function")
}
 
 
console.log("Before fetch call")
fetchNamesWithThen()
console.log("After fetch call")
//"Before fetch call" is printed to the console.
//"Then: Start" is printed to the console.
//"Then: End of function" is printed to the console.
//"After fetch call" is printed to the console.
//After the data is fetched and parsed, for each name in the data,
// "Then: inside the last .then" is printed to the console.
// This happens asynchronously, after the initial synchronous log messages.

//Ques4

const fetchNamesWithAwait = async () => {
	console.log("Async: Start");
	let response = await fetch(nameUrl);
	console.log("Async: after first await...");
	let data = await response.json();
	console.log("Async: after second await...");
 
	data.forEach(name =>{
		console.log("Async: after second await and inside forEach...")
		const li = document.createElement ("li")
		li.textContent = name.name;
		container.appendChild(li)
		});
	console. log("Async... End of function");
}
 
 

console.log("Before fetch call")
fetchNamesWithAwait()
console.log("After fetch call")

//Before fetch call
//Async: Start
//After fetch call
//Async: after first await...
//Async: after second await...
//Async: after second await and inside forEach...
//Async: after second await and inside forEach...
//...
//Async... End of function
