const firebaseConfig = {
    apiKey: "AIzaSyCB__66gqgxb13oVbBKtvDcgjKrPXuKLEU",
    authDomain: "contactform-yb.firebaseapp.com",
    databaseURL: "https://contactform-yb-default-rtdb.firebaseio.com",
    projectId: "contactform-yb",
    storageBucket: "contactform-yb.appspot.com",
    messagingSenderId: "710710969124",
    appId: "1:710710969124:web:e5796a40e3e331a89869b1"
  };
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var item = getElementVal("item");
  var color = getElementVal("color");
  var size = getElementVal("size");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, item, color, size, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, item, color, size, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    item: item,
    color: color,
    size: size,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};