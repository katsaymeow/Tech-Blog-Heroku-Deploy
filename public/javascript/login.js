const loginFormInfo = async (event) => {
  event.preventDefault();

  //values from login in form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  //sends post request to API
  if (email && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};
loginFormInfo();
const newSignupForm = async (event) => {
  event.preventDefault();

  const name = document.querySelector("name-signup").value;
  const email = document.querySelector("email-signup").value;
  const password = document.querySelector("password-signup").value;
console.log(name);
console.log(email);
console.log(password);
  if (name && email && password) {
    const response = await fetch("/user", {
      method: "POST",
      body: JSON.stringify({ 
        name,
        email, 
        password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};
newSignupForm();
document.querySelector(".login-form").addEventListener("submit", loginFormInfo);

document.querySelector(".signup-form").addEventListener("submit", newSignupForm);
