<article>Attention, ce plugin n'est pas à portée de tous. Bien qu'il soit simple à installer, il demande une bonne connaissance en JavaScript pour être utilisé et compris pleinement.</article>

## Description

Gooey est un plugin qui permet de réécrire de manière plus flexible le template d'affichage des catégories et des forums sur l'index d'un forum. C'est une sorte de [Template Engine](https://en.wikipedia.org/wiki/Template_processor) qui récupère toutes les informations nécessaires (catégories, forums, sous-forums, etc.) et permet d'en faire ce que vous voulez (de le placer n'importe où, dans n'importe quel ordre).

## Prérequis

- Assurez-vous de séparer les catégories sur l'index de votre forum panneau d'administration dans `Affichage > Page d'accueil > Structure et hiérarchie`. Je conseille également une compression "moyenne" des forums. C'est également à cet endroit que vous pouvez choisir d'afficher ou non le titre et l'avatar du dernier message.
- Les forums orphelins (c'est-à-dire n'appartenant à aucune catégorie, comme la corbeille sur un forum fraichement créé) seront ignorés par le plugin.
{.withCheck}

## Limites et restrictions

Gooey n'est pas très intelligent. Comme la plupart des Template Engine côté client (c'est à dire exécutés dans le navigateur), il compile le HTML et l'insère dans le DOM grâce à `innerHTML`. Si vous comptez utiliser/manipuler le DOM compilé à l'aide d'évènements (comme `click` ou `hover`), il vous faudra :

- Soit déléguer les évènements sur le `document`[^1]
- Soit initialiser/appeler vos scripts une fois la fonction `render` appelée grâce à une fonction callback `app.render(callback)`. Prenez note aussi que la fonction `render` retourne une Promesse et qu'il est possible de faire la même chose grâce à `app.render().then(callback)`.