const str=prompt('Enter your name');
const nametoarray=str.split("");
const reverseName=nametoarray.reverse();
const joinName=reverseName.join("");
console.log(joinName);