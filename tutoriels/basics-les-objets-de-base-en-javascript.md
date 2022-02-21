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

Une fonction est une procédure, un "sous-programme" qui peut être appelé plus tard ou ailleurs (et même à l'intérieur de lui-même dans le cas d'une récursion). Comme le programme, une fonction est composée d'une suite d'instructions qui forment son corps ; il est parfois possible de *passer* des valeurs à une fonction (grâce aux arguments) et une fonction peut éventuellement *retourner* (ou *renvoyer*) une valeur lorsqu'elle est exécutée. En gros, c'est un "bloc d'instructions" si on veut, qui contient une série de trucs à faire ou de calculs, et qui peut être appeler quand on a besoin qu'elle fasse "tel truc, tel machin, et puis ça aussi, merci". 

Pour utiliser une fonction, il faut d'abord qu'elle soit déclarée.

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

### Fonctions anonymes

Une fonction anonyme est une fonction sans nom (ou sans identifiant). Elle peut être déclarée dans une variable ou dans l'argument d'une autre fonction, puis exécutée plus tard en appelant soit la variable dans laquelle elle a été déclarée, soit l'argument.
```js
var age = function(num) {
  console.log(num);
  return num;
};

age(319);
```
  
### Nouvelle syntaxe des fonctions
Avec l'édition 6 d'ECMAScript (abrégé ES6 – qui est l'ensemble des normes et des standards d'écriture du langage), un nouveau type de fonctione est introduit : les fonctions fléchées (arrow functions). Dans vos apprentissages ou vos recherches, vous serez sûrement amenés à en croiser quelques-unes, elles ressemble à :
```js
// Fonction anonyme traditionnelle
function (a){
  return a + 100;
}

// Fonction anonyme fléchée
(a) => {
  return a + 100;
}
```
Même si elles sont fantastiques et très utiles dans certains cas de figure, je ne vous encourage pas à les utiliser tout de suite. Par contre, je pense qu'il est important de familiariser vos yeux à leur syntaxe un peu alienne, d'autant qu'elles peuvent être encore plus raccourcies dépendant du contexte comme : `a => a + 100`.
```js
// Pour rester avec des calculs simples, on reprend notre fonction square
// Par contre, on va l'appliquer à la méthode ".map()" d'un objet tableau
// Si vous ne comprenez pas ce qu'elle fait, on y reviendra plus tard
// Pour le moment, on se concentre juste sur les différentes syntaxes de la fonction flechée

// On a une liste de nombres 
var numbers = [10, 14, 18, 32];

// Notre fonction square en version flechée se déclare dans une variable comme ceci :
var square = (number) => {
  return number * number;
}

// Admettons qu'on veuille appliquer ce calcul à notre liste de nombre
// Il arrive qu'une fonction n'ait pas besoin d'être réutilisée ailleurs,
// donc la déclarer dans une variable n'est pas spécialement utile.

// On pourrait juste l'utiliser comme ça :
var result = numbers.map((number) => {
  return number * number;
});
console.log(result);

// On place les arguments entre les parenthèses, comme pour une fonction traditionnelle
// Par contre, les parenthèses sont facultatives s'il n'y a qu'un seul argument
// On peut raccourcir comme ça : 
var result = numbers.map(number => {
  return number * number;
});
console.log(result);

// Lorsqu'une fonction flechée n'a qu'une seule ligne et utilise le mot-clef "return" pour renvoyer une valeur
// Il est possible de retirer le bloc d'accolades ainsi que le mot-clef, pour tout rassembler sur une ligne unique
// Le "return" devient sous-entendu et fonctionne de la même manière
var result = numbers.map(number => number * number);
console.log(result);
```

Maintenant que vous avez une idée de ce à quoi les fonctions fléchées ressemblent, la prochaine fois que vous en croiserez ailleurs vous saurez reconnaître qu'il s'agit simplement d'une fonction un peu plus flexible dans son écriture. Elle possède d'autres particularités et limitations, mais je ne vous conseille pas de les utiliser sur ForumActif. L'éditeur JavaScript du panneau d'aministration ne les reconnaît toujours pas – ou juste parfois, dans certains cas, les jours de pleine lune en juin. 

La syntaxe traditionnelle que j'ai présenté plus haut, avec le mot-clef `function` fonctionne très bien.
```js
var result = numbers.map(function(number) {
  return number * number;
});
console.log(result);
```

### Reconnaître les fonctions

Les fonctions (ou les méthodes lorsqu'il s'agit d'un objet) sont présentes partout et faciles à reconnaître : si vous voyez des parenthèses quelque part et qu'il ne s'agit pas d'une expression mathématique comme `(a + b) * 2`, il est question d'une fonction. Par exemple, l'objet ``console`` que nous avons utilisé plus tôt et qui permet d'écrire dans la console du navigateur possède différentes méthodes (qui sont des fonctions) : `console.log('héhé')` ou `console.error('hoho')`. Vous voyez les parenthèses ? Une fonction est appelée. C'est pareil pour `"SALUT".toLowerCase()` qui permet de mettre une chaîne de caractère en minuscules ; parenthèses -> fonction. 

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

[^2]: La plupart des choses en JS sont des objets en arrière-plan, mais on s'attardera sur le sujet plus tard.
