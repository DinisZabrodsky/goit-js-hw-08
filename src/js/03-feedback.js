import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

const STOREG_KEY = "feedback-form-state";
const dataInput = {};

saveData();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(valueData, 500));

function valueData(event) {
    dataInput.email = email.value;
    dataInput.message = message.value;

    console.log(dataInput);

    localStorage.setItem(STOREG_KEY, JSON.stringify(dataInput));
}

function onFormSubmit(event) {
    event.preventDefault();
    
    console.log(dataInput);

    event.currentTarget.reset();
    localStorage.removeItem(STOREG_KEY);
};

function saveData() {
    const arreyData = JSON.parse(localStorage.getItem(STOREG_KEY));

    if (localStorage.getItem(STOREG_KEY)) {
        email.value = arreyData.email;
        message.value = arreyData.message;
    };
}