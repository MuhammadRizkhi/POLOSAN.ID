const scriptURL = "https://script.google.com/macros/s/AKfycbzoq1Yn0RB8mVJPF7jcO4kC1wNfFAOYQ1l86pf_JfVcjJ73rzPEND7-yLK2G109YaE5/exec";
const form = document.forms["polosanid-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   Tombol Submit di Klik
  // Tampil tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Tampil tombol Kirim, hilangkan tombol Loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      //   reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
