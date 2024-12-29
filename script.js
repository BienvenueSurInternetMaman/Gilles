

// Fonction de filtrage du menu en fonction de la recherche
function filterMenu() {
    // Récupère la valeur de la recherche
    let input = document.getElementById('search').value.toLowerCase();
    
    // Récupère l'élément menu
    let menu = document.getElementById('menu');
    
    // Récupère toutes les listes du menu
    let items = menu.getElementsByTagName('li');
    
    // Parcourt chaque item du menu
    for (let i = 0; i < items.length; i++) {
        let link = items[i].getElementsByTagName('a')[0]; // Accède à l'élément <a>
        let text = link.textContent || link.innerText; // Le texte du lien
        
        // Si le texte du lien contient la valeur recherchée, on l'affiche, sinon on le cache
        if (text.toLowerCase().includes(input)) {
            items[i].style.display = ''; // Affiche
        } else {
            items[i].style.display = 'none'; // Cache
        }
    }
}