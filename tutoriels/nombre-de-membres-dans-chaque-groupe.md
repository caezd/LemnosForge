La dernière mise à jour de ForumActif en date (décembre 2021) ajoutait une nouvelle fonctionnalité à la page des groupes : le dénombrement des membres qui sont présents dans chacun d'eux. Vous pouvez retrouver la publication de cette nouveauté sur le [forum officiel du support](https://forum.forumactif.com/t406331-amelioration-de-la-page-groupes "Amélioration de la page Groupes") si les détails vous intéressent.

En elle-même, cette nouveauté semble assez risible, mais elle me permet de revisiter une tentative d'indiquer le nombre de membres par groupe dans le qui est en ligne d'un forum sous la forme d'un graphique en anneau (aussi appelé donut-chart). J'en avais fait un pour Projet Lazarus, mais il n'était pas représentatif d'une distribution authentique des effectifs. Par soucis de permormances, il calculait les membres à partir de ceux connectés dans les dernières 24 heures plutôt que de charger dynamiquement en ajax chaque page de chaque groupe afin d'en faire le décompte.

#[Qui est en ligne sur le dernier design de Projet Lazarus](https://i.imgur.com/KtyPY6y.png)

Cet exemple n'est plus très parlant maintenant que le forum est fermé et qu'aucun membre ne s'est connecté dans les dernières heures, mais chaque segment de couleur représentait un groupe et s'élargissait proportionnellement en fonction du nombre de membres connectés.

J'ai décidé de revoir mon approche maintenant que cette mise à jour nous permet de récupéter tous les effectifs de tous les groupes en une seule requête, et de partager avec vous deux façons de faire.
1. Un affichage simple dans une liste formattée et stylisée
2. Un affichage graphique, soit en "donut-chart" soit un "pie-chart"

## Prérequis

Pour commencer, si ce n'est pas déjà le cas (pour les forums créés avant la mise à jour - sinon l'affichage de la liste des groupes est activé par défaut pour les plus récemment créés), il faudra se diriger dans le panneau d'administration et rendre visibles tous les groupes en suivant ce chemin : `Utilisateurs & Groupes > Groupes > Administration des groupes`. 

[Nous pouvons maintenant voir la liste de tous les groupes](https://i.servimg.com/u/f14/09/00/01/33/liste-10.png)



Afficher tous les groupes visibles sur la page "Groupes" du forum : choisissez "Oui" ou "Non" et enregistrez les modifications. Notez que l'affichage de la liste des groupes est activé par défaut.

. J'ai utilisé
Dans cet exemple, chaque couleur du donut correspondait à un groupe et était dessiné grâce à la librairie [https://www.chartjs.org/](Chart.js) que je recommence fortement pour sa simplicité.

https://stackoverflow.com/questions/30712621/pure-css3-or-svg-animated-doughnut-chart
