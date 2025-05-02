function validerEtRediriger() {
    var pseudo = document.getElementById('pseudoInput').value;
  

    if (pseudo.trim() === "") {
      afficherAlerte("entre un pseudo zbi");
      return;
    }
  

    localStorage.setItem('pseudo', pseudo);
  

    window.location.href = 'sallejeu.html';
  }
  
  function afficherAlerte(message) {
    document.getElementById('alerteMessage').innerText = message;
  
    document.getElementById('alerte').style.display = 'block';
  }
  
  function fermerAlerte() {
    document.getElementById('alerte').style.display = 'none';
  }
  
  window.onload = function () {
    var pseudo = localStorage.getItem('pseudo');
    if (pseudo) {
      document.getElementById('affichagePseudo').innerText = "Bienvenue, " + pseudo + "!";
    }
  };


// empecher le zoom
  document.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {
      e.preventDefault(); 
    }
  }, { passive: false });
