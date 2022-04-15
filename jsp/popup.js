const popup = document.getElementById("popup-container");
const exit = document.getElementById("popup-exit");
exit.disabled = true;
// send.disabled = true;

exit.onclick = function () {
  popup.close();
  exit.disabled = true;
  count = 0;
  log.innerHTML = "";
  popupheading.innerHTML = "SENDING";
};
