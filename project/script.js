const resDiv = document.querySelector(".paragraph");
const diceBtn = document.querySelector(".ball");
const id_tag = document.querySelector(".advice");
const id_time = document.getElementById("time");
const names = document.querySelector(".names");
setInterval(() => {  //Set the time to change every second
  const time = new Date();
  id_time.innerHTML = time.toLocaleTimeString(); //shows time on the page
}, 1000);

diceBtn.addEventListener("click", getAdvice); //click the dice button to execute API

function getAdvice() {   //Created a function for the API
  fetch("https://api.adviceslip.com/advice", { cache: "no-store" }) // Gets the url to generate random advice
    .then((response) => response.json())
    .then((jsonData) => {
      id_tag.innerText = "ADVICE" + " #" + jsonData["slip"]["id"];
      resDiv.innerText = '"' + jsonData["slip"]["advice"] + '"';
    });
}
const myArray = []; //Created an empty array
const x = "Nicholas"; //Two new variables
const y = "Joa";
myArray.push(x, y); //Pushes(adds) "Nicholas" and "Joa" into array


//let div= document.createElement("div"); // Creates a new <div> element
div.className = "names"; // 
document.body.append(div);
div.append(x,y); // Appends(adds) "Nicholas" and "Joa" to the element
let h1= document.createElement("h1"); // Creates a new <h1> element
h1.innerText= x; 
div.append(h1);