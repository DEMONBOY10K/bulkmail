var mailer = [];
var validmails = [];
var invalidmails = [];
var csv = document.getElementById("csvFile");
var email = document.getElementById("email");
var address = document.getElementById("address");
var username = document.getElementById("name");
var subject = document.getElementById("subject");
var mailbody = document.getElementById("mailbody");
const myForm = document.getElementById("myForm");
const csvFile = document.getElementById("csvFile");
var preview = document.getElementById("preview");
var previewheading = document.getElementById("preview-heading");
csv.onchange = function () {
  if (this.value != "" || this.value.length > 0) {
    address.value = null;
    address.disabled = true;
    send.disabled = false;
    previewheading.style.display = "block";
    // Scanninng and Printing CSV Preview

    const input = csvFile.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;
      const data = csvToArray(text);

      mailer = [Object.values(data[0])[0]];
      for (var i = 1; i < data.length - 1; i++) {
        mailer.push(Object.values(data[i])[0]);
      }

      for (i in mailer) {
        mailer[i] = JSON.stringify(mailer[i]);
        mailer[i] = mailer[i].slice(1, -3, -2, -1);
      }
      var mailArray = mailer.map((mail) => {
        return "<p>" + mail + "</p>";
      });

      document.getElementById("preview").innerHTML = mailArray.join("");
    };

    reader.readAsText(input);
  }
};

//Sending Email
function sendEmail() {
  console.log("Form submitted");

  if (address.value != "" || address.value.length > 0) {
    sendThroughSMTP(address.value);
  } else if (csv.value != "" || csv.value.length > 0) {
    var j = 0;
    var k = 0;
    for (i in mailer) {
      if (validate(mailer[i])) {
        validmails[j] = mailer[i];
        j++;
      } else {
        invalidmails[k] = mailer[i];
        k++;
      }
    }
    sendThroughSMTP(validmails);
    console.log(validmails);
    console.log(invalidmails);
    // for (i in mailer) {
    //   sendThroughSMTP(mailer[i]);
    // }
  }
}
