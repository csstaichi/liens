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
   VERSION — affichée en bas à droite de chaque page.
   POURQUOI ici et non dans le HTML : trois pages l'affichent, une seule
   valeur doit exister. À mettre à jour à CHAQUE livraison, en même temps
   que le nom du zip, sinon la page ment sur ce qu'elle est.
   --------------------------------------------------------------------- */
const VERSION = "00.21.00";
const VERSION_DATE = "16 août 2026";


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
    entete_sur_titre_ressources: "Ressources Externes",
    entete_sous_titre_ressources: "Lectures, chaînes et musiques",

    // Thème SECTION — les intertitres de la page ressources.
    section_lire: "À lire",
    section_regarder: "À regarder",
    section_ecouter: "À écouter",

    // Thème AVERTISSEMENT — affiché en bas de la page ressources.
    // POURQUOI il est ici et non dans le HTML : c'est un texte, il suit la
    // même règle que tous les autres.
    avertissement_ressources: "Ces contenus appartiennent à leurs auteurs, cités sous chaque titre, et restent leur propriété exclusive. Ils sont extérieurs à l'association, qui n'en revendique aucun droit. Certains ne sont plus mis à jour et peuvent ne pas refléter l'évolution des connaissances ou des doctrines.",

    // Thème DEMANDE — encadré de la page adhérents expliquant comment
    // obtenir l'accès aux deux conversations de groupe.
    // POURQUOI cet encadré : les deux groupes sont en approbation par un
    // administrateur, aucun lien ne permet donc de « demander à entrer ».
    // Sans explication, un adhérent qui clique sur le bouton WhatsApp et
    // attend, ou qui ne trouve pas Messenger, reste sans réponse.
    demande_titre: "Rejoindre nos conversations",
    // Le mot « administrateur » est un lien : liens.js le remplace par une
    // balise a discrète, qui clignote pour se signaler sans être soulignée
    // comme un lien ordinaire. Le texte reste une phrase à lire.
    demande_texte: "L'entrée dans les deux groupes est validée par un administrateur. Écrivez-nous pour en faire la demande.",
    demande_mot_lien: "administrateur",

    // ADRESSE À VÉRIFIER : construite depuis le numéro 89 74 07 82, préfixé
    // de l'indicatif 689 de la Polynésie française. wa.me ouvre WhatsApp sur
    // la conversation directe. Si le numéro n'est pas sur WhatsApp, ou si
    // c'est une autre messagerie qui était visée, changer cette seule ligne.
    demande_lien_admin: "https://wa.me/68989740782",
    demande_messenger: "Pour le groupe Messenger : indiquez votre pseudo Messenger et la photo de votre profil, afin que nous puissions vous identifier.",
    demande_whatsapp: "Pour le groupe CSS ADHÉRENTS OFFICIEL POLYNÉSIE : indiquez votre numéro de téléphone.",

    // Thème VERSION — repère de version affiché en bas de la page adhérents.

    // Thème TEST — mot affiché à côté du titre d'un bouton en cours de
    // vérification. Il clignote. À retirer avec le drapeau « test: true »
    // de l'entrée concernée, quand le lien est confirmé.
    mention_test: "En test",

    // Thème PLANNINGS — en-tête, avertissements et contact de la page
    // des horaires de cours.
    entete_sur_titre_plannings: "Plannings",
    entete_sous_titre_plannings: "Nos cours de tai chi, du lundi au samedi",

    plannings_gratuit: "Nos cours sont gratuits",

    avert_titre: "À savoir avant de venir",
    avert_arue: "Le site de ARUE est momentanément suspendu.",
    avert_feries: "Pas de cours à PIRAE ni ARUE les jours fériés.",
    avert_meteo: "Les séances peuvent être déplacées, annulées ou reportées selon la météo, la disponibilité des coachs ou des sites.",
    avert_whatsapp: "Les cotisants sont prévenus dans le groupe WhatsApp CSS ADHÉRENTS OFFICIEL POLYNÉSIE.",

    contact_titre: "Direction technique et formations",
    contact_nom: "Yannick GIROUILLE",
    contact_tel: "87 70 14 60",
    // Format international, seul reconnu par les téléphones : indicatif
    // 689 de la Polynésie française, sans espaces ni zéro initial.
    contact_tel_lien: "tel:+68987701460",

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

    // Carte bancaire : rectangle, bande magnétique, puce et deux lignes de
    // numéro. Pour la cotisation, réglée par carte.
    // POURQUOI aucun logo de réseau n'est dessiné : Visa, Mastercard et les
    // autres sont des marques déposées, leur reproduction n'est pas libre.
    // Une carte générique dit la même chose et n'engage personne.
    carte_bancaire: '<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 9.5h19"/><rect x="5" y="12.5" width="4" height="3" rx="0.7"/><path d="M13 15h5.5"/>',

    // Pirogue à balancier : coque, mât et flotteur. Pour le repas, qui se
    // tient d'une île à l'autre.
    bateau: '<path d="M3 16.5c1.6 1.4 3.2 2.1 4.8 2.1s3.2-.7 4.8-2.1c1.6 1.4 3.2 2.1 4.8 2.1s3.2-.7 4.6-2.1"/><path d="M5.5 14.5h13l-1.6-3.5H7.1z"/><path d="M12 11V4l4 3.2"/>',

    // Logo de l'association, retracé au trait : le cercle, la flamme
    // verticale et l'anneau incliné. Pour le bouton qui mène à l'ensemble
    // des campagnes de l'association.
    css: '<circle cx="12" cy="12" r="9.2"/><path d="M12.4 4.6c1.5 2.6 1.4 5.1.2 7.4-1.1 2.1-1.3 4.2-.2 6.4"/><ellipse cx="12" cy="13.1" rx="6.4" ry="2.6" transform="rotate(-13 12 13.1)"/>',

    // Calendrier : un cadre, deux anneaux de reliure et une ligne de
    // separation. Pour la page des horaires.
    calendrier: '<rect x="3" y="5.5" width="18" height="15" rx="2.5"/><path d="M3 10h18M8 3v4M16 3v4"/>',

    // Epingle de carte : goutte inversee et point central. Pour situer un
    // lieu de pratique.
    epingle: '<path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',

    // Enveloppe : un rectangle et le pli du rabat.
    // Pour l'adresse de courriel de l'association.
    enveloppe: '<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M3.5 7.5l8.5 6 8.5-6"/>',

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
        precision: "Taichi Intégral - CSS Moorea Tahiti : Actualités et photos",
        url: "https://www.facebook.com/TaiChi.CSSMooreaTahiti"
    },

    campagnes: {
        icone: "css",
        libelle: "Toutes nos inscriptions",
        precision: "HelloAsso, paiement sécurisé par carte : campagnes ouvertes",
        url: "https://www.helloasso.com/associations/css-moorea-tahiti-compassionate-service-society-moorea"
    },

    boutique: {
        icone: "sac",
        libelle: "La Boutique de Aurore",
        precision: "HelloAsso, Polos, T-Shirts, Casquettes - paiement sécurisé par carte",
        url: "https://www.helloasso.com/associations/css-moorea-tahiti-compassionate-service-society-moorea/boutiques/css-moorea-tahiti-boutique-helloasso"
    },

    cotisation: {
        icone: "carte_bancaire",
        libelle: "Cotisation 2026",
        precision: "HelloAsso, paiement sécurisé par carte : adhésion annuelle 3000 Fcfp",
        url: "https://www.helloasso.com/associations/css-moorea-tahiti-compassionate-service-society-moorea/adhesions/rcot"
    },

    // ATTENTION : l'URL fournie contient le segment /beta/. Ce segment est un
    // chemin de prévisualisation HelloAsso : il cesse de répondre à la mise
    // en ligne définitive de la campagne. L'adresse est conservée telle
    // quelle parce que c'est celle qui fonctionne aujourd'hui ; la variante
    // sans /beta/ figure dans le LISEZ-MOI, à substituer après vérification.
    repas: {
        icone: "bateau",
        libelle: "Ma'a Tahiti Motu Moorea EVT04 RSM2",
        precision: "HelloAsso : samedi 13/09/2026",
        url: "https://www.helloasso.com/beta/associations/css-moorea-tahiti-compassionate-service-society-moorea/adhesions/evt04-rsm2-maa-tahiti-moorea-13-09-2026-n-2"
    },

    whatsapp: {
        icone: "bulle",
        libelle: "Groupe Whatsapp CSS ADHÉRENTS OFFICIEL POLYNÉSIE",
        precision: "Entrée validée par les admins, leur écrire pour demander à rejoindre",
        url: "https://chat.whatsapp.com/CkyNlNTTmqr361x3k1Qkaz"
    },

    // Version PUBLIQUE du bouton Messenger. Le fil de groupe n'expose aucun
    // lien d'invitation : Messenger n'en propose pas quand l'approbation par
    // l'admin est active, les deux réglages s'excluent. Le seul chemin
    // utilisable par une personne extérieure est donc d'écrire à la page,
    // puis d'être ajoutée à la main.
    messenger_demande: {
        icone: "bulles",
        libelle: "Groupe Messenger CSS géré par Aurore",
        precision: "Écrivez-nous pour entrer",
        url: "https://m.me/TaiChi.CSSMooreaTahiti"
    },

    // Version ADHÉRENTS du même bouton. RÉTABLIE à la 00.15.00 : l'adresse
    // fonctionne, à condition d'aller au bout de la connexion et du code
    // PIN, ce qui explique l'échec du premier essai.
    // Le drapeau « test » ci-dessous fait clignoter le bouton en orange, le
    // temps de vérifier dans quels cas il échoue encore. Retirer la ligne
    // « test: true » quand ce sera confirmé.
    messenger_groupe: {
        icone: "bulles",
        libelle: "Groupe Messenger CSS géré par Aurore",
        precision: "Taichi Intégral 2026",
        test: true,
        url: "https://www.facebook.com/messages/t/9060096560708706"
    },

    site: {
        icone: "globe",
        libelle: "csstahitimoorea.org",
        precision: "Notre site : cours, documents",
        url: "https://www.csstahitimoorea.org/accueil"
    },

    videos: {
        icone: "video",
        libelle: "Les vidéos",
        precision: "Revoir les postures",
        url: "https://www.csstahitimoorea.org/postures-mcn-can10"
    },

    // --- Ressources externes.
    // Le libellé porte le titre COMPLET de l'oeuvre, la précision porte son
    // auteur, précédé de « by » et suivi du symbole de copyright.
    // POURQUOI les titres ne sont plus raccourcis : ce sont des titres
    // d'oeuvres appartenant à leurs auteurs, les abréger reviendrait à les
    // altérer. Les boutons de cette page peuvent donc dépasser 68 px, à la
    // différence de ceux des deux autres pages.
    // POURQUOI ce couple : ces contenus ne sont pas ceux de l'association,
    // ils appartiennent à leurs auteurs. Afficher le nom de l'auteur sous le
    // titre, c'est le créditer à l'endroit où l'on renvoie vers lui, et non
    // seulement dans un avertissement que personne ne lit.
    // Titres et auteurs fournis par l'association, non déduits.

    r_integral: {
        icone: "actualites",
        libelle: "Integral Taichi Intro",
        precision: "by Master Hang Truong © — non maintenu",
        url: "https://integral-taichi.blogspot.com/2010/11/integral-taichi-intro1.html"
    },

    r_happy50: {
        icone: "globe",
        libelle: "La vie après 50 ans, entre quinquagénaires",
        precision: "by Ralph MAAMAATUAIAHUTAPU ©",
        url: "https://happy-50plus.com/"
    },

    r_tao: {
        icone: "globe",
        libelle: "Concevoir la vie autrement",
        precision: "by Théo CABAL ©",
        url: "https://taoetspiritualite.fr/"
    },

    r_chakra: {
        icone: "actualites",
        libelle: "Le concept du chakra",
        precision: "by Théo CABAL ©",
        url: "https://taoetspiritualite.fr/le-concept-du-chakra"
    },

    r_jargon: {
        icone: "actualites",
        libelle: "École Gilles THIBAULT, Taïjiquan, Qigong et Kung-Fu",
        precision: "by Gilles THIBAULT ©",
        url: "https://t-j-q.com/dotcl/index.php/post/2006/09/08/48-le-jargon-les-cinq-2"
    },

    // L'adresse a été reconstruite depuis l'identifiant @masterhengchang,
    // seul élément fourni au départ, puis vérifiée : elle répond.
    r_hangtruong: {
        icone: "video",
        libelle: "Thay Hang Truong, chaîne YouTube",
        precision: "by Thay Hang Truong ©",
        url: "https://www.youtube.com/@masterhengchang"
    },

    r_khainghiem: {
        icone: "video",
        libelle: "Khai Nghiem, chaîne YouTube",
        precision: "by Khai Nghiem ©",
        url: "https://www.youtube.com/@khainghiem5644/videos"
    },

    r_compassheart: {
        icone: "video",
        libelle: "CompaSS Heart, chaîne YouTube",
        precision: "by HoaNghiemPhapVong ©",
        url: "https://www.youtube.com/@HoaNghiemPhapVong"
    },

    // Chaîne @siliconband. Le titre affiché est celui donné par
    // l'association, plus parlant que le nom de la chaîne elle-même.
    r_minhchau: {
        icone: "musique",
        libelle: "Musique vietnamienne, voyages, Taichi Intégral",
        precision: "by Nhạc Nguyễn Minh Châu ©",
        url: "https://www.youtube.com/@siliconband"
    },

    // Playlist en lecture automatique. Production COMPASS FRANCE.
    r_radio: {
        icone: "musique",
        libelle: "Les Postures du CK10, version traditionnelle, COMPASS FRANCE",
        precision: "by Nhạc Nguyễn Minh Châu ©",
        url: "https://www.youtube.com/watch?v=cLwjfZXo8KE&list=RDcLwjfZXo8KE&start_radio=1"
    },

    // Page des horaires de cours, hébergée avec le portail.
    // POURQUOI elle ne renvoie pas vers le site de l'association : cette
    // adresse figure aussi sur la page PUBLIQUE, qui ne doit citer aucune
    // adresse csstahitimoorea.org.
    plannings: {
        icone: "calendrier",
        libelle: "Nos plannings de cours",
        precision: "Horaires et lieux, du lundi au samedi",
        url: "https://csstaichi.github.io/liens/plannings.html"
    },

    // Adresse de courriel de l'association, confirmée à la 00.19.00 :
    // cssmooreatahiti@gmail.com, la même que les comptes GitHub et Google.
    // La 00.16.00 portait csstahitimoorea@gmail.com, avec les deux mots
    // dans l'ordre inverse : c'était une erreur, corrigée ici.
    courriel: {
        icone: "enveloppe",
        libelle: "Nous écrire",
        precision: "cssmooreatahiti@gmail.com",
        url: "mailto:cssmooreatahiti@gmail.com"
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
        "plannings",
        "facebook",
        "cotisation",
        "repas",
        "boutique",
        "campagnes",
        "whatsapp",
        "messenger_demande",
        "courriel"
    ],

    // ADHÉRENTS — dix boutons.
    // Le site arrive en tête : c'est la raison d'être de cette page.
    adherents: [
        "plannings",
        "site",
        "videos",
        "musiques",
        "cotisation",
        "repas",
        "boutique",
        "campagnes",
        "whatsapp",
        "messenger_groupe",
        "facebook",
        "courriel"
    ]
};


/* ---------------------------------------------------------------------
   PLANNINGS — les cours de la semaine.
   POURQUOI une structure a part et non des entrees de LIENS : ce ne sont
   pas des liens. Une fiche de cours ne se clique pas, elle se lit. Lui
   donner l'apparence d'un bouton tromperait le lecteur.
   Chaque fiche : jour, ile, lieu, precision de lieu, horaire, encadrants.
   L'ile sert aussi de couleur, pour distinguer Tahiti de Moorea d'un coup
   d'oeil.
   POUR MODIFIER UN COURS : une seule fiche a changer ici.
   --------------------------------------------------------------------- */
const PLANNINGS = [

    { jour: "Lundi", ile: "tahiti", commune: "FAAA",
      lieu: "Parc de Motu-Ovini, site de Vaitupa",
      horaire: "08h00 – 10h00",
      gens: "Yannick GIROUILLE, directrice technique instructrice, et/ou Josiane LI, assistante remplaçante" },

    { jour: "Mardi", ile: "tahiti", commune: "PIRAE",
      lieu: "Site de la Croix-Rouge",
      horaire: "08h00 – 10h00",
      gens: "Joséphine TEINAORE et Hubert LAU SAN, assistants remplaçants" },

    { jour: "Mercredi", ile: "moorea", commune: "HAAPITI",
      lieu: "Chez Moea FARNHAM",
      horaire: "14h00 – 16h00",
      gens: "Timau MARSAULT, instructrice, et Hélène DIARA, assistante remplaçante" },

    { jour: "Jeudi", ile: "tahiti", commune: "PUNAAUIA",
      lieu: "Parc Vairai, rond-point de l'Université",
      horaire: "08h00 – 10h00",
      gens: "Yannick GIROUILLE, directrice technique instructrice, et/ou Josiane LI, assistante remplaçante" },

    { jour: "Vendredi", ile: "tahiti", commune: "PIRAE",
      lieu: "Site de la Mairie",
      horaire: "08h30 – 10h30",
      gens: "Joséphine TEINAORE et Hubert LAU SAN, assistants remplaçants" },

    { jour: "Samedi", ile: "moorea", commune: "PAOPAO",
      lieu: "Centre culturel TE PU ATITI'A",
      horaire: "09h00 – 11h00",
      gens: "Anick LAU et Nadine GUAIS, instructrices, et Anne-Dominique MEYER, assistante remplaçante" }
];


/* ---------------------------------------------------------------------
   SECTIONS — la page ressources, découpée en groupes titrés.
   POURQUOI une structure séparée de JEUX plutôt qu'une modification de
   JEUX : les deux pages existantes utilisent JEUX depuis la 00.01.00 et
   fonctionnent. On ajoute à côté, on ne touche à rien.
   Chaque groupe : une clé de DICO pour le titre, puis ses liens.
   --------------------------------------------------------------------- */
const SECTIONS = {

    ressources: [
        {
            titre: "section_lire",
            liens: ["r_integral", "r_happy50", "r_tao", "r_chakra", "r_jargon"]
        },

        {
            titre: "section_regarder",
            liens: ["r_hangtruong", "r_khainghiem", "r_compassheart"]
        },

        {
            titre: "section_ecouter",
            liens: ["r_minhchau", "r_radio"]
        }
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

    // Le drapeau « test » ajoute un mot clignotant après le titre. Il ne
    // touche plus à la bordure du bouton : le cadre orange se confondait
    // avec les bordures ordinaires et ne disait pas ce qu'il signifiait.
    const marque = item.test
        ? ' <span class="lien-test">' + DICO.mention_test + "</span>"
        : "";

    return '<a class="lien" href="' + item.url + '" target="_blank" rel="noopener" '
        + 'style="--rang:' + rang + '">'
        + '<span class="lien-ico">' + construireIcone(item.icone) + "</span>"
        + '<span class="lien-txt">'
        + '<span class="lien-libelle">' + item.libelle + marque + "</span>"
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
   poserPlannings — écrit les fiches de cours dans le conteneur donné.
   Aucune balise a : ces fiches ne sont pas cliquables, seul le numéro de
   téléphone du bas de page l'est.
   --------------------------------------------------------------------- */
function poserPlannings(idConteneur) {
    const boite = document.getElementById(idConteneur);
    if (!boite) return;

    let html = "";

    PLANNINGS.forEach(function (c, rang) {
        html += '<article class="fiche fiche--' + c.ile + '" style="--rang:' + rang + '">'
              + '<p class="fiche-jour">' + c.jour + "</p>"
              + '<p class="fiche-commune">'
              + '<span class="fiche-ico">' + construireIcone("epingle") + "</span>"
              + c.commune + "</p>"
              + '<p class="fiche-lieu">' + c.lieu + "</p>"
              + '<p class="fiche-horaire">' + c.horaire + "</p>"
              + '<p class="fiche-gens">' + c.gens + "</p>"
              + "</article>";
    });

    boite.innerHTML = html;
}


/* ---------------------------------------------------------------------
   poserTelephone — rend le numéro de contact appelable d'un doigt.
   POURQUOI : sur téléphone, recopier un numéro à la main est le meilleur
   moyen de ne pas appeler du tout.
   --------------------------------------------------------------------- */
function poserTelephone() {
    const el = document.getElementById("telephone");
    if (!el) return;
    el.innerHTML = '<a class="lien-tel" href="' + DICO.contact_tel_lien + '">'
                 + DICO.contact_tel + "</a>";
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
    poserLienAdmin();
}


/* ---------------------------------------------------------------------
   poserLienAdmin — transforme un mot de la phrase en lien cliquable.
   POURQUOI ce détour plutôt qu'un lien écrit dans le HTML : la phrase
   vient du dictionnaire, elle est posée en textContent, donc sans balise.
   On la repose ici en remplaçant le seul mot voulu, ce qui garde le texte
   modifiable en un seul endroit.
   textContent d'abord, innerHTML ensuite et sur une chaîne construite
   ici : rien de ce que contient le dictionnaire n'est interprété comme du
   code.
   --------------------------------------------------------------------- */
function poserLienAdmin() {
    const el = document.querySelector('[data-dico="demande_texte"]');
    if (!el) return;

    const mot = DICO.demande_mot_lien;
    const url = DICO.demande_lien_admin;
    if (!mot || !url) return;

    const phrase = DICO.demande_texte || "";
    const i = phrase.indexOf(mot);
    if (i === -1) return;

    el.innerHTML = phrase.slice(0, i)
        + '<a class="lien-admin" href="' + url + '" target="_blank" rel="noopener">'
        + mot + "</a>"
        + phrase.slice(i + mot.length);
}


/* ---------------------------------------------------------------------
   poserVersion — écrit la version et sa date dans l'élément prévu.
   Silencieuse si l'élément n'existe pas, pour qu'une page qui ne
   l'afficherait pas ne provoque aucune erreur.
   --------------------------------------------------------------------- */
function poserVersion() {
    const el = document.getElementById("version");
    if (el) el.textContent = "v" + VERSION + " — " + VERSION_DATE;
}


/* ---------------------------------------------------------------------
   demarrer — point d'entrée unique appelé par les deux pages.
   Chaque page indique seulement le nom de son jeu de liens.
   --------------------------------------------------------------------- */
function demarrer(nomDuJeu) {
    poserTextes();
    poserLiens("liens", nomDuJeu);
    poserVersion();
}


/* ---------------------------------------------------------------------
   demarrerSections — point d'entrée de la page ressources.
   Séparé de demarrer pour que les deux pages existantes ne dépendent en
   rien du nouveau code.
   --------------------------------------------------------------------- */
function demarrerPlannings() {
    poserTextes();
    poserPlannings("liens");
    poserTelephone();
    poserVersion();
}


/* ---------------------------------------------------------------------
   demarrerSections — point d'entrée de la page ressources.
   --------------------------------------------------------------------- */
function demarrerSections(nomDuJeu) {
    poserTextes();
    poserSections("liens", nomDuJeu);
    poserVersion();
}
