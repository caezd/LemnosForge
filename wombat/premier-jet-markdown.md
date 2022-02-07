
#wombat #profil #javascript

## Description

Wombat est une visionneuse de profil qui permet de charger et d'ouvrir le profil des membres directement sur la page active, sans la recharger ou en changer, dans un volet indépendant <ins>(ou un drawer, comme on les appelle)</ins>.

## Prérequis
<p>Wombat ne fonctionne pas avec l'affichage des profils avancés de ForumActif.</p>
<ul class="withCheck"><li>Pour les désactiver, il faudra passer par votre panneau d'administration et naviguer jusqu'aux options générales des profils : [b]Utilisateurs & Groupes > Profils > Options générales[/b] et [url=https://i.imgur.com/uqvPrAf.png]désactiver les profils avancés[/url].</li>

</ul>

<h2>Installation</h2>
<p>Pour installer la formule "de base" de Wombat, il faudra simplement modifier les templates <code>overall_footer_end</code> et <code>profile_view_body</code>, ainsi qu'ajouter un bout de CSS.</p>
<p>Pour commencer, nous ajouterons le script dans le template <code>overall_footer_end</code>, juste avant la fermeture de la balise <code>&lt;/body&gt;</code>.</p>


```htmldiff
<!-- Wombat.js -->
<script src="https://cdn.jsdelivr.net/gh/caezd/switcheroo@master/wombat.js"></script>

+<!-- Script qui permet d'initialiser le plugin -->
<script>
(function() {
     new Wombat();
})();
</script>
```

Le CSS doit être ajouté sur votre forum, comme n'importe quel autre CSS. Il peut être modifié facilement pour s'adapter au design de votre forum.

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
.wombat-aside.open {
 opacity: 1;
 transform: translateX(0);
 visibility: visible;
}```

<h2>Options</h2>
<p>Comme n'importe quel autre plugin, Wombat vient avec quelques options qui vous permet un contrôle un peu plus pointu. Elles doivent être déclarées en même temps que l'initialisation du script, qu'on a placé plus haut dans le template <code>overall_footer_end</code>, comme ceci :</p>
```html
<script>
(function() {
     new Wombat({
         option: valeur
     });
})();
</script>```

<dl>
<dt>[b]displayOnLoad[/b] <code>string</code> <code>'block'</code></dt>
<dd>Permet <del><em>d'appliquer un style</em></del> <code>display</code> particulier sur le profil une fois qu'il sera chargé dans le volet.</dd>
<dt>[b]afterLoad[/b] <code>function</code> <code>arguments: aside, overlay</code></dt>
<dd>Cette fonction sera appelée en <i>callback</i> une fois le profil chargé dans le volet vous permettant de réutiliser un script pour, par exemple, modifier la structure des champs de profils, appliquer une couleur de groupe quelque part, etc. <ins>Le premier argument de la fonction est un HTMLElement ciblant le volet dans lequel le profil est ajouté. Le deuxième argument cible directement l'obfuscateur derrière, au besoin.</ins>
```js
/* exemple */
new Wombat({
   afterLoad: function(aside, overlay) {
       var color = aside.querySelector('#rang').style.color;
       aside.querySelector('.rank-header).style.backgroundColor = color;
   }
});
```
</dd>
<dt>[b]overlayClass[/b] <code>string</code> <code>'wombat-overlay'</code></dt>
<dd></dd>
<dt>[b]drawerClass[/b] <code>string</code> <code>'wombat-aside'</code></dt>
<dd></dd>
</dl>
