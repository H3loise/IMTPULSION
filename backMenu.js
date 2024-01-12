/*document.addEventListener('DOMContentLoaded', function() {
    // Le code JavaScript à l'intérieur de cette fonction sera exécuté une fois que le DOM est prêt

    document.getElementById('continue-button').addEventListener('click', function() {
        //alert('Bouton "Continuer" cliqué !');
        window.location.href = "finish_commande.html";
    });
});*/

function redirectToNewPage(key, value) {
    // Stocker les paramètres dans localStorage
    localStorage.setItem(key, value);

    // Redirection vers la nouvelle page
    window.location.href = "finish_commande.html";
}
