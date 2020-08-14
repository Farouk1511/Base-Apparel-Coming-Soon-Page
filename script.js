const sendBtn = document.getElementById("send-button");
const errorMsg = document.getElementById("error-msg");
const errorIcon = document.getElementById("error-icon");
const email = document.getElementById("email");

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email.value).trim())) {
    errorMsg.classList.remove("show");
    errorIcon.classList.remove("show");
    email.style.border = "1px solid hsl(0, 36%, 70%)";
  } else {
    errorMsg.classList.add("show");
    errorIcon.classList.add("show");
    email.style.border = "2px solid hsl(0, 93%, 68%)";
  }

  sendBtn.classList.toggle("show");
});
