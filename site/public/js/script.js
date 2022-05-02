const toggleButton = document.querySelector('.nav-toggle');
const menu_bar = document.querySelector('.nav-menu');
const logo = document.querySelector('.logo');
const scrollBar = document.querySelector('.scroll-bar');



toggleButton.addEventListener('click', () => {
    menu_bar.classList.toggle('active-control');
});

window.addEventListener('scroll', () => {
    menu_bar.classList.remove('active-control');
    scrollIndicator();
});

logo.addEventListener('click', () => {
    menu_bar.classList.remove('active-control');
});


for (const item of menu_bar.childNodes){
    item.addEventListener('click', () => {
        menu_bar.classList.remove('active-control');
    });
}

function scrollIndicator(){
    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    scrollBar.style.width = percentage + '%';
}

// Start the logic for contact form validation

const form = document.querySelector('.form');
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const subjectInput = document.querySelector('.subject');
const messageInput = document.querySelector('.message');


// form.addEventListener('submit', (e) => {

//     if(!validateInputs()){
//         e.preventDefault();
//     }else{
//         nameInput.value = null
//         emailInput.value = null
//         subjectInput.value = null
//         messageInput.value = null
//     }

// })


const validateInputs = () => {

    let isValid = true;
    
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if(nameValue === ''){
        setError(nameInput, "Name field is required");
        isValid = false;
    }

    if(emailValue === '')
    {
        setError(emailInput, "Email field is required");
        isValid = false;
    }else if(!validateEmail(emailValue))
    {
        setError(emailInput, "Provide a valid email address");
        isValid = false;
    }

    if(messageValue === ''){
        setError(messageInput, "Message field is required");
        isValid = false;
    }

    return isValid;

};

const inputs = [
    {element:nameInput, message: "Name field is required"}, 
    {element: messageInput, message: "Message field is required"}
];

inputs.forEach(x => {
    x.element.addEventListener('input', () => {
        removeError(x.element);
        inputValue = x.element.value;
        if(inputValue === ''){
            setError(x.element, x.message);
        }
    })
});

emailInput.addEventListener('input', () => {
    removeError(emailInput);
    const emailValue = emailInput.value.trim();
    if(emailValue === '')
    {
        setError(emailInput, "Email field is required");
    }else if(!validateEmail(emailValue))
    {
        setError(emailInput, "Provide a valid email address");
    }
});


const removeError = (element) => {
    const formGroup = element.parentElement;
    const errorSpan = formGroup.querySelector('.error-hint');
    errorSpan.innerText = null;
};

const setError = (element, message) => {
    
    const formGroup = element.parentElement;
    const errorSpan = formGroup.querySelector('.error-hint');
    errorSpan.innerText = message;
};

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };