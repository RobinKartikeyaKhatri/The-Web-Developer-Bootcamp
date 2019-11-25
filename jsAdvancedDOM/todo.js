const lis = document.querySelectorAll("li");

lis.forEach((li) => {
    li.addEventListener("mouseover", () => {
        li.style.color = "green";
    });
    li.addEventListener("mouseout", () => {
        li.style.color = "black";
    })
    li.addEventListener("click", () => {
        li.classList.toggle("done");
    });
});