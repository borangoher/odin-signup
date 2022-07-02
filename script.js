const pass1 = document.getElementById('password');
const pass2 = document.getElementById('password-repeat');

pass1.addEventListener("input", PasswordValidator);
pass2.addEventListener("input", PasswordValidator);


function PasswordValidator() {
    if (pass1.value === pass2.value) {
        if (pass1.classList.contains("error")) {
            pass1.classList.remove("error");
            pass2.classList.remove("error");
        }
    } else {
        if (!pass1.classList.contains("error")) {
            pass1.classList.add("error");
            pass2.classList.add("error");
        }
    }
}

