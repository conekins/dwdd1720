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
    let exerciseImg = document.querySelector('#exerciseType option:checked');

    localStorage.setItem('exercise-first', fn.value);
    localStorage.setItem('exercise-last', ln.value);
    localStorage.setItem('exercise-type', exercise.value);
    localStorage.setItem('exercise-img', exerciseImg.dataset.url);
    localStorage.setItem('exercise-hr', hrs.value);
    localStorage.setItem('exercise-min', min.value);
    location.reload();
});

    const check = localStorage.getItem('exercise-first');
    console.log(check);

    if (check === null) {
    document.querySelector('#newProfile').className = 'showMe';
    document.querySelector('#myProfile').className = 'hideMe';
} else {
    document.querySelector('#first').textContent = localStorage.getItem('exercise-first');
    document.querySelector('#last').textContent = localStorage.getItem('exercise-last');
    document.querySelector('#displayExercise').textContent = localStorage.getItem('exercise-type');
    document.querySelector('#emoji').src = localStorage.getItem('exercise-img');

    document.querySelector('#displayHours').textContent = localStorage.getItem('exercise-hr');
    document.querySelector('#displayMinutes').textContent = localStorage.getItem('exercise-min');

    document.querySelector('#newProfile').className = 'hideMe';
    document.querySelector('#myProfile').className = 'showMe';
}


deleteBtn.addEventListener('click', () => {
    // Clear localStorage and reset the profile display
    localStorage.removeItem('exercise-first');
    localStorage.removeItem('exercise-last');
    localStorage.removeItem('exercise-type');
    localStorage.removeItem('exercise-img');
    localStorage.removeItem('exercise-hr');
    localStorage.removeItem('exercise-min');
    location.reload();
});