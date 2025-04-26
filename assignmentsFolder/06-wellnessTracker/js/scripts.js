console.log("I am connected");

const saveBtn = document.querySelector('#saveBtn');
const deleteBtn = document.querySelector('#deleteBtn');

saveBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let fn = document.querySelector('input[name="first"]');
    let ln = document.querySelector('input[name="last"]');
    let hrs = document.querySelector('input[name="hours"]');
    let min = document.querySelector('input[name="minutes"]');
    let exercise = document.querySelector('select[name="exerciseType"]');
    

    localStorage.setItem('exercise-first', fn.value);
    localStorage.setItem('exercise-last', ln.value);
    localStorage.setItem('exercise-type', exercise.value);
    localStorage.setItem('exercise-hr', hrs.value);
    localStorage.setItem('exercise-min', min.value);

    document.querySelector('#first').textContent = localStorage.getItem('exercise-first');
    document.querySelector('#last').textContent = localStorage.getItem('exercise-last');
    document.querySelector('#displayExercise').textContent = localStorage.getItem('exercise-type');

    document.querySelector('#displayHours').textContent = localStorage.getItem('exercise-hr');
    document.querySelector('#displayMinutes').textContent = localStorage.getItem('exercise-min');
});

deleteBtn.addEventListener('click', () => {
    // Clear localStorage and reset the profile display
    localStorage.clear();
    document.querySelector('#first').textContent = 'John';
    document.querySelector('#last').textContent = 'Doe';
    document.querySelector('#displayExercise').textContent = 'example exercise';
    document.querySelector('#displayHours').textContent = 'X';
    document.querySelector('#displayMinutes').textContent = 'X';
});