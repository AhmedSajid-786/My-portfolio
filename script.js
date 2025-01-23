document.getElementById("cross").addEventListener("click", () => {
  document.getElementById("sideBar").style.transform = "translateX(-400px)";
});

document.getElementById("bars").addEventListener("click", () => {
  document.getElementById("sideBar").style.transform = "translateX(1px)";
});

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "ahmedsajid782020@gmail.com",
    Password: "03214927997as",
    To: "m.ahmedsajid665599@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New contact form enquiry",
    Body: "And this is the body",
  }).then((message) => alert(message));
}