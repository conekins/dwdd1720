const gridBtn = document.querySelector("#gridIcon");
const listBtn = document.querySelector("#listIcon");

const pageBody = document.querySelector("body");

gridBtn.addEventListener('click', () => {
    pageBody.className = "grid";
    gridBtn.classList.add("is-hidden");
    listBtn.classList.remove("is-hidden");
});
listBtn.addEventListener('click', () => {
    pageBody.className = "list";
    listBtn.classList.add("is-hidden");
    gridBtn.classList.remove("is-hidden");
});