Attention, ce plugin n'est pas à portée de tous. Bien qu'il soit simple à installer, il demande une bonne connaissance en JavaScript pour être utilisé et compris pleinement. Et ce, même s'il vient avec quelques exemples, dont une réécriture complète du template par défaut de chaque version !{.info}

## Description

Gooey est un plugin qui permet de réécrire de manière plus flexible le template d'affichage des catégories et des forums sur l'index d'un forum. C'est une sorte de [Template Engine](https://en.wikipedia.org/wiki/Template_processor) qui récupère toutes les informations nécessaires (catégories, forums, sous-forums, etc.) et permet d'en faire ce que vous voulez (de le placer n'importe où, dans n'importe quel ordre).

## Prérequis

- Assurez-vous de séparer les catégories sur l'index de votre forum panneau d'administration dans `Affichage > Page d'accueil > Structure et hiérarchie`. Je conseille également une compression "moyenne" des forums. C'est également à cet endroit que vous pouvez choisir d'afficher ou non le titre et l'avatar du dernier message.
- Les forums orphelins (c'est-à-dire n'appartenant à aucune catégorie, comme la corbeille sur un forum fraichement créé) seront ignorés par le plugin.
{.withCheck}