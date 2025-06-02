function ouvrirFormulaire(nomProduit) {
  document.getElementById("produit-select").innerText = nomProduit;
  document.getElementById("formulaire-contact").style.display = "block";
}

function fermerFormulaire() {
  document.getElementById("formulaire-contact").style.display = "none";
}

function envoyerFormulaire(event) {
  event.preventDefault();
  alert("Merci ! Nous vous recontacterons très vite.");
  fermerFormulaire();
}
