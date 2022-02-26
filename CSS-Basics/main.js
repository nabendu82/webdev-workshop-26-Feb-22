const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msgInput = document.querySelector('#message');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} :${msgInput.value}`));
    userList.appendChild(li);
    nameInput.value = '';
    emailInput.value = '';
    msgInput.value = '';
}