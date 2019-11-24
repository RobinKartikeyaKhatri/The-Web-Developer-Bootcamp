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

const img = document.querySelector("img");
console.log(img.getAttribute("src"));
img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Variegated_golden_frog_%28Mantella_baroni%29_Ranomafana.jpg/220px-Variegated_golden_frog_%28Mantella_baroni%29_Ranomafana.jpg");
console.log(img.getAttribute("src"));

const secondImage = document.querySelectorAll("img")[1];
secondImage.setAttribute("src", "https://thumbs-prod.si-cdn.com/ncHs9_EZ-ZWstFPKnHNryy8tWtk=/420x240/https://public-media.si-cdn.com/filer/92/e1/92e16dad-3cd0-4832-a9e2-33f644011f49/green_darner.jpg");

