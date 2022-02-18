Dans ce premier petit cours, nous prendrons quelques minutes pour comprendre les bases de la syntaxe de JavaScript.

## Variables

Une variable est un emplacement ***nommé*** qui permet de conserver une valeur quelconque. Plus tard, grâce à ce nom prédéterminé, il est possible d'accéder à cette valeur et la réutiliser. Le nom d'une variable, aussi appelé *identifiant*, doit respecter certaines règles.[^1]

[^1]: Un identifiant JavaScript doit commencer par une lettre, un tiret bas (\_) ou un symbole dollar ($). Les caractères qui suivent peuvent être des chiffres (0 à 9) ou des lettres (A à Z). Veuillez noter que le JavaScript est sensible à la case des lettres et que `monNom` et `monnom` sont reconnus comme deux identifiants différents.

Il existe trois types de déclarations de variable en JavaScript et chacune d'elles fonctionne différemment.
- Le mot-clef `var` (pour variable) permet de déclarer **une variable** et éventuellement d'initialiser sa valeur. Elle peut être déclarée sans valeur dans certains cas (à l'extérieur d'une boucle ou d'une fonction par exemple), puis assignée plus tard.
  ```js 
    var username = 'Monomer'; // valeur de type 'string'
    var age = 319; // valeur de type 'number'
    var lang = 'FR'; // valeur de type 'string'
    var _id, _msg, _etc; // valeur de type undefined
    
    console.log(username, age, _id);
    
    // écrit dans la console : 'Monomer', 319, undefined (parce que variable vide)
  ```
- Le mot-clef `let` permet aussi de déclarer **une variable** dont la portée est celle du bloc courant. Si elle est déclarée dans une fonction, elle sera disponible uniquement à l'intérieur du bloc de ladite fonction ; si elle est déclarée à l'extérieur, elle sera considée comme *globale* au même titre que `var`. 
  ```js 
    let username = 'Monomer'; // valeur de type 'string'
    let age = 319; // valeur de type 'number'
    
    function language() {
      let _lang = 'FR';
      console.log(username, _lang);
    }
    
    console.log(username, age, _lang);
    // écrit dans la console : 'Monomer', 319, et undefined
    
    language();
    // si on exécute la fonction, _lang est définie à l'intérieur de celle-ci et la console imprimera bien : 'Monomer', 'FR'
  ```
- Le mot-clef `const` permet de déclarer **une constante**. Elle fonctionne exactement comme `let` (donc soumise à la portée du bloc courant), à la seule différence qu'elle ne pourra pas être modifiée d'une quelconque manière par la suite. C'est une variable en béton ou en ciment, adoubée par la Reine et signée par notaire.
  ```js
  const username = 'Monomer';
  
  username = 'Mademoiselle Petits Pieds';
  
  // si on essaie de changer sa valeur, on aura une erreur qui ressemble à
  // TypeError: invalid assignment to const 'username'
  ```

## Fonctions

Une fonctionne est une procédure, ou un "bloc d'instructions" si on veut, qui contient un ensemble d'instructions, de calculs ou de "fait tel, tel, et tel truc pour moi, merci". Pour utiliser une fonction, il faut d'abord qu'elle soit déclarée.

```js
function nom(argument_1, argument_2, etc) {
  // instructions de la fonction
}

function square(number) {
  return number * number;
}
```

- Le nom est l'*identifiant* d'une fonction et doit respecter les mêmes conventions de nommage qu'une variable[^1]. Dans l'exemple, le nom de la variable est `square`.
- Entre les parenthèses se trouvent les *arguments* de la fonction. Ils agissent comme des variables `let` déclarées à l'avance (sans le mot-clef) et peuvent être utilisées uniquement à l'intérieur de leur fonction. Dans l'exemple, l'argument `number` est déclaré entre les parenthèses et utilisé plus tard, juste en dessous.
- L'instruction de la fonction est exécuté ligne après ligne et peut faire toutes sortes de choses. Dans l'exemple, la fonction `square` utilise le mot-clef `return` qui renvoie l'argument de la fonction `number` multiplié par lui-même.
  ```js
  var result = square(9);
  
  console.log(result)
  // écrit 81 dans la console : la fonction est exécutée comme une valeur et non comme une fonction, grâce au mot-clef "return"
  ```

### Reconnaître les fonctions

Les fonctions (ou les méthodes lorsqu'il s'agit d'un objet) sont présentes partout et faciles à reconnaître : si vous voyez des parenthèses quelque part et qu'il ne s'agit pas d'une expression mathématique comme `(a + b) * 2`, il est question d'une fonction. Par exemple, l'objet ``console`` que nous avons utilisé plus tôt et qui permet d'écrire dans la console du navigateur possède différentes méthodes (qui sont des fonctions) : `console.log('héhé')` ou `console.error('hoho')`. Vous voyez les parenthèses ? Une fonction est appelée. C'est pareil pour `"SALUT".toLowerCase()` qui permet de mettre une chaîne de caractère en minuscules ; parenthèses -> fonction. 
  
### Fonctions anonymes

Une fonction anonyme est une fonction sans nom (ou sans identifiant). Elle peut être déclarée dans une variable ou dans l'argument d'une autre fonction, puis exécutée plus tard en appelant soit la variable, soit l'argument.
```js
var age = function(num) {
  console.log(num);
  return num;
};

age(319);
```


### Nouvelle syntaxe des fonctions

## Tableaux
Les tableaux sont des objets[^2] semblables à des listes dont le prototype (comprendre : fonctions héritées/innées) possède des méthodes qui permettent de parcourir et de modifier le tableau.

## Objets
Un objet est un amalgame de données et/ou de fonctionnalités associées dans un même corps. Celles-ci consistent généralement en plusieurs variables et fonctions (appelées proprétés et méthodes lorsqu'elles se trouvent à l'intérieur d'un objet).

```js
var profil = {}
```

### Fonctions anonymes

Une fonction anonyme


### Nouvelle syntaxe des fonctions
~~## Mais c'est quoi, un objet ?Un objet est un amalgame de données et/ou de fonctionnalités associées dans un même corps. Celles-ci consistent généralement en plusieurs variables et fonctions (appelées proprétés et méthodes lorsqu'elles se trouvent à l'intérieur d'un objet).~~

[^2]: La plupart des choses en JS sont des objets, mais on s'attardera sur le sujet plus tard.
