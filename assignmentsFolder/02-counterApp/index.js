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

// function save() {}