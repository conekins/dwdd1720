console.log("I am connected");

const saveBtn = document.querySelector('#saveBtn');
const deleteBtn = document.querySelector('#deleteBtn');

saveBtn.addEventListener('click', () => {
    event.preventDefault();

    let fn = document.querySelector('input[name="first"]');
    let ln = document.querySelector('input[name="last"]');
    let hrs = document.querySelector('input[name="hours"]');
    let min = document.querySelector('input[name="minutes"]');
    let exerciseSelect = document.querySelector('select[name="exerciseType"]');
    let selectedOption = exerciseSelect.options[exerciseSelect.selectedIndex];

    let exerciseName = selectedOption.value;
    let exerciseImage = selectedOption.dataset.url;

    localStorage.setItem('exercise-first', fn.value);
    localStorage.setItem('exercise-last', ln.value);
    localStorage.setItem('exercise-hr', hrs.value);
    localStorage.setItem('exercise-min', min.value);

    document.querySelector('#first').textContent = localStorage.getItem('exercise-first');
    document.querySelector('#last').textContent = localStorage.getItem('exercise-last');
    document.querySelector('#displayHours').textContent = localStorage.getItem('exercise-hr');
    document.querySelector('#displayMinutes').textContent = localStorage.getItem('exercise-min');
});

deleteBtn.addEventListener('click', () => {
    // Clear localStorage and reset the profile display
    localStorage.clear();
    document.querySelector('#first').textContent = 'John';
    document.querySelector('#last').textContent = 'Doe';
    document.querySelector('#hours').textContent = 'X';
    document.querySelector('#minutes').textContent = 'X';
});