Dans ce tutoriel, nous prendrons quelques minutes pour comprendre la syntaxe des objets en JavaScript puisque que bon nombre des fonctionnalités que vous traiterez avec ce langage sont en fait... des objets.

## Mais c'est quoi, un objet ?

Un objet est un amalgame de données et/ou de fonctionnalités associées dans un même corps. Celles-ci consistent généralement en plusieurs variables et fonctions (appelées proprétés et méthodes lorsqu'elles se trouvent à l'intérieur d'un objet).

## Variables

Une variable est un emplacement ***nommé*** qui permet de conserver une valeur quelconque. Plus tard, grâce à ce nom prédéterminé, il est possible d'accéder à cette valeur et la réutiliser. Le nom d'une variable, aussi appelé *identifiant*, doit respecter certaines règles :

> Un identifiant JavaScript doit commencer par une lettre, un tiret bas (\_) ou un symbole dollar ($). Les caractères qui suivent peuvent être des chiffres (0 à 9) ou des lettres (A à Z). Veuillez noter que le JavaScript est sensible à la case des lettres et que `monNom` et `monnom` sont reconnus comme deux identifiants différents.

Il existe trois types de déclarations de variable en JavaScript et chacune d'elles fonctionne différemment.
- L'instruction `var` (pour variable) permet de déclarer une variable et éventuellement d'initialiser sa valeur. Elle peut être déclarée sans valeur dans certains cas (à l'extérieur d'une boucle ou d'une fonction par exemple), puis assignée plus tard.
  ```js 
    var username = 'Monomer';
    var age = 319;
    var lang = 'FR';
    var _id, _msg, _etc;
    
    console.log(username, age, _id);
    
    // écrit dans la console : 'Monomer', 319, '' (parce que variable vide)
  ```
- L'instruction `let` permet aussi de déclarer une variable dont la portée est celle du bloc courant. Si elle est déclarée dans une fonction, elle sera disponible uniquement à l'intérieur de celle-ci ; si elle est déclarée à l'extérieur, elle sera considée comme *globale* au même titre que `var`. 
  ```js 
    let username = 'Monomer';
    let age = 319;
    
    function language() {
      let _lang = 'FR';
      console.log(_lang);
    }
    
    console.log(username, age, _lang);
    // écrit dans la console : 'Monomer', 319, et undefined
    
    language();
    // si on exécute la fonction, _lang est définie à l'intérieur de celle-ci et écrit bien 'FR' dans la console
  ```
- `const`
### Let

## Fonctions
