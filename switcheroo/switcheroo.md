## Description
Switcheroo est un plugin qui permet de réunir ses multicomptes sur une barre de navigation rapide et d'en changer d'un simple clique. L'interface se veut intuitive, et une fois les prérequis remplis, l'installation et la personnalisation vous permettront d'adapter Switcheroo aux couleurs de votre design.

## Prérequis
Switcheroo nécessite quelques modifications de votre part avant d'être installé. Cette étape est très importante puisque le plugin ne fonctionnera pas sans ces ajustements.

- Il faut autoriser les formulaires non-officiel à poster sur votre forum. Pour ce faire, rien de compliqué : accédez au panneau d'administration et suivez ce chemin `Général › Général › Sécurité`.
   
   Il faudra décocher l'option "Interdire les formulaires non officiels à poster des messages et messages privés sur le forum" et sauvegarder les changements.
   
- Vous devez vous assurez que la Toolbar de ForumActif est activée. Si ce n'est pas le cas, faites-le en suivant ce chemin `Module › Toolbar › Configuration`. Si elle est désactivée parce que vous ne l'utilisez pas, je propose plus bas une solution pour la rendre invisible, ne vous en faites pas.
   
- La barre de navigation principale de votre forum (celle qui permet de faire une recherche, de se connecter, de s'inscrire et de se déconnecter) doit être présente quelque part sur toutes les pages. Si vous l'avez retiré de votre template pour diverses raisons, je propose plus bas une solution très simple pour la remettre et la cacher.
   
   ++Veuillez noter qu'elle devra être ajoutée manuellement sur tous les forums en version ModernBB. La variable existe encore même si elle n'est pas dans le template de base.++

{.withCheck}

## Installation

Le plugin en lui-même est très simple à installer. Il comprend deux fichiers Javascript hébergés par mes soins  – ce qui me permettra de pouvoir patcher directement les scripts en cas de besoin et de proposer de futurs mises à jour sans que vous n'ayez à faire quoique ce soit.

Ils s'installent directement dans le template `général/template overall_footer_end`, juste avant la fermeture de la balise `</body>`.

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
