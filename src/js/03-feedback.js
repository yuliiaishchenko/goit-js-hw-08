import throttle from 'lodash.throttle';

form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY))||{};
const {email, message} = form.elements;
reloadPage();


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputFormValue, 500));



function onFormSubmit(evt) {
    evt.preventDefault();
 console.log({email: email.value, message: message.value})

    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
    formData = {}};

function onInputFormValue(){
   formData = { email: email.value, message: message.value};
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function reloadPage(){
    if(formData){ 
        email.value = formData.email ||'';
        message.value = formData.message ||'';
    }
}