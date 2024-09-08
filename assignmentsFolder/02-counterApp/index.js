let count = 0;

function increment() {
    count += 1;
    document.getElementById("countEl").innerText = count;
}

function decrement() {
    count -= 1;
    document.getElementById("countEl").innerText = count;
}

function reset() {
    count = 0;
    document.getElementById("countEl").innerText = count;
}

// function save() {}