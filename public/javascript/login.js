const loginFormInfo = async (event) => {
    event.preventDefault();

    //values from login in form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    //sends post request to API
    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password}),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};
const newSignupForm = async (event) => {
    event.preventDefault();

    const userName = documnet.querySelector('#user-name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (userName && email && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ userName, email, password}),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('profile');
        } else {
            alert(response.statusText);
        }
     }
};

document.querySelector('.login-form').addEventListener('submit', loginFormInfo);

document.quertSelector('.signup-form').addEventListener('submit', newSignupForm);