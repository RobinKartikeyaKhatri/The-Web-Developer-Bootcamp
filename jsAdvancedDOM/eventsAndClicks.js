const h1 = document.querySelector("h1");
const p = document.querySelector("p");

h1.addEventListener("click", () => {
    h1.style.backgroundColor = "Orange";
    p.style.fontSize = "100px";
    p.style.color = "purple";
});

const ul = document.querySelector("ul");

const lis = document.querySelectorAll("li");
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", () => {
        lis[i].style.color = "red";
    });
}