import throttle from 'lodash.throttle';




const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),};


const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY))||{};

reloadPage();


refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputFormValue, 500));



function onFormSubmit(evt) {
    evt.preventDefault();

   const {email,message} = evt.currentTarget.elements; 
 console.log({email: email.value, message: message.value});
if (localStorage.getItem(STORAGE_KEY))
{    let data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  

    localStorage.removeItem(STORAGE_KEY);
    evt.currentTarget.reset();
    formData = {}};}

function onInputFormValue(evt){
    formData = { email: refs.input.value.trim(),
    message: refs.textarea.value.trim(),};
   formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function reloadPage(){

let data =   localStorage.getItem(STORAGE_KEY);  
    if(!data) return;
     formData = JSON.parse(data);

     refs.input.value = formData.email ?? '';
     refs.textarea.value = formData.message ?? '';};