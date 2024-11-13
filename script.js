function checkPasswordMatch() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
        document.getElementById("confirm-password").setCustomValidity("As senhas não são iguais");
    } else {
        document.getElementById("confirm-password").setCustomValidity("");
    }
}