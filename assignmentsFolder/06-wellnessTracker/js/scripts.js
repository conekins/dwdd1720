console.log("I am connected");

const saveBtn = document.querySelector('#saveProfile');

saveBtn.addEventListener('click', () => {
    let fn = document.querySelector('input[name="first"]');
    console.log(fn);
})