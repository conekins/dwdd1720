console.log("I am connected");

const saveBtn = document.querySelector('#saveBtn');
const deleteBtn = document.querySelector('#deleteBtn');

saveBtn.addEventListener('click', () => {
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
});

deleteBtn.addEventListener('click', () => {
    localStorage.clear();
})

document.querySelector('#first').textContent = localStorage.getItem('exercise-first');
document.querySelector('#last').textContent = localStorage.getItem('exercise-last');
// Hours and minutes are being stored in localStorage but they are not being pulled and displayed.
document.querySelector('#hours').textContent = localStorage.getItem('exercise-hr');
document.querySelector('#minutes').textContent = localStorage.getItem('exercise-min');