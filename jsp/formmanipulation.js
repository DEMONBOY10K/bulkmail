// Form Reset
var reset = document.getElementById("reset");
reset.onclick = function () {
  address.disabled = false;
  preview.innerHTML = " ";
  selectaddress.style.display = "block";
  selectcsv.style.display = "none";
  previewheading.style.display = "none";
  setSuccessFor(username);
  setSuccessFor(address);
  setSuccessFor(csv);
  setSuccessFor(subject);
  setSuccessFor(mailbody);
};

// Onclick Send Btn
const send = document.getElementById("submit");
send.onclick = function (e) {
  e.preventDefault();
  exit.style.cursor = "not-allowed";
  exit.style.color = "grey";
  //Pre-Empty Check
  if (username.value != "" || username.value.length > 0) {
    setSuccessFor(username);
  } else {
    setErrorFor(username, "Username cannot be blank");
  }
  if (address.value != "" || address.value.length > 0) {
    setSuccessFor(address);
  } else {
    setErrorFor(address, "Email Address cannot be blank");
  }
  if (csv.value != "" || csv.value.length > 0) {
    setSuccessFor(csv);
  } else {
    setErrorFor(csv, "Select a .csv file");
  }

  if (subject.value != "" || subject.value.length > 0) {
    setSuccessFor(subject);
  } else {
    setErrorFor(subject, "Subject cannot be blank");
  }

  if (mailbody.value != "" || mailbody.value.length > 0) {
    setSuccessFor(mailbody);
  } else {
    setErrorFor(mailbody, "Mailbody cannot be blank");
  }

  //Post Empty Check + Execution
  if (username.value != "" || username.value.length > 0) {
    console.log("username = " + username.value);
    if (subject.value != "" || subject.value.length > 0) {
      console.log("subject = " + subject.value);
      if (mailbody.value != "" || mailbody.value.length > 0) {
        console.log("mailbody = " + mailbody.value);
        if (address.value != "" || address.value.length > 0) {
          console.log("address = " + address.value);
          if (validate(address.value)) {
            popup.showModal();
            setSuccessFor(csv);
            sendEmail();
          } else {
            setErrorFor(address, "Invalid Email");
          }
        } else if (csv.value != "" || csv.value.length > 0) {
          popup.showModal();
          setSuccessFor(address);
          sendEmail();
        }
      }
    }
  }
};

//Error Msg
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "app-form-group error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "app-form-group success";
}

//Selection Control <select>
var selectaddress = document.getElementById("address-form-group");
var selectcsv = document.getElementById("csv-form-group");
selectcsv.style.display = "none";
var selector = document.getElementById("selector");

selector.onchange = function () {
  var selected = document.forms[0].selector.value;
  if (selected == "Email") {
    selectaddress.style.display = "block";
    selectcsv.style.display = "none";
    preview.innerHTML = " ";
    previewheading.style.display = "none";
    address.disabled = false;
    csvFile.value = null;
  } else if (selected == "CSV") {
    selectcsv.style.display = "block";
    selectaddress.style.display = "none";
    address.value = null;
  }
};

//EMAIL Validation
var addlength;
function validate(address) {
  var input = document.createElement("input");
  input.type = "email";
  input.value = address;

  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (regex.test(address)) {
    addlength = address.length;
    console.log("Valid:" + address);
    return true;
  } else {
    console.log("InValid");
    return false;
  }
}
// var stats = httpGet(
//   "https://app.verify-email.org/api/v1/LF1AY4MtvxMpxbfrY56fEq2I7MVOIXdFieyUjRk4YlPjaCtKxh/verify/" +
//     address
// );
// if (stats == 1) {
// }

// function httpGet(theUrl) {
//   var xmlHttp = new XMLHttpRequest();
//   xmlHttp.open("GET", theUrl, false); // false for synchronous request
//   xmlHttp.send(null);
//   var data = xmlHttp.responseText;

//   console.log(data.status);
//   console.log(data.substring(21 + addlength, 22 + addlength));
//   return data.substring(21 + addlength, 22 + addlength);
// }
