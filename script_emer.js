src = "https://smtpjs.com/v3/smtp.js";
function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "jatingupta6171@gmail.com",
    Password: "Enter your password",
    To: "baaviral1104@gmail.com",
    From: "jatingupta6171@gmail.com",
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
  }).then(function (message) {
    alert("mail sent successfully");
  });
}
