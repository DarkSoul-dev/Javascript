var countries = ["India","USA","Japan" ];

var states = new Array("Rajastan","Delhi","Punjab","Mumbai","Assam")

console.log(states[1]);

console.log(states.length);
states[2]="Amritsar";
console.log(states);

var user = ["darkSoul","lovekush098@privatemail.com",3,54,true];

console.log(user);

user.pop();
console.log(user);

user.shift();
console.log(user);

user.unshift("New value");
console.log(user);

console.log(user.indexOf('darkSoul'));
console.log("darksoul");

console.log(Array.from("darkSoul"));