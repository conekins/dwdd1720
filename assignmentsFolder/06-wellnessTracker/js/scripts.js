console.log("I am connected");

const saveBtn = document.querySelector('#saveBtn');

saveBtn.addEventListener('click', () => {
    event.preventDefault();
    let fn = document.querySelector('input[name="first"]');
    console.log(fn.value);
})