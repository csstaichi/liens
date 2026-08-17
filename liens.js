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
const VERSION = "00.28.00";
const VERSION_DATE = "16 août 2026";


/* ---------------------------------------------------------------------
   CONDOLEANCES_URL — adresse du guichet qui lit et écrit les messages du
   livre de condoléances.
   À REMPLACER par l'adresse obtenue en publiant le script Apps Script en
   application web. Elle ressemble à :
       https://script.google.com/macros/s/AKfyc.../exec
   Tant qu'elle vaut la chaîne vide, la page affiche un message d'attente
   au lieu d'une erreur.
   ATTENTION : republier le script Apps Script produit une NOUVELLE adresse.
   Celle-ci est donc à revérifier après toute modification de Code.gs.
   --------------------------------------------------------------------- */
const CONDOLEANCES_URL = "https://script.google.com/macros/s/AKfycbwzxGArSt_95p59gVqkmWtQoOCFaA2vGASlOJDSqdTGV6aPLsLUjRYVDBHtP-q1dD2ulw/exec";


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

    // Lien du mot « administrateur ».
    // ADRESSE CONSERVÉE MALGRÉ UN DÉFAUT CONNU, sur consigne : WhatsApp
    // affiche « villa Serbeloni » au lieu du nom de Teva MEYER. Le NUMÉRO
    // est bon, c'est le nom affiché qui est faux. Reliquat probable d'un
    // profil WhatsApp Business ou d'une fiche d'établissement Google
    // rattachée à ce numéro : WhatsApp montre alors le nom commercial
    // vérifié, sans tenir compte des corrections faites côté Google.
    // Cela se corrige dans WhatsApp Business, pas ici. Ne pas remplacer
    // ce lien sans instruction.
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

    // Message le plus important de la page apres les horaires : une seule
    // adhesion ouvre les six cours. Il est place JUSTE SOUS le bandeau de
    // gratuite, avant les fiches, parce qu'il change la facon de les lire.
    plannings_acces: "Une adhésion CSS est valable pour pratiquer indifféremment sur TOUS les sites. Elle donne accès à TOUS les cours, autant de fois par semaine que vous le souhaitez.",

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

    // Thème CONDOLEANCES — livre ouvert après le décès du mari de notre
    // directrice technique. Ton volontairement sobre et sans effet.
    entete_sur_titre_condoleances: "Livre de condoléances",
    entete_sous_titre_condoleances: "En hommage au mari de Yannick GIROUILLE",

    condo_intro: "L'association et ses adhérents adressent à Yannick, à sa famille et à ses proches leurs sincères condoléances et tout leur soutien dans cette douloureuse épreuve.",

    condo_obseques_titre: "Veillée et obsèques",
    condo_veillee: "Veillée le vendredi 21 août à partir de 18h, à Minchiu.",
    condo_inhumation: "Obsèques et inhumation le samedi 22 août à 10h, au cimetière chinois du repos éternel, à Arue.",

    condo_ecrire_titre: "Déposer un message",
    condo_ecrire_intro: "Votre message paraîtra aussitôt sur cette page. Aucune inscription n'est demandée.",
    condo_champ_prenom: "Prénom",
    condo_champ_nom: "Nom",
    // Le nom est facultatif depuis la 00.28.00 : quelqu'un peut vouloir
    // écrire sans se nommer. Sa ligne paraît alors sous une mention neutre.
    condo_champ_nom_libre: "Ces deux champs sont facultatifs. Laissés vides, votre message paraîtra sous la mention « Nom masqué ».",
    condo_anonyme: "Nom masqué",
    condo_champ_message: "Votre message",
    condo_champ_motif: "Un motif pour accompagner votre message",
    condo_bouton: "Déposer mon message",
    condo_envoi: "Envoi en cours…",
    condo_merci: "Merci. Votre message est déposé.",
    condo_erreur: "L'envoi n'a pas abouti. Réessayez dans un instant.",
    condo_manque: "Merci d'écrire votre message.",
    condo_chargement: "Chargement des messages…",
    condo_non_configure: "Le livre n'est pas encore ouvert. Revenez dans quelques instants.",
    condo_compte_un: "message déposé",
    condo_compte_plusieurs: "messages déposés",

    // Modification d'un message déjà déposé. Ouverte à tous, sans clé ni
    // identification : c'est le choix retenu, assumé, et compensé par
    // l'onglet « historique » de la feuille, qui garde chaque version
    // écrasée.
    condo_modifier: "Modifier mon message",
    condo_modif_titre: "Modifier ce message",
    condo_modif_intro: "Corrigez le texte, le nom ou le motif, puis enregistrez. La version précédente est conservée dans le registre de l'association.",
    condo_modif_bouton: "Enregistrer les modifications",
    condo_modif_annuler: "Annuler",
    condo_modif_merci: "Merci. Le message est modifié.",

    // Libellés des six motifs proposés. Ils sont affichés SOUS chaque
    // vignette : un dessin de 48 px ne se nomme pas tout seul.
    motif_coeur: "Cœur",
    motif_ruban: "Ruban",
    motif_chrysantheme: "Chrysanthème",
    motif_couronne: "Couronne",
    motif_arbre: "Arbre",
    motif_billets: "Billets",

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

    /* --- Motifs du livre de condoléances -----------------------------
       Refondus à la 00.28.00. Les six motifs polynésiens de la 00.27.00
       (tiare, feuille, vague, tapa, mains, et l'ancien cœur au trait
       simple) sont RETIRÉS : trop maigres à l'écran, et étrangers au code
       funéraire chinois du lieu d'inhumation.
       POURQUOI ces six-là : ils reprennent les usages du deuil chinois,
       où le blanc est la couleur du deuil et le rouge est proscrit. Les
       tracés étant monochromes et prenant la couleur du texte, aucun
       rouge ne peut apparaître par construction.
       Ils sont dessinés plus denses que les icônes de boutons : ils sont
       affichés à 48 px dans le formulaire, contre 24 px pour un bouton.
       --------------------------------------------------------------- */

    // Cœur blanc. Contour plein, plus un court reflet intérieur qui lui
    // donne du volume sans ajouter de couleur.
    coeur: '<path d="M12 20.6c-1.3-1-7.6-5-7.6-9.9A4.5 4.5 0 0 1 12 7.9a4.5 4.5 0 0 1 7.6 2.8c0 4.9-6.3 8.9-7.6 9.9z"/><path d="M12 17.4c-.9-.8-5-3.5-5-6.6a2.8 2.8 0 0 1 5-1.7 2.8 2.8 0 0 1 5 1.7c0 3.1-4.1 5.8-5 6.6z"/>',

    // Ruban de deuil. Deux pans qui se croisent au milieu et remontent en
    // boucle. C'est la forme universelle du ruban de condoléances.
    ruban: '<path d="M8.4 21.4c1.1-3.6 2.3-6.4 3.6-8.5 1.8-3 3.2-5.2 2.7-6.9-.4-1.4-1.7-2.1-2.9-1.7"/><path d="M15.6 21.4c-1.1-3.6-2.3-6.4-3.6-8.5-1.8-3-3.2-5.2-2.7-6.9.4-1.4 1.7-2.1 2.9-1.7"/>',

    // Chrysanthème, la fleur funéraire de référence en Chine. Cœur plein,
    // douze pétales courts, douze pointes longues en couronne extérieure.
    // Le remplissage du cœur est ce qui le distingue de la couronne à
    // petite taille.
    chrysantheme: '<circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none"/><path d="M13.66 5.82L14.36 3.21M16.53 7.47L18.43 5.57M18.18 10.34L20.79 9.64M18.18 13.66L20.79 14.36M16.53 16.53L18.43 18.43M13.66 18.18L14.36 20.79M10.34 18.18L9.64 20.79M7.47 16.53L5.57 18.43M5.82 13.66L3.21 14.36M5.82 10.34L3.21 9.64M7.47 7.47L5.57 5.57M10.34 5.82L9.64 3.21"/><path d="M12 8.9Q11.22 7.06 12 5.4Q12.78 7.06 12 8.9ZM13.55 9.32Q13.79 7.33 15.3 6.28Q15.15 8.11 13.55 9.32ZM14.68 10.45Q15.89 8.85 17.72 8.7Q16.67 10.21 14.68 10.45ZM15.1 12Q16.94 11.22 18.6 12Q16.94 12.78 15.1 12ZM14.68 13.55Q16.67 13.79 17.72 15.3Q15.89 15.15 14.68 13.55ZM13.55 14.68Q15.15 15.89 15.3 17.72Q13.79 16.67 13.55 14.68ZM12 15.1Q12.78 16.94 12 18.6Q11.22 16.94 12 15.1ZM10.45 14.68Q10.21 16.67 8.7 17.72Q8.85 15.89 10.45 14.68ZM9.32 13.55Q8.11 15.15 6.28 15.3Q7.33 13.79 9.32 13.55ZM8.9 12Q7.06 12.78 5.4 12Q7.06 11.22 8.9 12ZM9.32 10.45Q7.33 10.21 6.28 8.7Q8.11 8.85 9.32 10.45ZM10.45 9.32Q8.85 8.11 8.7 6.28Q10.21 7.33 10.45 9.32Z"/>',

    // Couronne mortuaire : quatorze feuilles inclinées en anneau. Le vide
    // central est ce qui la fait lire comme une couronne et non comme une
    // fleur.
    couronne: '<path d="M10.05 5.03Q12.36 5.49 13.95 3.77Q11.64 3.31 10.05 5.03ZM13.79 4.99Q15.56 6.54 17.81 5.84Q16.04 4.29 13.79 4.99ZM17.06 6.83Q17.81 9.05 20.11 9.57Q19.35 7.35 17.06 6.83ZM18.97 10.05Q18.51 12.36 20.23 13.95Q20.69 11.64 18.97 10.05ZM19.01 13.79Q17.46 15.56 18.16 17.81Q19.71 16.04 19.01 13.79ZM17.17 17.06Q14.95 17.81 14.43 20.11Q16.65 19.35 17.17 17.06ZM13.95 18.97Q11.64 18.51 10.05 20.23Q12.36 20.69 13.95 18.97ZM10.21 19.01Q8.44 17.46 6.19 18.16Q7.96 19.71 10.21 19.01ZM6.94 17.17Q6.19 14.95 3.89 14.43Q4.65 16.65 6.94 17.17ZM5.03 13.95Q5.49 11.64 3.77 10.05Q3.31 12.36 5.03 13.95ZM4.99 10.21Q6.54 8.44 5.84 6.19Q4.29 7.96 4.99 10.21ZM6.83 6.94Q9.05 6.19 9.57 3.89Q7.35 4.65 6.83 6.94Z"/>',

    // Arbre du souvenir : houppier festonné en neuf bosses, tronc,
    // deux branches et la ligne de sol. Le feston est ce qui évite le
    // rond posé sur un bâton.
    arbre: '<path d="M4.6 10.2Q3 8.98 5.05 8.01Q3.86 6.58 6.33 6.09Q5.66 4.39 8.3 4.66Q8.47 2.73 10.72 3.9Q12 2.1 13.28 3.9Q15.53 2.73 15.7 4.66Q18.34 4.39 17.67 6.09Q20.14 6.58 18.95 8.01Q21 8.98 19.4 10.2"/><path d="M4.6 10.2c0 3.5 3.3 6 7.4 6s7.4-2.5 7.4-6"/><path d="M12 20.6v-8.2M12 14.4 9.4 11.9M12 12.9l2.5-2.3"/><path d="M6.8 20.9h10.4"/>',

    // Billets brûlés. Papier-monnaie funéraire offert au défunt : deux
    // feuillets en éventail et trois flammes. Le seul motif du jeu qui
    // nomme explicitement le rite.
    billets: '<path d="M4.9 15.4L13.9 13.4L15.3 19.5L6.3 21.5Z"/><path d="M9 15L18.2 16.2L17.5 21.9L8.3 20.7Z"/><circle cx="13.3" cy="18.5" r="1.15"/><path d="M12 3.8c1.3 1.7 1.9 3 1.9 4.1a1.9 1.9 0 0 1-3.8 0c0-1.1.6-2.4 1.9-4.1z"/><path d="M7 7.6c.9 1.2 1.4 2.1 1.4 2.9a1.4 1.4 0 0 1-2.8 0c0-.8.5-1.7 1.4-2.9z"/><path d="M17 7.6c.9 1.2 1.4 2.1 1.4 2.9a1.4 1.4 0 0 1-2.8 0c0-.8.5-1.7 1.4-2.9z"/>',

    // Motif « non saisi ». JAMAIS proposé dans le formulaire : c'est la
    // valeur de repli, celle qui dit qu'aucun choix n'a été fait. Elle
    // remplace l'ancien repli sur le premier motif de la liste, qui
    // inventait un choix que personne n'avait exprimé.
    sans: '<circle cx="12" cy="12" r="8.8"/><path d="M9.6 9.7a2.5 2.5 0 0 1 4.9.7c0 1.7-2.5 2-2.5 3.7"/><path d="M12 17.5h.01"/>',

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

    // Les numéros viennent de la publication Facebook du 28 mai 2026.
    // Ceux qui n'y figuraient pas sont laissés vides : mieux vaut pas de
    // numéro qu'un numéro inventé. Le champ tel accepte la chaîne vide,
    // le nom s'affiche alors sans lien d'appel.
    // Format d'appel : indicatif 689, puis les huit chiffres sans espace.

    { jour: "Lundi", ile: "tahiti", commune: "FAAA",
      lieu: "Parc de Motu-Ovini, site de Vaitupa",
      horaire: "08h00 – 10h00",
      gens: [
        { nom: "Yannick GIROUILLE", role: "directrice technique instructrice", tel: "87 71 40 10" },
        { nom: "Josiane LI",        role: "assistante remplaçante",            tel: "87 74 13 26" }
      ] },

    { jour: "Mardi", ile: "tahiti", commune: "PIRAE",
      lieu: "Site de la Croix-Rouge",
      horaire: "08h00 – 10h00",
      gens: [
        { nom: "Joséphine TEINAORE", role: "assistante remplaçante", tel: "87 74 44 17" },
        { nom: "Hubert LAU SAN",     role: "assistant remplaçant",   tel: "87 27 54 38" }
      ] },

    { jour: "Mercredi", ile: "moorea", commune: "HAAPITI",
      lieu: "Chez Moea FARNHAM",
      horaire: "14h00 – 16h00",
      gens: [
        { nom: "Timau MARSAULT", role: "instructrice",           tel: "87 75 18 29" },
        { nom: "Hélène DIARA",   role: "assistante remplaçante", tel: "" }
      ] },

    { jour: "Jeudi", ile: "tahiti", commune: "PUNAAUIA",
      lieu: "Parc Vairai, rond-point de l'Université",
      horaire: "08h00 – 10h00",
      gens: [
        { nom: "Yannick GIROUILLE", role: "directrice technique instructrice", tel: "87 71 40 10" },
        { nom: "Josiane LI",        role: "assistante remplaçante",            tel: "87 74 13 26" }
      ] },

    { jour: "Vendredi", ile: "tahiti", commune: "PIRAE",
      lieu: "Site de la Mairie",
      horaire: "08h30 – 10h30",
      gens: [
        { nom: "Joséphine TEINAORE", role: "assistante remplaçante", tel: "87 74 44 17" },
        { nom: "Hubert LAU SAN",     role: "assistant remplaçant",   tel: "87 27 54 38" }
      ] },

    { jour: "Samedi", ile: "moorea", commune: "PAOPAO",
      lieu: "Centre culturel TE PU ATITI'A",
      horaire: "09h00 – 11h00",
      gens: [
        { nom: "Anick LAU",              role: "instructrice",           tel: "87 79 03 39" },
        { nom: "Nadine GUAIS",           role: "instructrice",           tel: "87 74 88 67" },
        { nom: "Anne-Dominique MEYER",   role: "assistante remplaçante", tel: "" }
      ] }
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
              + construireGens(c.gens)
              + "</article>";
    });

    boite.innerHTML = html;
}


/* ---------------------------------------------------------------------
   construireGens — la liste des encadrants d'un cours.
   Chaque nom est suivi de son rôle et, quand il est connu, de son numéro
   rendu appelable d'un doigt.
   POURQUOI le numéro est cliquable : c'est ce qu'on cherche quand on
   hésite à se déplacer un jour de pluie, et recopier huit chiffres à la
   main est le meilleur moyen de renoncer à appeler.
   --------------------------------------------------------------------- */
function construireGens(gens) {
    if (!gens || !gens.length) return "";

    let html = '<ul class="fiche-gens">';

    gens.forEach(function (g) {
        html += "<li>"
              + '<span class="gens-nom">' + g.nom + "</span>"
              + '<span class="gens-role">' + g.role + "</span>";

        if (g.tel) {
            // Indicatif 689 et suppression des espaces : c'est la seule
            // forme que les téléphones composent sans erreur.
            const brut = "+689" + g.tel.replace(/\s/g, "");
            html += '<a class="gens-tel" href="tel:' + brut + '">' + g.tel + "</a>";
        }

        html += "</li>";
    });

    return html + "</ul>";
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


/* =====================================================================
   LIVRE DE CONDOLEANCES
   ---------------------------------------------------------------------
   Les messages ne sont PAS dans ce fichier : ils vivent dans une feuille
   Google, lue et écrite par un script publié en application web. C'est ce
   qui permet à un message de paraître dans la seconde, sans mise en ligne
   et sans que le visiteur ait le moindre compte.
   Modération : la colonne « visible » de la feuille. Passer une ligne à
   « non » retire le message au rechargement suivant.
   ===================================================================== */


/* ---------------------------------------------------------------------
   echapper — neutralise le HTML d'un texte venu de l'extérieur.
   POURQUOI c'est indispensable ici, et nulle part ailleurs : partout dans
   ce portail, les textes viennent du dictionnaire, écrit par
   l'association. Ici ils viennent d'inconnus. Un message contenant une
   balise serait sinon exécuté par le navigateur des autres visiteurs.
   --------------------------------------------------------------------- */
function echapper(texte) {
    return String(texte)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}


/* ---------------------------------------------------------------------
   MOTIFS_PROPOSES — les six motifs offerts au choix, dans l'ordre
   d'affichage. Cette liste doit rester IDENTIQUE à la constante MOTIFS
   de Code.gs : c'est le guichet qui a le dernier mot à l'enregistrement,
   un motif absent de sa liste serait ramené au repli.

   MOTIF_DEFAUT — le motif « non saisi », jamais proposé. Il sert quand la
   cellule est vide, quand le motif est inconnu, ou quand le formulaire est
   envoyé sans choix. POURQUOI ne pas retomber sur le premier de la liste,
   comme jusqu'à la 00.27.00 : cela attribuait à quelqu'un un choix qu'il
   n'avait pas fait.
   --------------------------------------------------------------------- */
const MOTIFS_PROPOSES = ["coeur", "ruban", "chrysantheme", "couronne", "arbre", "billets"];
const MOTIF_DEFAUT = "sans";


/* ---------------------------------------------------------------------
   MESSAGES — dernière liste lue au guichet, gardée en mémoire.
   POURQUOI : quand quelqu'un clique « Modifier mon message », il faut
   retrouver le texte et le motif de la ligne sans redemander le registre.

   LIGNE_EN_COURS — numéro de la ligne en cours de modification dans la
   feuille. Zéro signifie « dépôt d'un message neuf ». C'est ce seul
   nombre qui distingue les deux usages du même formulaire.
   --------------------------------------------------------------------- */
let MESSAGES = [];
let LIGNE_EN_COURS = 0;


/* ---------------------------------------------------------------------
   nomAffiche — le nom sous lequel paraît un message.
   Prénom et nom sont facultatifs depuis la 00.28.00. Quand les deux sont
   vides, on n'affiche NI une ligne blanche NI le mot « anonyme », qui
   sonne comme un reproche : on affiche « Nom masqué », qui dit un choix.
   --------------------------------------------------------------------- */
function nomAffiche(m) {
    const nom = ((m.prenom || "") + " " + (m.nom || "")).trim();
    return nom || DICO.condo_anonyme;
}


/* ---------------------------------------------------------------------
   construireCondoleance — une carte de message signé.
   Les retours à la ligne du message sont conservés : quelqu'un qui écrit
   sa signature sur une ligne à part le fait exprès.
   Le bouton de modification est posé sur CHAQUE carte, sans condition :
   c'est la consigne, personne n'a à prouver qu'il est l'auteur.
   --------------------------------------------------------------------- */
function construireCondoleance(m, rang) {
    const texte = echapper(m.message).replace(/\n/g, "<br>");
    const motif = MOTIFS_PROPOSES.indexOf(m.motif) === -1 ? MOTIF_DEFAUT : m.motif;

    return '<article class="mot" style="--rang:' + Math.min(rang, 12) + '">'
         + '<span class="mot-motif">' + construireIcone(motif) + "</span>"
         + '<p class="mot-texte">' + texte + "</p>"
         + '<p class="mot-signe">'
         + '<span class="mot-nom">' + echapper(nomAffiche(m)) + "</span>"
         + (m.date ? '<span class="mot-date">' + echapper(m.date) + "</span>" : "")
         + "</p>"
         + '<button type="button" class="mot-modifier" data-ligne="' + m.ligne + '">'
         + DICO.condo_modifier + "</button>"
         + "</article>";
}


/* ---------------------------------------------------------------------
   chargerCondoleances — lit le registre et remplit la page.
   En cas d'échec, on le dit sobrement plutôt que de laisser une page
   vide : sur une page de deuil, un écran blanc est déjà une faute.
   --------------------------------------------------------------------- */
async function chargerCondoleances() {
    const boite = document.getElementById("messages");
    const compteur = document.getElementById("compteur");
    if (!boite) return;

    if (!CONDOLEANCES_URL) {
        boite.innerHTML = '<p class="mot-attente">' + DICO.condo_non_configure + "</p>";
        return;
    }

    boite.innerHTML = '<p class="mot-attente">' + DICO.condo_chargement + "</p>";

    try {
        const reponse = await fetch(CONDOLEANCES_URL, { method: "GET" });
        const donnees = await reponse.json();
        MESSAGES = donnees.messages || [];

        boite.innerHTML = MESSAGES.map(construireCondoleance).join("");

        // Un seul écouteur posé sur le conteneur, et non un par carte :
        // les cartes sont réécrites à chaque rechargement, des écouteurs
        // individuels seraient à reposer à chaque fois.
        boite.onclick = function (ev) {
            const b = ev.target.closest(".mot-modifier");
            if (b) ouvrirModification(Number(b.getAttribute("data-ligne")));
        };

        if (compteur) {
            compteur.textContent = MESSAGES.length + " "
                + (MESSAGES.length > 1 ? DICO.condo_compte_plusieurs : DICO.condo_compte_un);
        }
    } catch (err) {
        boite.innerHTML = '<p class="mot-attente">' + DICO.condo_erreur + "</p>";
    }
}


/* ---------------------------------------------------------------------
   ouvrirModification — recharge le formulaire avec un message existant.
   Le formulaire est le MÊME que celui du dépôt : deux formulaires
   distincts finiraient par diverger. Seuls changent son titre, le libellé
   du bouton et la présence du bouton d'annulation.
   --------------------------------------------------------------------- */
function ouvrirModification(ligne) {
    const m = MESSAGES.filter(function (x) { return Number(x.ligne) === ligne; })[0];
    if (!m) return;

    LIGNE_EN_COURS = ligne;

    document.getElementById("prenom").value  = m.prenom || "";
    document.getElementById("nom").value     = m.nom || "";
    document.getElementById("message").value = m.message || "";

    const choix = document.querySelector('input[name="motif"][value="' + m.motif + '"]');
    if (choix) {
        choix.checked = true;
    } else {
        // Le message n'a pas de motif, ou en porte un qui n'est plus
        // proposé : on ne coche rien, pour ne pas décider à sa place.
        const coches = document.querySelectorAll('input[name="motif"]:checked');
        coches.forEach(function (c) { c.checked = false; });
    }

    habillerFormulaire();
    document.getElementById("etat").textContent = "";
    document.querySelector(".condo-form").scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById("message").focus();
}


/* ---------------------------------------------------------------------
   annulerModification — revient au dépôt d'un message neuf.
   --------------------------------------------------------------------- */
function annulerModification() {
    LIGNE_EN_COURS = 0;
    document.getElementById("formulaire").reset();
    document.getElementById("etat").textContent = "";
    document.getElementById("etat").className = "etat";
    habillerFormulaire();
}


/* ---------------------------------------------------------------------
   habillerFormulaire — met le titre, l'intro, le bouton et l'annulation
   au bon état selon LIGNE_EN_COURS. Un seul endroit décide de tout cela.
   --------------------------------------------------------------------- */
function habillerFormulaire() {
    const enModif = LIGNE_EN_COURS > 0;
    const poser = (id, texte) => {
        const e = document.getElementById(id);
        if (e) e.textContent = texte;
    };

    poser("form-titre", enModif ? DICO.condo_modif_titre : DICO.condo_ecrire_titre);
    poser("form-intro", enModif ? DICO.condo_modif_intro : DICO.condo_ecrire_intro);
    poser("envoyer",    enModif ? DICO.condo_modif_bouton : DICO.condo_bouton);

    const annuler = document.getElementById("annuler");
    if (annuler) {
        annuler.textContent = DICO.condo_modif_annuler;
        annuler.hidden = !enModif;
    }

    const cadre = document.querySelector(".condo-form");
    if (cadre) cadre.classList.toggle("condo-form--modif", enModif);
}


/* ---------------------------------------------------------------------
   envoyerCondoleance — dépose un message, ou enregistre la modification
   d'un message existant. Le corps part en text/plain : c'est ce qui évite
   la requête préliminaire CORS, qu'Apps Script ne sait pas traiter. Le
   contenu reste du JSON, seul l'en-tête change.
   --------------------------------------------------------------------- */
async function envoyerCondoleance(evenement) {
    evenement.preventDefault();

    const etat = document.getElementById("etat");
    const bouton = document.getElementById("envoyer");
    const lire = (id) => (document.getElementById(id) || {}).value || "";
    const coche = document.querySelector('input[name="motif"]:checked');

    const donnees = {
        action: LIGNE_EN_COURS > 0 ? "modifier" : "ajouter",
        ligne: LIGNE_EN_COURS,
        prenom: lire("prenom").trim(),
        nom: lire("nom").trim(),
        message: lire("message").trim(),
        // Aucun motif coché : on envoie le motif « non saisi », et non le
        // premier de la liste.
        motif: coche ? coche.value : MOTIF_DEFAUT,
        // Champ piège, masqué par la feuille de style. Un humain ne le
        // remplit jamais ; un robot presque toujours.
        site: lire("site")
    };

    // Seul le message est exigé. Prénom et nom sont facultatifs.
    if (!donnees.message) {
        etat.textContent = DICO.condo_manque;
        etat.className = "etat etat--erreur";
        return;
    }

    bouton.disabled = true;
    etat.textContent = DICO.condo_envoi;
    etat.className = "etat";

    try {
        const reponse = await fetch(CONDOLEANCES_URL, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(donnees)
        });
        const resultat = await reponse.json();

        if (!resultat.ok) throw new Error(resultat.erreur || "refus");

        etat.textContent = LIGNE_EN_COURS > 0 ? DICO.condo_modif_merci : DICO.condo_merci;
        etat.className = "etat etat--merci";

        LIGNE_EN_COURS = 0;
        document.getElementById("formulaire").reset();
        habillerFormulaire();
        await chargerCondoleances();
    } catch (err) {
        etat.textContent = DICO.condo_erreur;
        etat.className = "etat etat--erreur";
    } finally {
        bouton.disabled = false;
    }
}


/* ---------------------------------------------------------------------
   poserMotifs — les six motifs proposés, sous forme de choix illustrés,
   chacun nommé sous sa vignette.
   AUCUN n'est coché au départ : un motif coché d'office serait un choix
   fait à la place du déposant. Sans choix, le message reçoit le motif
   « non saisi ».
   --------------------------------------------------------------------- */
function poserMotifs() {
    const boite = document.getElementById("motifs");
    if (!boite) return;

    boite.innerHTML = MOTIFS_PROPOSES.map(function (nom) {
        return '<label class="motif">'
             + '<input type="radio" name="motif" value="' + nom + '">'
             + '<span class="motif-dessin">' + construireIcone(nom)
             + '<span class="motif-nom">' + DICO["motif_" + nom] + "</span>"
             + "</span>"
             + "</label>";
    }).join("");
}


/* ---------------------------------------------------------------------
   demarrerCondoleances — point d'entrée de la page.
   --------------------------------------------------------------------- */
function demarrerCondoleances() {
    poserTextes();
    poserMotifs();
    poserVersion();
    habillerFormulaire();

    const f = document.getElementById("formulaire");
    if (f) f.addEventListener("submit", envoyerCondoleance);

    const a = document.getElementById("annuler");
    if (a) a.addEventListener("click", annulerModification);

    chargerCondoleances();
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
