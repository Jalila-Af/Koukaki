/***** REGLAGES GENERAL *****/

// Décrit l'état de chargement du fichier document : 
//différer le lancement du script tant que le doc et ttes les sous-ressources n'ont pas fini de se charger 
document.addEventListener("DOMContentLoaded", function () {
  monScript();
});


/***** JQUERY *****/

// jQuery pour la gestion du modal qui est une librairie JavaScript (un ensemble de code prêts à l’emploi)
(function($) {
    $(".modal-open").click(function () {
    console.log("modal click");
    // La méthode animate() est un raccourci permettant de créer un nouvel objet Animation, 
    //de l'appliquer à un élément puis de la jouer
    $(".modal__content").animate({ height: "toggle", opacity: "toggle" }, 1000);
    // Basculer de l'ouverture à la fermeture
    $(".modal__content").toggleClass("open");
    $(".modal__burger").toggleClass("close");
  });
      $("a").click(function () {
      // La .hasClass()méthode se distingue comme un outil pratique pour vérifier si 
      // les éléments sélectionnés ont une classe spécifique
        if ($(".modal__content").hasClass("open")) {
          $(".modal__content").animate({ height: "toggle", opacity: "toggle" }, 1000);
          $(".modal__content").removeClass("open");
          $(".modal__burger").removeClass("close");
          // removeClass supprime la classe spécifiée
      }
    });    
})(jQuery);


/***** GESTION DU SWIPER *****/

  // Swiper le curseur d'image de chats avec une fonctionnalité de lecture automatique
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 60,
    speed: 1000,
    autoplay: {
        delay: 250,
    },
    // Afficher seulement 3 images à la fois dans le curseur en rotation
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 3,
    coverflowEffect: {
        rotate: 60,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
        delay: 2500,
    },

});

/***** ANIMATION SUR LES H2 ET H3 *****/

// Effet d’apparition sur les titres des sections lorsque l’utilisateur scrolle sur lasection
let posX = 0; 
let mouveCloud = false;

/***** INTERSECTION *****/

// Renvoie à la racine de l'arbre représentant le document qui est l'élément racine de document
const root = document.documentElement;
// La méthode querySelector() de l'interface Document retourne le premier Element dans le document du selecteur
const place = document.querySelector("#place");

// handleIntersect est une fonction callback 
// à appeler quand l'intersection franchit l'un de nos paliers  
const handleIntersect = (entries) => {
    // renvoie un nouvel objet itérateur de tableau contenant les paires 
    //clé/valeur pour chaque index du tableau en appellant une fonction pour chaque élément d'un tableau
    entries.forEach(function (entry) {
      // Si l'élément à observer est dans le ratio de la zone affichée
      if (entry.intersectionRatio > ratio) {
        elementName = entry.target.className;
       
 /***** CONTENU PRINCIPAL DE LA PAGE *****/ 

        // Appliquer une animation d'apparition si l'élément est trouvé
        if (
          elementName === "story hidden" ||
          elementName === "studio hidden" ||
          elementName === "nomination hidden" ||
          elementName === "site-footer hidden"
        ) {
          // class qui va appliquer les keyframes d'apparition des sections 
          entry.target.classList.add("mouve-up");
          // Elément à ne plus observer
          observer.unobserve(entry.target);
          // Retrait de la class cachant  l'élément par défaut
          entry.target.classList.remove("hidden");
        }

 /***** CONTENU DES TITRES *****/

        if (
          // Appliquer une animation d'apparition si l'élément est trouvé
          elementName === "story__title hidden" ||
          elementName === "studio__title hidden" ||
          elementName === "characters__title hidden" ||
          elementName === "place__title hidden"
        ) {
          // class qui va appliquer les keyframes d'apparition des sections 
          entry.target.classList.add("animTitle");
          // Elément à ne plus observer
          observer.unobserve(entry.target);
          // Retrait de la class cachant  l'élément par défaut
          entry.target.classList.remove("hidden");
        }        
      }
    });
  };

/**** RATIO *****/

  const ratio = 0.05;
  // Le degré d'intersection entre l'élément cible et sa racine est le ratio d'intersection. 
  // C'est une représentation du pourcentage de l'élément cible qui est visible 
  // Sous la forme d'un nombre compris entre 0.0 et 1.0 
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
  };

  
  /***** INITIALISATION DE LE FONCTION INTERSECTIONOBSERVER *****/
 
  const observer = new IntersectionObserver(handleIntersect, options);
   // Lorsqu'un objet implémentant IntersectionObserver est créé, il est configuré pour surveiller des ratios donnés de visibilité au sein de la racine. 
  // La configuration ne peut être changée après initialisation de l'IntersectionObserver. 
  // Ainsi un certain observateur ne sera utile que pour surveiller certains changements spécifiques de visibilité 
  
  // Activation des éléments à surveiller
  observer.observe(document.querySelector(".story"));
  observer.observe(document.querySelector(".studio"));
  observer.observe(document.querySelector(".nomination"));
  observer.observe(document.querySelector(".site-footer"));
  observer.observe(document.querySelector(".story__title"));
  observer.observe(document.querySelector(".studio__title"));
  observer.observe(document.querySelector(".characters__title"));
  observer.observe(document.querySelector(".place__title"));

  /***** CONTROLE DU SCROLL *****/

  //La méthode addEventListener() attache une fonction à appeler chaque fois que l'évènement spécifié est envoyé à la cible.
  //Les cibles courantes sont un Element, le Document lui-même et une Window
  window.addEventListener("scroll", () => {
    // Effet de mouvement accélèré sur les fleurs si on scroll
    var vertical = -1;
    setInterval(function () {
      if (window.scrollY != vertical) {
        vertical = window.scrollY;
        root.style.setProperty("--rotate", "3s");
      } else {
        root.style.setProperty("--rotate", "15s");
      }
    }, 500);

    // Mouvement sur les nuages de la section lieu en fonction du scroll
      posX = Math.round(0 - (window.scrollY - place.offsetTop - 200));
      if (posX <= 0 && posX > -400) {
        root.style.setProperty("--posX", posX + "px");
      }     
  });
