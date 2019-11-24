const p = document.querySelector("p");
console.log(p.textContent);

const ul = document.querySelector("ul");
console.log(ul.textContent);

p.textContent = "Corgi mixes are really really super adorable";
console.log(p.textContent);

const secondP = document.querySelector("#second");
console.log(secondP.innerHTML);

console.log(ul.innerHTML);

const h1 = document.querySelector("h1");
h1.textContent = "END OF THIS LESSON";