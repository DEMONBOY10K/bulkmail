var log = document.getElementById("print-log");
const loading = document.getElementById("loading-box");
var popupheading = document.getElementById("popup-heading");
function sendThroughSMTP(email) {
  Email.send({
    SecureToken: "1e2d3276-b29d-4c0b-a2de-2a2b4881c814",
    To: email,
    From: "demonboyemailservice@gmail.com",
    Subject: subject.value,
    Body:
      mailbody.value +
      "<br>" +
      "- THIS MAIL IS SENT UNDER THE NAME : " +
      username.value,
  }).then(function (message) {
    console.log("mail sent successfully to " + email);
    loading.style.display = "none";
    log.style.display = "block";
    if (email.length == validmails.length) {
      for (i in email) {
        log.innerHTML = email[i] + "<br>" + log.innerHTML;
        if (i == email.length - 1) {
          log.innerHTML =
            "<p style=color:crimson> Mail sent successfully to :</p>" +
            log.innerHTML;
        }
      }
      if (invalidmails.length) {
        log.innerHTML =
          log.innerHTML + "<p style=color:crimson> Invalid Mails :</p>";
        for (i in invalidmails) {
          log.innerHTML = log.innerHTML + invalidmails[i] + "<br>";
        }
      }
      console.log("all sent");
      exit.style.cursor = "pointer";
      exit.style.color = "#ea1d6f";
      exit.disabled = false;
      popupheading.innerHTML = "Total Mails Sent : " + email.length;
    } else if (email == address.value) {
      log.innerHTML = email + "<br>" + log.innerHTML;
      exit.style.cursor = "pointer";
      exit.disabled = false;
      exit.style.color = "#ea1d6f";
      popupheading.innerHTML = "Mail Sent Successfully to :";
      console.log("Sent 1 mail");
    }
  });
}
