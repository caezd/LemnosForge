## Description
Switcheroo est un plugin qui permet de réunir ses multicomptes sur une barre de navigation rapide et d'en changer d'un simple clique. L'interface se veut intuitive, et une fois les prérequis remplis, l'installation et la personnalisation vous permettront d'adapter Switcheroo aux couleurs de votre design.

## Prérequis
Switcheroo nécessite quelques modifications de votre part avant d'être installé. Cette étape est très importante puisque le plugin ne fonctionnera pas sans ces ajustements.

- Il faut autoriser les formulaires non-officiel à poster sur votre forum. Pour ce faire, rien de compliqué : accédez au panneau d'administration et suivez ce chemin `Général › Général › Sécurité`.
   
   Il faudra décocher l'option "Interdire les formulaires non officiels à poster des messages et messages privés sur le forum" et sauvegarder les changements.
   
- Vous devez vous assurez que la Toolbar de ForumActif est activée. Si ce n'est pas le cas, faites-le en suivant ce chemin `Module › Toolbar › Configuration`. Si elle est désactivée parce que vous ne l'utilisez pas, je propose plus bas une solution pour la rendre invisible, ne vous en faites pas.
   
- La barre de navigation principale de votre forum (celle qui permet de faire une recherche, de se connecter, de s'inscrire et de se déconnecter) doit être présente quelque part dans le template `général/overall_header`. Si vous l'avez retiré de votre template pour diverses raisons, je propose plus bas une solution très simple pour la remettre et la cacher.[^1]
   
   [^1]: ++Veuillez noter que la barre de navigation doit être rajoutée manuellement pour tous les forums en version ModernBB, puisque celle-ci est générée dynamiquement en Javascript. La variable `{GENERATED_NAV_BAR}` existe encore même si elle n'est pas dans le template de base.++

{.withCheck}

## Installation

Le plugin en lui-même est très simple à installer. Il comprend deux fichiers Javascript hébergés par mes soins  – ce qui me permettra de pouvoir patcher directement les scripts en cas de besoin et de proposer de futurs mises à jour sans que vous n'ayez à faire quoique ce soit.

Ils s'installent directement dans le template `général/overall_footer_end`, juste avant la fermeture de la balise `</body>`.

``` html
<!-- Barre principale du plugin, dans laquelle la magie s'opère. Certaines valeurs peuvent être modifiées. -->
<nav id="switcheroo" class="switcheroo" direction="vertical" position="top"></nav>

<!-- Monomer.js et Switcheroo.js -->
<script src="https://cdn.jsdelivr.net/gh/caezd/switcheroo@master/monomer.js"></script>
<script src="https://cdn.jsdelivr.net/gh/caezd/switcheroo@master/switcheroo.js"></script>

<!-- Script qui permet d'initialiser le plugin -->
<script>
(function() {
      new Switcheroo('#switcheroo');
})();
</script>
```

Juste avec ces quelques lignes, Switcheroo est installé et fonctionnel ! bien que tout moche et écrasé dans le bas de votre forum. En même temps c'est normal : il manque encore le CSS pour que tout soit beau. Mais pour l'instant, concentrons-nous sur les options disponibles.

## Options

Switcheroo vient avec quelques options qu'il vous est possible de modifier facilement. Elles doivent être ajouter à l'initialisation du plugin pour fonctionner, c'est-à-dire à dans le template où vous il est installé, entre les dernières balises `<script></script>`.

Les options ci-dessous sont celles par défaut :

```js
(function() {
    new Switcheroo('#switcheroo', {
        logo: ' logo ', /* accepte html, permet d'afficher un logo qui retourne à l'accueil du forum */
        enableReorder: true, /* activer le drag&drop pour l'ordre des comptes (true/false) */
        updateAvatar: true, /* activer le clique droit pour charger un nouvel avatar (true/false) */
        confirm: true, /* demande une confirmation avant le changement de compte */
        deleteIcon: '×', /* accepte html, icone pour supprimer un compte lié */
        addIcon: '+', /* accepte html, icone qui ouvre le formulaire de connexion et d'association */
    },
    {
        button: {
            add: "Associer un personnage",
        },
        msg: {
            error: "Une erreur est surviendu lors du Switcheroo.",
            confirm: "Confirmer le Switcheroo de personnage ?",
        },
        modal: {
            password_label: "Mot de passe",
            username_label: "Nom d'utilisateur",
            login_button: "Connexion",
        }
    });
})();
```
- ==Version 1.1.1=={#change-lang} Une nouvelle option permet de customiser tous les textes utilisés par le plugin.

## CSS

Pour ce qui est du CSS maintenant, vous devez l'installer sur votre forum dans sa totalité. Il est complet et vient avec quelques variables pour vous permettre de modifier les couleurs plus facilement.

```css
/*** ------------------------------- ***/
/*** SWITCHEROO - Par Monomer ------ ***/
/*** Gestionnaire de multicompte --- ***/

:root {
    --text: #333;
    --red: #D31141;
    --link: #000;
    --light: #FFF;
    --lighter: #fafafa;
    --grey: #F4F4F4;
    --greyer: #E5E5E5;
    --border: 1px solid #E5E5E5;
    --font: 'Open Sans';
    --gap-size: 16px;
    --ease: cubic-bezier(0.4, 0.0, 0.2, 1);
    --ease-bounce: cubic-bezier(0.43, 0.09, 0.38, 2.56);
}

/* BARRE SWITCHEROO --- */
.switcheroo {}

.switcheroo[position="static"] {
  position: relative;
}

/* si barre EN HAUT */
.switcheroo[position="top"] {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

/* si barre EN BAS */
.switcheroo[position="bottom"] {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
}

/* si barre A L'HORIZONRAL */
.switcheroo[direction="horizontal"] {
  width: 100%;
}

/* si barre A LA VERTICAL */
.switcheroo[direction="vertical"] {
  height: 100%;
}

/* Positionnement des ronds */
.switcheroo__squircles {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  padding: var(--gap-size);
  gap: var(--gap-size);
}
.switcheroo[direction="horizontal"] .switcheroo__squircles {
  flex-direction: row;
}
.switcheroo[direction="vertical"] .switcheroo__squircles {
  flex-direction: column;
}

/* BARRE --- */
.switcheroo {
  color: var(--color-text);
  background-color: var(--light);
  border: var(--border);
  font-size: 16px;
}


/* AFFICHAGE DES COMPTES ---*/

/* Rond */
.switcheroo__squircle {
  position: relative;
  display: grid;
  place-items: center;
  background-color: var(--grey);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: border-radius 128ms var(--ease);
}

/* Rond au survol */
.switcheroo__squircle:hover {
  border-radius: 6px;
  background: var(--greyer)
}

/* Contenenur de l'avatar */
.switcheroo__avatar {}


/* Image de l'avatar */
.switcheroo__avatar img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  transition: border-radius 128ms var(--ease);
  position: relative;
}

/* Image de l'avatar au survol */
.switcheroo__avatar img:hover {
  border-radius: 5px;
}

/* Avatar du compte connecté */
.switcheroo__squircle.active,
.switcheroo__squircle.active img {
  border-radius: 6px;
  cursor: default;
}


/* Indicateur de l'avatar survolé */
.switcheroo__squircle:before {
  content: "";
  display: block;
  background-color: var(--grey);
  border: var(--border);
  border-radius: 50%;
  height: 48px;
  width: 48px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: -5px;
  bottom: 0;
  right: 0;
  left: -5px;
  z-index: -1;
  transform 128ms var(--ease), opacity 64ms var(--ease);
}


/* Indicateur du compte sélectionné/actif */
.switcheroo__squircle.active:before {
  opacity: 1;
  border-radius: 8px;
}

.switcheroo__squircle:hover:before {
    border-radius: 8px;
    opacity: 1;
  transform 128ms var(--ease), opacity 64ms var(--ease);
}


/* Bouton de suppression */
.switcheroo__delete {
  display: grid;
  place-items: center;
  position: absolute;
  width: 16px;
  height: 16px;
  top: -7px;
  right: -7px;
  border-radius: 50%;
  background-color: var(--red);
  transform: scale(0);
  opacity: 1;
  transition: transform 128ms var(--ease), opacity 64ms var(--ease);
  cursor: pointer;
  color: var(--light);
}
.switcheroo__squircle:hover .switcheroo__delete {
  opacity: 1;
  transform: scale(1);
}



/* TOOLTIP - INFOBULLE DU PSEUDO ---*/

/* Conteneur du pseudo */
.switcheroo__popper {
  background-color: var(--text);
  padding: 0.68rem 1rem;
  position: absolute;
  width: -webkit-max-content;
  width: max-content;
  border-radius: 4px;
  z-index: 0;
  opacity: 0;
  transition: opacity 64ms var(--ease), transform 128ms var(--ease-bounce);
  pointer-events: none;
  color: #fff;
}

/* Conteneur du pseudo: si vertical */
.switcheroo[direction="vertical"] .switcheroo__popper {
  left: 155%;
  top: 50%;
  transform-origin: left;
  transform: translateY(-50%) scale(0.98);
}
/* Conteneur du pseudo : si horizontal */
.switcheroo[direction="horizontal"] .switcheroo__popper {
  top: 155%;
  left: 50%;
  transform-origin: top;
  transform: translateX(-50%) scale(0.98);
}

/* Flèche tooltip */
.switcheroo__popper:before {
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: var(--text);
  z-index: -1;
}

/* Flèche tooltip : si vertical */
.switcheroo[direction="vertical"] .switcheroo__popper:before {
  left: -2px;
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
}

/* Flèche tooltip : si horizontal */
.switcheroo[direction="horizontal"] .switcheroo__popper:before {
  left: 50%;
  top: -2px;
  transform: translateX(-50%) rotate(-45deg);
}


/* Positionnement tooltip au survol */
.switcheroo[direction="vertical"] .switcheroo__squircle:hover .switcheroo__popper {
  opacity: 1;
  transform: translateY(-50%) scale(1);
}
.switcheroo[direction="horizontal"] .switcheroo__squircle:hover .switcheroo__popper {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}



/* LOGO --- */
.switcheroo__logo {
  /* display: none */
  /* à ajouter si vous voulez supprimer le logo*/
}

/* DIVIDER : barre de séparation --- */
.switcheroo__divider {
  /* display: none */
  /* à ajouter si vous voulez supprimer le logo*/
  
  background-color: var(--greyer);
  border-radius: 3px;
  transform: scale(0.8);
}

/* Divider : si vertical */
.switcheroo[direction="vertical"] .switcheroo__divider {
  width: 100%;
  height: 2px;
}

/* Divider : si horizontal */
.switcheroo[direction="horizontal"] .switcheroo__divider {
  width: 2px;
}


/* AJOUTER UN COMPTE ---*/

/* button : ajouter un compte */
.switcheroo__squircle--button {
  transition: border-radius 128ms var(--ease);
  color: var(--text);
}
.switcheroo__squircle--button:hover {
  color: var(--light);
  font-weight: bold;
}


/* MODAL : FENETRE DE CONNEXION --- */

/* Fond de l'afficage connexion */
.monomer-overlay {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  transition: 0.2s opacity ease;
  background: rgba(255, 255, 255, 0.6);
}

/* Boîte de connexion */
.monomer-modal {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  opacity: 0;
  width: 94%;
  padding: 24px 20px;
  transition: 0.2s opacity ease;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background: var(--grey);
  border: var(--border);
  color: var(--text);
}

/* Formulaire */
.switcheroo__form {
  padding: 48px;
  background: var(--light);
  border-radius: 5px;
}

/* Champs à remplir */
.switcheroo__form-row {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  margin-bottom: 16px;
}

/* Nom du champs */
.switcheroo__form-label {
  margin-bottom: 8px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
}

/* Zone de texte */
.switcheroo__form-input {
  padding: 6px;
  font-size: 16px;
  border-radius: 4px;
  width: 100%;
  background-color: var(--light);
  border: var(--border)!important;
  border-bottom: 3px solid var(--greyer)!important;
  color: var(--text);
  cursor: text;
}

/* Bouton de connexion */
.switcheroo__form-button {
  border-radius: 8px;
  padding: 4px 6px;
  border: none;
  outline: none;
  box-shadow: none;
  text-transform: uppercase;
  font-size: 14px;
  align-self: flex-end;
  background-color: var(--light);
  border: var(--border);
  cursor: pointer;
}

.switcheroo__form-button:hover {
  border: 1px solid transparent;
  background: var(--text);
  color: var(--light);
}

.monomer-modal.monomer-open, .monomer-overlay.monomer-open {
  opacity: 1;
}

/* Fermer la boîte de connexion */
.monomer-close {
  font-size: 20px;
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  position: absolute;
  top: -7px;
  right: -7px;
  padding: 5px;
  cursor: pointer;
  color: #fff;
  border: 0;
  outline: none;
  background: var(--red);
  border-radius: 50%;
  padding: 0;
}
.monomer-close:hover {
  background: var(--text);
  font-weight: 700;
}
```

