// generateBtn Const
const generateBtn = document.querySelector("form button");
// qrCodeBox Const
const qrCodeBox = document.querySelector(".qr-code");
// qrInput Const
const qrInput = document.querySelector("form input");
// qrImage Const
const qrImage = document.querySelector(".qr-code img");

// click button
generateBtn.addEventListener("click", () => {
  // let qrValue
  let qrValue = qrInput.value;
  // if qrValue
  if (!qrValue) {
    return alert("لطفا یه متن یا آدرس وارد کن");
  }
  // generateBtn innerText
  generateBtn.innerText = "در حال دریافت ...";
  // qrImage src image
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  // qrImage loading
  qrImage.addEventListener("load", () => {
    // qrCodeBox remove image
    qrCodeBox.classList.remove("hidden");
    // generateBtn remove loading
    generateBtn.innerText = "تولید QR Code";
  });
});
// qrInput keyup
qrInput.addEventListener("keyup", () => {
  // if qrInput
  if (!qrInput.value) {
    qrCodeBox.classList.add("hidden");
  }
});
