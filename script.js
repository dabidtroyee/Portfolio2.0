var menuBtn = document.getElementById("menuBtn");
var navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

var links = document.querySelectorAll(".nav-links a");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
}

var topBtn = document.getElementById("topBtn");
var sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  if (scrollPosition > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

  for (var i = 0; i < sections.length; i++) {
    var top = sections[i].offsetTop - 120;
    var bottom = top + sections[i].offsetHeight;

    if (scrollPosition >= top && scrollPosition < bottom) {
      for (var j = 0; j < links.length; j++) {
        links[j].classList.remove("active");
      }
      var id = sections[i].getAttribute("id");
      document.querySelector('.nav-links a[href="#' + id + '"]').classList.add("active");
    }
  }

  var reveals = document.querySelectorAll(".reveal");
  for (var k = 0; k < reveals.length; k++) {
    var boxTop = reveals[k].getBoundingClientRect().top;
    if (boxTop < window.innerHeight - 80) {
      reveals[k].classList.add("show");
    }
  }
});

topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

var PUBLIC_KEY = "B8OWwICPmGdniKxH5";
var SERVICE_ID = "service_xr8vu3e";
var TEMPLATE_ID = "template_90z77rh";

emailjs.init({ publicKey: PUBLIC_KEY });

var form = document.getElementById("contactForm");
var formMessage = document.getElementById("formMessage");
var sendBtn = document.getElementById("sendBtn");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "#ff2a2a";
    return;
  }

  sendBtn.textContent = "Sending...";
  sendBtn.disabled = true;

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form).then(
    function () {
      formMessage.textContent = "Thank you, " + name + "! Your message was sent.";
      formMessage.style.color = "#7CFC7C";
      form.reset();
      sendBtn.textContent = "Send Message";
      sendBtn.disabled = false;
    },
    function () {
      formMessage.textContent = "Sorry, something went wrong. Please try again.";
      formMessage.style.color = "#ff2a2a";
      sendBtn.textContent = "Send Message";
      sendBtn.disabled = false;
    }
  );
});

document.getElementById("year").textContent = new Date().getFullYear();

window.dispatchEvent(new Event("scroll"));