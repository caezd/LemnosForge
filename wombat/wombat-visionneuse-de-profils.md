## Description

Wombat est une visionneuse de profil qui permet de charger et d'ouvrir le profil des membres directement sur la page active, sans la recharger ou en changer, dans un volet indépendant (ou un drawer, comme on les appelle). Il n'empêche pas les visiteurs de consulter la page standard en l'ouvrant dans un nouvel onglet.

## Prérequis

Wombat ne fonctionne pas avec l'affichage des profils avancés de ForumActif.

* Pour les désactiver, il faudra passer par votre panneau d'administration et naviguer jusqu'aux options générales des profils : `Utilisateurs & Groupes > Profils > Options générales` et [désactiver les profils avancés](https://i.imgur.com/uqvPrAf.png).
{.withCheck}

## Installation

Pour installer la formule "de base" de Wombat, il vous faudra tout simplement modifier les templates `général/overall_footer_end` et `profil/profile_view_body`, ainsi qu'ajouter un bout de CSS.

### HTML

Nous commencerons par ajouter le script dans le template `overall_footer_end`, juste avant la fermeture de la balise `</body>` :

```html
<!-- Wombat.js -->
<script src="https://cdn.jsdelivr.net/gh/caezd/wombat/dist/wombat.min.js"></script>

<!-- Script qui permet d'initialiser le plugin -->
<script>
    (function() {
	new Wombat();
    })();
</script>
```

Ensuite, il faudra ajouter un identifiant dans le template `profil/profile_view_body` pour spécifier quelle partie du profil sera importée dans le panneau latéral de Wombat. 

Il faudra certainement planifier cette partie à l'avance, dans votre design ou dans la structure générale dudit template. Pour ma part, j'ai décidé d'épurer les profils en ne laissant que l'avatar du membre et ses boutons de contact.

Notez que dans cet exemple, l'attribut `hidden` me permet juste de cacher ce bout de code quand les profils sont consultés sur leur page d'origine (s'ils sont ouverts dans un nouvel onglet, ou redirigés par un lien externe, etc.).
{.info}

```diff
+ <div class="panel bg1" id="wombat" hidden>
    <div class="wombat-avatar">{AVATAR_IMG}</div>
    ...
 </div>
```

Seulement cette partie du profil sera affichée grâce à Wombat. Tant que l'identifiant `id="wombat"` est quelque part dans ce template, tout ce qu'il contient sera chargé dans le panneau latéral.

### CSS

Le CSS doit être ajouté sur votre forum avec le reste de votre style. Celui que je fournis de base est certes très simpliste, à vous de l'adapter à votre goût :

```css
/* obfuscator */
.wombat-overlay {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    width: 100%;
    height: 100%;
    transition: 0.2s opacity ease;
    background: rgba(0, 0, 0, 0.3);
}

/* la classe open est ajoutée pour la transition */
.wombat-overlay.open {
    opacity: 1;
    visibility: visible;
}

/* volet*/
.wombat-aside {
    position: fixed;
    z-index: 1000;
    transition: 0.2s all ease;
    visibility: hidden;
    opacity: 0;
    height: 100vh;
    width: 40vw;
    transform: translateX(-20%);
    box-shadow: 0 0 20px rgba(0, 0, 0, .8);
    background: rgba(255, 255, 255, 0.94);
}

/* la classe open est ajoutée pour la transition */
.wombat-aside.open {
    opacity: 1;
    transform: translateX(0);
    visibility: visible;
}
```

## Options

Comme n'importe quel autre plugin, Wombat vient avec quelques options qui vous permettent un contrôle un peu plus pointu. Elles doivent être déclarées en même temps que l'initialisation du script, qu'on a placé plus haut dans le template `général/overall_footer_end`, comme ceci :

```js
(function() {
	new Wombat({
        option: valeur
	});
})();
```

**displayOnLoad** `string`  `'block' par défaut`
: Permet d'appliquer un style `display` particulier sur le profil une fois qu'il sera chargé dans le volet.

**afterLoad** `function` `arguments: aside, overlay`
: Cette fonction sera appelée en *callback* une fois le profil chargé dans le volet, vous permettant ainsi d'appliquer un script supplémentaire pour, par exemple, modifier la structure des champs de profils, appliquer une couleur de groupe quelque part, etc. Le premier argument de la fonction est un HTMLElement ciblant le volet dans lequel le profil est ajouté. Le deuxième argument cible directement l'obfuscateur derrière, au besoin.

    ```js
      /* exemple */
      new Wombat({
          afterLoad: function(aside, overlay) {
              var color = aside.querySelector('#rang').style.color;
              aside.querySelector('.rank-header').style.backgroundColor = color;
          }
      });
    ```

**allowGuests** `boolean` `false par défaut`
: Si un invité essaie de consulter le profil d'un membre, Wombat refusera tout simplement la requête pour éviter une erreur via la redirection du formulaire de connexion (pour les forums avec des profils privés). Toutefois, si les invités sont autorisés à consulter les profils, vous pouvez contourner cette sécurité grâce à la valeur `true`.

**excludes** `array` `[] par défaut`
: Il vous est possible de limiter le déclenchement de Wombat pour certains profils en utilisant un tableau de sélecteurs CSS. Il sera interprété de cette façon, grâce au pseudo-classe de négation : `a[href^="/u"]:not(${exclusions})`. Par exemple, pour empêcher Wombat sur le profil du compte fondateur, il faudrait faire comme ceci :

    ```js
      /* exemple */
      new Wombat({
          excludes: ['[href="/u1"]']
      });
    ```

**overlayClass** `string` `'wombat-overlay' par défaut`
: Classe CSS attribuée par défaut à l'obfuscateur de Wombat.

**drawerClass** `string` `'wombat-aside' par défaut`
: Classe CSS attribuée par défaut au panneau latéral de Wombat.
