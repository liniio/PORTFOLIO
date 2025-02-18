'use strict';



// loader website
const loader = document.getElementById('loader');
loader.style.display = 'none';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// Email JS Contact
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

// Function to send email
const sendEmail = (e) => {
    e.preventDefault();

    // Validate form before sending
    if (!contactForm.checkValidity()) {
        contactMessage.textContent = 'Please fill out all fields.';
        return;
    }

    // Disable submit button during sending
    const formBtn = contactForm.querySelector('.form-btn');
    formBtn.setAttribute('disabled', '');
    // Send email using EmailJS
    emailjs.sendForm('service_05flpxg', 'template_y65hnhj', '#contact-form', 'd7VhNPyIwcXYdcOXs')
        .then(() => {
            // Show success message
            contactMessage.textContent = 'Message sent successfully ✔';
            // Clear message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
            // Clear form fields
            contactForm.reset();
        })
        .catch(() => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ✘';
        })
        .finally(() => {
            // Enable submit button after sending
            formBtn.removeAttribute('disabled');
        });
};
// Event listener for form submission
contactForm.addEventListener('submit', sendEmail);




// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



// Dark/Light Mode
// document.addEventListener('DOMContentLoaded', function () {
//   const toggleButton = document.getElementById('theme-toggle');
//   const icon = toggleButton.querySelector('ion-icon');

//   // Load the current theme from local storage
//   const currentTheme = localStorage.getItem('theme') || 'light-mode';
//   document.body.classList.add(currentTheme);

//   // Set the initial icon
//   icon.name = currentTheme === 'light-mode' ? 'moon-outline' : 'sunny-outline';

//   toggleButton.addEventListener('click', function () {
//     if (document.body.classList.contains('light-mode')) {
//       document.body.classList.remove('light-mode');
//       document.body.classList.add('dark-mode');
//       icon.name = 'sunny-outline';
//       localStorage.setItem('theme', 'dark-mode');
//     } else {
//       document.body.classList.remove('dark-mode');
//       document.body.classList.add('light-mode');
//       icon.name = 'moon-outline';
//       localStorage.setItem('theme', 'light-mode');
//     }
//   });
// });