/* =====================================================================
   liens.js — point d'aiguillage unique du portail CSS Moorea Tahiti
   ---------------------------------------------------------------------
   POURQUOI ce fichier existe :
   les deux pages (publique et adhérents) affichent des listes de liens qui
   se recoupent à 90 %. Dupliquer les libellés et les URL dans deux fichiers
   HTML garantirait qu'un jour l'un des deux serait mis à jour et pas
   l'autre. Tout est donc déclaré ICI, une seule fois, et les pages ne font
   que désigner le jeu de boutons qu'elles veulent afficher.

   POUR MODIFIER UN LIEN : une seule ligne à changer, dans LIENS.
   POUR CHANGER UN TEXTE : une seule ligne à changer, dans DICO ou LIENS.
   POUR AJOUTER UN BOUTON : ajouter une entrée dans LIENS, puis ajouter sa
   clé dans JEUX.publique ou JEUX.adherents.
   Aucun libellé n'est écrit en dur dans les fichiers HTML.
   ===================================================================== */


/* ---------------------------------------------------------------------
   DICO — tous les textes d'interface, classés par thème.
   Le thème précède la clé : entete_*, pied_*, alerte_*.
   POURQUOI : permet de relire tous les textes affichés sans ouvrir le HTML,
   et de préparer une éventuelle version reo tahiti sans toucher au code.
   --------------------------------------------------------------------- */
const DICO = {

  // Thème ENTETE — ce qui s'affiche au-dessus de la pile de boutons.
  entete_sur_titre_public: "Compassionate Service Society",
  entete_titre: "CSS Moorea Tahiti",
  entete_sous_titre_public: "Tai chi, cours gratuits — Moorea et Tahiti",
  entete_sur_titre_adherents: "Espace adhérents",
  entete_sous_titre_adherents: "Tous nos accès au même endroit",

  // Thème ENTETE, page ressources.
  entete_sur_titre_ressources: "Ressources",
  entete_sous_titre_ressources: "Lectures, chaînes et musiques",

  // Thème SECTION — les intertitres de la page ressources.
  section_lire: "À lire",
  section_regarder: "À regarder",
  section_ecouter: "À écouter",

  // Thème AVERTISSEMENT — affiché en bas de la page ressources.
  // POURQUOI il est ici et non dans le HTML : c'est un texte, il suit la
  // même règle que tous les autres.
  avertissement_ressources: "Ces contenus appartiennent à leurs auteurs, cités sous chaque titre, et restent leur propriété. Ils sont extérieurs à l'association. Certains ne sont plus mis à jour et peuvent ne pas refléter l'évolution des connaissances ou des doctrines.",

  // Thème PIED — mention de bas de page.
  pied_mention: "Association CSS Moorea Tahiti — depuis 2009",

  // Thème ALERTE — messages affichés quand quelque chose ne marche pas.
  alerte_sans_js: "Cette page a besoin de JavaScript pour afficher les liens.",
  alerte_sans_js_secours: "Écrivez-nous sur notre page Facebook :"
};


/* ---------------------------------------------------------------------
   ICONES — dessins au trait, une seule graisse, même boîte 24 × 24.
   POURQUOI dessinées et non des émojis système : un émoji change d'aspect
   d'un téléphone à l'autre, ne se colore pas et devient illisible sous
   20 px. Ces tracés sont volontairement pauvres en détails pour rester
   lisibles à 26 px, la taille réelle à laquelle ils sont affichés — taille
   mesurée au rendu, pas estimée.
   Chaque icône décrit la FONCTION du bouton, jamais une marque : aucun
   logo de tiers n'est reproduit.
   --------------------------------------------------------------------- */
const ICONES = {

  // Panneau d'affichage : un cadre et deux lignes de texte.
  // Pour la page d'actualités de l'association.
  actualites: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 10h10M7 14h6"/>',

  // Billet perforé : rectangle avec une encoche haute et basse au milieu.
  // Pour l'ensemble des campagnes de collecte.
  billet: '<path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8z"/><path d="M12 6v2M12 11v2M12 16v2"/>',

  // Carte de membre : rectangle, une pastille à gauche, deux lignes à
  // droite. Pour la cotisation annuelle.
  carte: '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="8" cy="12" r="2"/><path d="M13 10h5M13 14h3"/>',

  // Bol et vapeur : demi-cercle posé sur un socle, deux volutes au-dessus.
  // Pour le repas de l'association.
  bol: '<path d="M4 12h16a8 8 0 0 1-8 7 8 8 0 0 1-8-7z"/><path d="M9 8c0-1.2 1-1.6 1-2.8M13.5 8c0-1.2 1-1.6 1-2.8"/>',

  // Bulle unique : conversation où l'on écrit à un groupe.
  bulle: '<path d="M20 11.5a7.5 7.5 0 0 1-10.9 6.7L4 19.5l1.4-4.6A7.5 7.5 0 1 1 20 11.5z"/>',

  // Deux bulles imbriquées : conversation groupée à plusieurs.
  bulles: '<path d="M15.5 13.5a6 6 0 0 1-8.7 5.4L3 20l1.2-3.6A6 6 0 1 1 15.5 13.5z"/><path d="M9.5 6.6A6 6 0 0 1 21 9a5.9 5.9 0 0 1-1.2 3.6L21 16l-3.8-1.1"/>',

  // Globe : cercle, un méridien, deux parallèles. Pour le site internet.
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/>',

  // Cadre vidéo : rectangle avec un triangle de lecture au centre.
  video: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10.5 9.2l4.5 2.8-4.5 2.8z"/>',

  // Onde sonore : cinq barres verticales de hauteurs croissantes puis
  // décroissantes, lues comme un niveau audio.
  musique: '<path d="M5 10v4M9 7v10M12.5 4v16M16 8v8M20 11v2"/>',

  // Sac a anses : un corps trapezoidal et une anse en demi-cercle.
  // Pour la boutique de l'association.
  sac: '<path d="M5 8h14l-1.1 11.1a1 1 0 0 1-1 .9H7.1a1 1 0 0 1-1-.9L5 8z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>'
};


/* ---------------------------------------------------------------------
   LIENS — la source de vérité unique des adresses.
   Chaque entrée : clé interne, icône, libellé, précision, url.
   La PRÉCISION existe parce que « HelloAsso » ne dit rien à un adhérent :
   elle nomme ce que la personne va réellement trouver derrière le bouton.
   Sa longueur est plafonnée à ce qui tient sur UNE ligne à 360 px de large,
   largeur mesurée au rendu : au-delà, le bouton passe de 68 à 102 px et la
   pile perd son rythme.
   --------------------------------------------------------------------- */
const LIENS = {

  facebook: {
    icone: "actualites",
    libelle: "Notre page Facebook",
    precision: "Actualités et photos",
    url: "https://www.facebook.com/TaiChi.CSSMooreaTahiti"
  },

  campagnes: {
    icone: "billet",
    libelle: "Toutes nos inscriptions",
    precision: "Ce qui est ouvert",
    url: "https://www.helloasso.com/associations/css-moorea-tahiti-compassionate-service-society-moorea"
  },

  boutique: {
    icone: "sac",
    libelle: "La boutique",
    precision: "Tenue par Aurore",
    url: "https://www.helloasso.com/associations/css-moorea-tahiti-compassionate-service-society-moorea/boutiques/css-moorea-tahiti-boutique-helloasso"
  },

  cotisation: {
    icone: "carte",
    libelle: "Cotisation 2026",
    precision: "Adhérer ou renouveler",
    url: "https://www.helloasso.com/associations/css-moorea-tahiti-compassionate-service-society-moorea/adhesions/rcot"
  },

  // ATTENTION : l'URL fournie contient le segment /beta/. Ce segment est un
  // chemin de prévisualisation HelloAsso : il cesse de répondre à la mise
  // en ligne définitive de la campagne. L'adresse est conservée telle
  // quelle parce que c'est celle qui fonctionne aujourd'hui ; la variante
  // sans /beta/ figure dans le LISEZ-MOI, à substituer après vérification.
  repas: {
    icone: "bol",
    libelle: "Ma'a Tahiti Moorea",
    precision: "Samedi 13 septembre 2026",
    url: "https://www.helloasso.com/beta/associations/css-moorea-tahiti-compassionate-service-society-moorea/adhesions/evt04-rsm2-maa-tahiti-moorea-13-09-2026-n-2"
  },

  whatsapp: {
    icone: "bulle",
    libelle: "Groupe WhatsApp",
    precision: "Entrée validée par le bureau",
    url: "https://chat.whatsapp.com/CkyNlNTTmqr361x3k1Qkaz"
  },

  // Version PUBLIQUE du bouton Messenger. Le fil de groupe n'expose aucun
  // lien d'invitation : Messenger n'en propose pas quand l'approbation par
  // l'admin est active, les deux réglages s'excluent. Le seul chemin
  // utilisable par une personne extérieure est donc d'écrire à la page,
  // puis d'être ajoutée à la main.
  messenger_demande: {
    icone: "bulles",
    libelle: "Groupe Messenger",
    precision: "Écrivez-nous pour entrer",
    url: "https://m.me/TaiChi.CSSMooreaTahiti"
  },

  // Version ADHÉRENTS du même bouton : ouverture directe du fil existant.
  // Cette adresse ne fonctionne que pour les membres déjà dans le groupe,
  // ce qui correspond exactement au public de la page adhérents.
  messenger_groupe: {
    icone: "bulles",
    libelle: "Groupe Messenger",
    precision: "Taichi Intégral 2026",
    url: "https://www.facebook.com/messages/t/9060096560708706"
  },

  site: {
    icone: "globe",
    libelle: "Notre site internet",
    precision: "Cours, horaires, documents",
    url: "https://www.csstahitimoorea.org/accueil"
  },

  videos: {
    icone: "video",
    libelle: "Les vidéos",
    precision: "Revoir les postures",
    url: "https://www.csstahitimoorea.org/postures-mcn-can10"
  },

  // --- Ressources externes.
  // Le libellé porte le titre de l'oeuvre, la précision porte son auteur.
  // POURQUOI ce couple : ces contenus ne sont pas ceux de l'association,
  // ils appartiennent à leurs auteurs. Afficher le nom de l'auteur sous le
  // titre, c'est le créditer à l'endroit où l'on renvoie vers lui, et non
  // seulement dans un avertissement que personne ne lit.
  // Titres et auteurs fournis par l'association, non déduits.

  r_integral: {
    icone: "actualites",
    libelle: "Integral Taichi Intro",
    precision: "Master Hang Truong",
    url: "https://integral-taichi.blogspot.com/2010/11/integral-taichi-intro1.html"
  },

  r_happy50: {
    icone: "globe",
    libelle: "La vie après 50 ans",
    precision: "Ralph Maamaatuaiahutapu",
    url: "https://happy-50plus.com/"
  },

  // Le titre fourni, « Concevoir la vie autrement », mesure 26 caractères
  // et débordait sur deux lignes à 360 px, portant le bouton de 68 à 85 px
  // et cassant le rythme de la pile. C'est le nom du site qui est affiché
  // à la place, relevé sur la page elle-même. Pour rétablir la formule
  // d'origine, remplacer le libellé ci-dessous et accepter les deux lignes.
  r_tao: {
    icone: "globe",
    libelle: "Tao et Spiritualité",
    precision: "Théo Cabal",
    url: "https://taoetspiritualite.fr/"
  },

  r_chakra: {
    icone: "actualites",
    libelle: "Le concept de chakra",
    precision: "Théo Cabal",
    url: "https://taoetspiritualite.fr/le-concept-du-chakra"
  },

  r_jargon: {
    icone: "actualites",
    libelle: "École Gilles Thibault",
    precision: "Taïjiquan, qigong, kung-fu",
    url: "https://t-j-q.com/dotcl/index.php/post/2006/09/08/48-le-jargon-les-cinq-2"
  },

  // L'adresse a été reconstruite depuis l'identifiant @masterhengchang,
  // seul élément fourni au départ, puis vérifiée : elle répond.
  r_hangtruong: {
    icone: "video",
    libelle: "Thay Hang Truong",
    precision: "Chaîne YouTube de l'auteur",
    url: "https://www.youtube.com/@masterhengchang"
  },

  r_khainghiem: {
    icone: "video",
    libelle: "Khai Nghiem",
    precision: "Chaîne YouTube de l'auteur",
    url: "https://www.youtube.com/@khainghiem5644/videos"
  },

  r_compassheart: {
    icone: "video",
    libelle: "CompaSS Heart",
    precision: "Hoa Nghiem Phap Vong",
    url: "https://www.youtube.com/@HoaNghiemPhapVong"
  },

  // Chaîne @siliconband. Le titre affiché est celui donné par
  // l'association, plus parlant que le nom de la chaîne elle-même.
  r_minhchau: {
    icone: "musique",
    libelle: "Musique vietnamienne",
    precision: "Nhạc Nguyễn Minh Châu",
    url: "https://www.youtube.com/@siliconband"
  },

  // Playlist en lecture automatique. Production COMPASS FRANCE.
  r_radio: {
    icone: "musique",
    libelle: "Les postures du CK10",
    precision: "Version traditionnelle",
    url: "https://www.youtube.com/watch?v=cLwjfZXo8KE&list=RDcLwjfZXo8KE&start_radio=1"
  },

  musiques: {
    icone: "musique",
    libelle: "Les musiques",
    precision: "Bandes sonores des cours",
    url: "https://www.csstahitimoorea.org/musique"
  }
};


/* ---------------------------------------------------------------------
   JEUX — quels boutons apparaissent sur quelle page, et dans quel ordre.
   POURQUOI cette séparation : la page publique ne doit citer aucune adresse
   du domaine csstahitimoorea.org. Ce n'est donc pas un filtre cosmétique,
   c'est la règle de confidentialité du dispositif, écrite une seule fois et
   vérifiable d'un coup d'œil.
   Ordre choisi : d'abord ce qu'une personne cherche le plus souvent,
   ensuite les accès secondaires.
   --------------------------------------------------------------------- */
const JEUX = {

  // PUBLIQUE — aucune adresse csstahitimoorea.org. Sept boutons.
  publique: [
    "facebook",
    "cotisation",
    "repas",
    "boutique",
    "campagnes",
    "whatsapp",
    "messenger_demande"
  ],

  // ADHÉRENTS — le jeu complet. Dix boutons.
  // Le site arrive en tête : c'est la raison d'être de cette page.
  adherents: [
    "site",
    "videos",
    "musiques",
    "cotisation",
    "repas",
    "boutique",
    "campagnes",
    "whatsapp",
    "messenger_groupe",
    "facebook"
  ]
};


/* ---------------------------------------------------------------------
   SECTIONS — la page ressources, découpée en groupes titrés.
   POURQUOI une structure séparée de JEUX plutôt qu'une modification de
   JEUX : les deux pages existantes utilisent JEUX depuis la 00.01.00 et
   fonctionnent. On ajoute à côté, on ne touche à rien.
   Chaque groupe : une clé de DICO pour le titre, puis ses liens.
   --------------------------------------------------------------------- */
const SECTIONS = {

  ressources: [
    { titre: "section_lire",
      liens: ["r_integral", "r_happy50", "r_tao", "r_chakra", "r_jargon"] },

    { titre: "section_regarder",
      liens: ["r_hangtruong", "r_khainghiem", "r_compassheart"] },

    { titre: "section_ecouter",
      liens: ["r_minhchau", "r_radio"] }
  ]
};


/* ---------------------------------------------------------------------
   construireIcone — assemble un <svg> à partir d'un tracé de ICONES.
   POURQUOI une fonction et non du SVG recopié dans chaque bouton :
   garantit que tous les dessins partagent exactement la même boîte, la
   même graisse de trait et les mêmes terminaisons arrondies. Un seul
   endroit à corriger si le trait doit épaissir.
   --------------------------------------------------------------------- */
function construireIcone(cle) {
  const trace = ICONES[cle];
  // Une icône manquante ne doit pas casser la page : on rend un vide.
  if (!trace) return "";
  return '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false" '
       + 'fill="none" stroke="currentColor" stroke-width="1.6" '
       + 'stroke-linecap="round" stroke-linejoin="round">' + trace + "</svg>";
}


/* ---------------------------------------------------------------------
   poserLiens — écrit la pile de boutons dans le conteneur donné.
   POURQUOI target=_blank et rel=noopener : ouverte depuis Messenger ou
   WhatsApp, la page vit dans un navigateur intégré ; sans nouvelle cible,
   un adhérent qui suit un lien perd le portail et doit tout recommencer.
   noopener empêche la page ouverte d'agir sur celle d'origine.
   Le décalage --rang sert à l'apparition en cascade, gérée dans la CSS.
   --------------------------------------------------------------------- */
function poserLiens(idConteneur, nomDuJeu) {
  const boite = document.getElementById(idConteneur);
  if (!boite) return;

  const cles = JEUX[nomDuJeu] || [];
  let html = "";

  cles.forEach(function (cle, rang) {
    html += construireBouton(cle, rang);
  });

  boite.innerHTML = html;
}


/* ---------------------------------------------------------------------
   construireBouton — le HTML d'un bouton, extrait de poserLiens pour être
   partagé avec poserSections.
   POURQUOI cette extraction : sans elle, il aurait fallu recopier le
   gabarit du bouton, et les deux copies auraient divergé au premier
   changement.
   --------------------------------------------------------------------- */
function construireBouton(cle, rang) {
  const item = LIENS[cle];
  // Une clé inconnue est ignorée plutôt que rendue vide : mieux vaut un
  // bouton manquant qu'un bouton mort.
  if (!item) return "";

  return '<a class="lien" href="' + item.url + '" target="_blank" rel="noopener" '
       + 'style="--rang:' + rang + '">'
       + '<span class="lien-ico">' + construireIcone(item.icone) + "</span>"
       + '<span class="lien-txt">'
       + '<span class="lien-libelle">' + item.libelle + "</span>"
       + '<span class="lien-precision">' + item.precision + "</span>"
       + "</span>"
       + '<span class="lien-fleche" aria-hidden="true">'
       + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" '
       + 'stroke-linecap="round" stroke-linejoin="round">'
       + '<path d="M9 6l6 6-6 6"/></svg></span>'
       + "</a>";
}


/* ---------------------------------------------------------------------
   poserSections — écrit une suite de groupes titrés dans le conteneur.
   Le compteur de rang est continu d'un groupe à l'autre, pour que
   l'apparition en cascade traverse toute la page au lieu de repartir de
   zéro à chaque titre.
   --------------------------------------------------------------------- */
function poserSections(idConteneur, nomDuJeu) {
  const boite = document.getElementById(idConteneur);
  if (!boite) return;

  const groupes = SECTIONS[nomDuJeu] || [];
  let html = "";
  let rang = 0;

  groupes.forEach(function (groupe) {
    const titre = DICO[groupe.titre] || "";
    html += '<h2 class="section" style="--rang:' + rang + '">' + titre + "</h2>";
    rang += 1;

    groupe.liens.forEach(function (cle) {
      html += construireBouton(cle, rang);
      rang += 1;
    });
  });

  boite.innerHTML = html;
}


/* ---------------------------------------------------------------------
   poserTextes — remplit les éléments marqués data-dico avec le DICO.
   POURQUOI : c'est ce qui permet de n'écrire aucun libellé en dur dans les
   fichiers HTML. Le HTML ne contient que des emplacements nommés.
   --------------------------------------------------------------------- */
function poserTextes() {
  const cibles = document.querySelectorAll("[data-dico]");
  cibles.forEach(function (el) {
    const cle = el.getAttribute("data-dico");
    if (DICO[cle] !== undefined) el.textContent = DICO[cle];
  });
}


/* ---------------------------------------------------------------------
   demarrer — point d'entrée unique appelé par les deux pages.
   Chaque page indique seulement le nom de son jeu de liens.
   --------------------------------------------------------------------- */
function demarrer(nomDuJeu) {
  poserTextes();
  poserLiens("liens", nomDuJeu);
}


/* ---------------------------------------------------------------------
   demarrerSections — point d'entrée de la page ressources.
   Séparé de demarrer pour que les deux pages existantes ne dépendent en
   rien du nouveau code.
   --------------------------------------------------------------------- */
function demarrerSections(nomDuJeu) {
  poserTextes();
  poserSections("liens", nomDuJeu);
}
