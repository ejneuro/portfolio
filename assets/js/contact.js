const form = document.getElementById('contactForm');
    const sendBtn = document.getElementById('sendBtn');

    form.addEventListener('submit', function () {
      sendBtn.classList.add('is-loading');
    });
    

   // 🔑 REPLACE 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID'
   const serviceID = 'YOUR_SERVICE_ID';
   const templateID = 'YOUR_TEMPLATE_ID';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.disabled = false;
      btn.innerHTML = 'Send Message <i class="fa-solid fa-share"></i>';
      responseMsg.style.color = 'green';
      responseMsg.innerText = '✅ Message sent successfully!';
      document.getElementById('contact-form').reset(); // Clear form
    }, (err) => {
      btn.disabled = false;
      btn.innerHTML = 'Send Message <i class="fa-solid fa-share"></i>';
      responseMsg.style.color = 'red';
      responseMsg.innerText = '❌ Failed to send. Please try again.';
      console.error(JSON.stringify(err));
    });
});
