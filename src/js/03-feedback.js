import throttle from "lodash.throttle";


const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textArea: document.querySelector('textarea')
}
const STORAGE_KEY = "feedback-form-state";


refs.form.addEventListener('input', throttle(onInputsValue, 500));
refs.form.addEventListener('submit', onSubmitForm);


checkStorage()

function onInputsValue(e) {
    const data = {
        email: e.target.nodeName === 'INPUT' ? e.target.value : refs.input.value,
        feedback: e.target.nodeName === 'TEXTAREA' ? e.target.value : refs.textArea.value
    };
  
   localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

function checkStorage() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        refs.input.value = JSON.parse(savedData).email
        refs.textArea.value = JSON.parse(savedData).feedback
    }
    
}
function onSubmitForm(e) {
    e.preventDefault()
    console.log('email: ', refs.input.value)
    console.log('feedback: ', refs.textArea.value)
    refs.form.reset()
    localStorage.removeItem(STORAGE_KEY)
}


// function onInputValue(e) {
//     const { email, message } = e.currentTarget.elements;
//     const saveValue = {
//         email: email.value,
//         textarea: message.value
//     }
//    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveValue))
// }