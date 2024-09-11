let saveEl = document.querySelector("#saveEl")
let countEl = document.querySelector("#countEl")

document.querySelector("#incrementBtn").addEventListener("click", increment);
document.querySelector("#decrementBtn").addEventListener("click", decrement);
document.querySelector("#resetBtn").addEventListener("click", reset);
document.querySelector("#saveBtn").addEventListener("click", save);

let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
}

function decrement() {
    if (count > 0) {
        count -= 1;
        countEl.innerText = count;
    }
}

function reset() {
    count = 0;
    countEl.innerText = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.innerText += " " + countStr;
    countEl.innerText = 0;
    count = 0;
}