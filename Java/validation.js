const form = document.getElementById("form");
const email_input = document.getElementById("email-input");
const username_input = document.getElementById("username-input");
const password_input = document.getElementById("password-input");
const error_message = document.getElementById("error-message");

form.addEventListener("submit", (e) => {

    let errors = [];

    if (username_input)
    {
        /* If we have username input then we are in signup */
        errors = getSignupFormErrors(email_input.value, username_input.value, password_input.value);
    }

    else
    {
        /* If we don't have username input then we are in login */
        errors = getLoginFormErrors(email_input.value, password_input.value);
    }

    if (errors.length > 0)
    {
        e.preventDefault();
        error_message.innerText = errors.join(". ");
    }
})

function getSignupFormErrors(email, username, password)
{
    let errors = [];

    if (email === "" || email == null)
    {
        errors.push("Lütfen geçerli bir email adresi giriniz")
        email_input.parentElement.classList.add("incorrect")
    }

    if (username === "" || username == null)
    {
        errors.push("Lütfen geçerli bir kullanıcı adı giriniz");
        username_input.parentElement.classList.add("incorrect");
    }

    if (password === "" || password == null)
    {
        errors.push("Lütfen geçerli bir şifre giriniz")
        password_input.parentElement.classList.add("incorrect");
    }

    if (password < 6)
    {
        errors.push("Şifre en az 6 karakterden oluşmalı");
        password_input.parentElement.classList.add("incorrect");
    }

    return errors;
}

function getLoginFormErrors(email, password)
{
    let errors = [];

    if (email === "" || email == null)
    {
        errors.push("Lütfen geçerli bir email adresi giriniz");
        email_input.parentElement.classList.add("incorrect");
    }

    if (password === "" || password == null)
    {
        errors.push("Lütfen geçerli bir şifre giriniz")
        password_input.parentElement.classList.add("incorrect");
    }

    return errors;
}

const allInputs = [email_input, username_input, password_input].filter(input => input != null)
{
    allInputs.forEach(input => {
        input.addEventListener("input", () => {

            if (input.parentElement.classList.contains("incorrect"))
            {
                input.parentElement.classList.remove("inorrect");
                error_message.innerText = "";
            }
        })
    })
}

