
const data = 
    `[
        {
          "category": "Reaction",
          "score": 80,
          "icon": "./assets/images/icon-reaction.svg"
        },
        {
          "category": "Memory",
          "score": 92,
          "icon": "./assets/images/icon-memory.svg"
        },
        {
          "category": "Verbal",
          "score": 61,
          "icon": "./assets/images/icon-verbal.svg"
        },
        {
          "category": "Visual",
          "score": 72,
          "icon": "./assets/images/icon-visual.svg"
        }
      ]`;

const myJsObject = JSON.parse(data);
console.log(myJsObject);

let Reaction1 = document.querySelector(".svg-one");
let Reaction2 = document.querySelector("#reaction .category-one");
let Reaction3 = document.querySelector("#reaction .black");

Reaction1.setAttribute("src",  myJsObject[0]["icon"]);
Reaction2.innerHTML = myJsObject[0]["category"];
Reaction3.textContent = myJsObject[0]["score"];

let Memory1 = document.querySelector(".svg-two");
let Memory2 = document.querySelector("#memory .category-two");
let Memory3 = document.querySelector("#memory .black");

Memory1.setAttribute("src",  myJsObject[1]["icon"]);
Memory2.innerHTML = myJsObject[1]["category"];
Memory3.textContent = myJsObject[1]["score"];

let Verbal1 = document.querySelector(".svg-three");
let Verbal2 = document.querySelector("#verbal .category-three");
let Verbal3 = document.querySelector("#verbal .black");

Verbal1.setAttribute("src",  myJsObject[2]["icon"]);
Verbal2.innerHTML = myJsObject[2]["category"];
Verbal3.textContent = myJsObject[2]["score"];

let Visual1 = document.querySelector(".svg-four");
let Visual2 = document.querySelector("#visual .category-four");
let Visual3 = document.querySelector("#visual .black");

Visual1.setAttribute("src",  myJsObject[3]["icon"]);
Visual2.innerHTML = myJsObject[3]["category"];
Visual3.textContent = myJsObject[3]["score"];
