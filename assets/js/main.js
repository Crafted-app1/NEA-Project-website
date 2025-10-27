// Minimal JS: handle contact form submission locally
document.addEventListener('DOMContentLoaded', function(){
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name');
      // In a real site you'd POST this to a server. Here we show a friendly message.
      form.style.display = 'none';
      if(msg){
        msg.textContent = `Thanks ${name || ''}! Your message was received (demo).`;
      }
    });
  }
});
