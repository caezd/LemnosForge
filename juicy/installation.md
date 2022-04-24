<article>Attention, ce plugin n'est pas à portée de tous. Bien qu'il soit simple à installer, il demande une bonne connaissance en JavaScript pour être utilisé et compris pleinement.</article>

## Description

Juicy est un plugin qui permet de réécrire de manière plus flexible le template d'affichage du profil des membres. C'est une sorte de [Template Engine](https://en.wikipedia.org/wiki/Template_processor) qui récupère et extrait toutes les informations nécessaires dans des nouvelles variables qui vous permettra d'en faire ce que vous voulez et de les placer de n'importe quelle façon.

## Prérequis

- Assurez-vous de <u>désactiver</u> les profils avancé sur votre forum : il faudra installer le script directement dans le template des profils simplifiés et modifier votre HTML dans celui-ci.
{.withCheck}

## Limites et restrictions

Juicy n'est pas très intelligent. Comme la plupart des Template Engine côté client (c'est à dire exécutés depuis le navigateur, une fois la page chargée), il compile le HTML et l'insère dans le DOM grâce à `innerHTML`. Si vous comptez utiliser/manipuler le DOM compilé à l'aide d'évènements (comme `click` ou `hover`), il vous faudra :

- Soit déléguer les évènements sur le `document`[^1]
- Soit initialiser/appeler vos scripts une fois la fonction `render` appelée grâce à une fonction callback `app.render(callback)`. Prenez note aussi que la fonction `render` retourne une Promesse et qu'il est possible de faire la même chose grâce à `app.render().then(callback)`.

## Installation

Pour l'installation, il vous faudra simplement <u>remplacer absoluement tout le corps</u> du template `profile_view_body`, situé dans la catégorie **Profil** par ceci ce code :

```html
<script type="text/template" id="juicy">
  <p>Ce pseudo : "{{= username }}" est compilé grâce à juicy !</p>
  [:debug]
</script>

<div hidden id="juicy-app">
  
  <var title="username">{USERNAME}</var>
  <var title="avatar">{AVATAR_IMG}</var>
  <var title="rank">{POSTER_RANK}</var>
  
  <!-- BEGIN switch_show_status -->
  <var title="online">{USER_ONLINE}</var>
  <!-- END switch_show_status -->
  <!-- BEGIN switch_allow_friendsfoes -->
  <var title="friendfoes">{FRIENDSFOES}</var>
  <!-- END switch_allow_friendsfoes -->
  <!-- BEGIN switch_auth_user -->
  <var title="admin">{ADMINISTRATE_USER}</var>
  <var title="ban">{BAN_USER}</var>
  <!-- END switch_auth_user -->
  <!-- BEGIN switch_awards -->
  <var title="award">{switch_awards.AWARDS_LIST}</var>
  <!-- END switch_awards -->
  <!-- BEGIN profile_field -->
  <var title="field" data-id="{profile_field.ID}">
  <span>{profile_field.LABEL}</span>
  <span>{profile_field.CONTENT}</span>
    <!-- BEGIN profil_type_user_posts -->
    <var title="total_percent_msg">{POST_PERCENT_STATS}</var>
    <var title="total_daily_msg">{POST_DAY_STATS}</var>
    <var title="all_topics_opened"><a rel="nofollow" href="/st/{PUSERNAME}">{L_SEARCH_USER_POSTS}</a></var>
    <var title="all_by_topics"><a rel="nofollow" href="/sta/{PUSERNAME}">{L_TOPICS}</a></var>
    <var title="all_by_messages"><a rel="nofollow" href="/spa/{PUSERNAME}">{L_POSTS}</a></var>
    <!-- END profil_type_user_posts -->
  </var>
  <!-- END profile_field -->
  
  <!-- contact -->
  <var title="last_visit">{LAST_VISIT_TIME}</var>
  <!-- BEGIN switch_dhow_mp -->
  <var title="privmsg_count">{PRIVATE_MSG}</var>
  <!-- END switch_dhow_mp -->
  
  <!-- BEGIN contact_field -->
  <var title="contact" data-id="{contact_field.ID}">
    <span>{contact_field.LABEL}</span>
    <span>{contact_field.CONTENT}</span>
  </var>
  <!-- END contact_field -->
  
  <!-- BEGIN switch_rpg -->
  <!-- BEGIN rpg_fields_left -->
  <var title="rpg">
    <span>{switch_rpg.rpg_fields_left.F_NAME}</span>
    <span>{switch_rpg.rpg_fields_left.F_VALUE_NEW}</span>
  </var>	
  <!-- END rpg_fields_left -->
  <!-- BEGIN rpg_fields -->
  <var title="rpg">
    <span>{switch_rpg.rpg_fields.F_NAME}</span>
    <span>{switch_rpg.rpg_fields.F_VALUE_NEW}</span>
  </var>
  <!-- END rpg_fields -->
  <var title="rpg_image">{RPG_IMAGE}</var>
  <!-- END switch_rpg -->
  
</div>


<!-- Juicy.js -->
<script src="https://cdn.jsdelivr.net/gh/caezd/juicy@latest/dist/juicy.js"></script>

<!-- Initialisation du plugin -->
<script>
document.addEventListener("DOMContentLoaded", function(){

	var app = new Juicy('#juicy-app', {
	  template: '#juicy',
	  data: {
	  	excludes: ['']
	  }
	});
	app.render();

});  
</script>
```
