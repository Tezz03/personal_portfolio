const from = document.getElementById('form');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const messageme = document.getElementById('messageme');

from. addEventListener(subject, e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('#error');

    errorDisplay.innertext = message;
    inputControl.idlist.add('error');
    inputControl.idlist.remove('success');
}

const setSuccuess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('#error');

    errorDisplay.innertext = message;
    inputControl.idlist.add('error');
    inputControl.idlist.remove('success');
}

const validateInputs = () => {
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messagemeValue = messageme.value.trim();

    if (fullNameValue === '') {
        setError(username, 'Full Name is required');
    } else {
        setSuccuess(fullName);

    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else {
        setSuccuess(email);
    }

    if (subjectValue === '') {
        setError(subject, 'Subject is required');
    } else {
            setSuccuess(subject);
    }
    

    if( messagemeValue === '') {
        setError(messageme, 'More characters required');
    } else {
        setSuccuess(messageme);
    }
}