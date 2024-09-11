let saveEl = document.getElementById("saveEl")
let countEl = document.getElementById("countEl")
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