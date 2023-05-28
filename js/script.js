const containerNewsletter = document.querySelector(".newsletter");
const containerSuccess = document.querySelector(".success-window");

const inputEmail = document.querySelector("input");
const formNewsletter = document.querySelector("form");
const spanEmail = document.querySelector(".display-email");
const messageError = document.querySelector(".error-message");

const ERROR_MESSAGE = "Valid email required";

inputEmail.addEventListener("input", () => {
    inputEmail.classList.remove("hightlight");
    messageError.textContent = "";
});

formNewsletter.addEventListener("submit", function (event) {
    event.preventDefault();

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const input = inputEmail.value;

    if (!input.match(mailformat)) {
        messageError.textContent = ERROR_MESSAGE;
        inputEmail.classList.add("hightlight");
        return;
    }

    containerNewsletter.classList.add("hidden");
    containerSuccess.classList.remove("hidden");
    spanEmail.textContent = input;
});
