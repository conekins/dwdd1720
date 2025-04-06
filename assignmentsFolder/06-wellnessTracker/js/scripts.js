console.log("I am connected");

const saveBtn = document.querySelector('#saveBtn');

saveBtn.addEventListener('click', () => {
    let fn = document.querySelector('input[name="first"]');
    let ln = document.querySelector('input[name="last"]');
    let emotionSelect = document.querySelector('select[name="emotionalState"]');

    localStorage.setItem('wellness-first', fn.value);
    localStorage.setItem('wellness-last', ln.value);
    localStorage.setItem('wellness-emotion', emotionSelect.value);
});