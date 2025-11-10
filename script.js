document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('numberForm');
    form.addEventListener('submit', function(e) {
      e.preventDefault(); 
      const input = document.getElementById('numberInput').value.trim();

      if (!/^\d+$/.test(input) || Number(input) <= 0) {
        alert("Zadejte prosím platné kladné celé číslo.");
        return;
      }

      const number = Number(input);
      if (number % 2 === 0) {
        alert("Číslo je sudé");
      } else {
        alert("Číslo je liché");
      }
    });
  });
  