# TP10 : FrontEnd du back Kanban

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## RUN BACKEND 

Cette partie représente le frontend du backend Kanban (https://gitlab.istic.univ-rennes1.fr/hmallouky/TP2_Part2).
Il faut donc lancer le back afin de pouvoir lancer le front. Suivez les instructions décrites dans le Readme pour le lancer.

## RUN FRONTEND 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## DETAILS 

La première page permet d'afficher tous les utilisateurs listés dans un tableau. 
- Il possible d'**ajouter** un utilisateur en cliquant sur le bouton Ajouter. Un formulaire de type modal apparaît pour ensuite remplir les informations.(Aucune contrainte n'est requise :D)
- On peut également **visualiser les Kanbans** (ainsi que les sections et fiches ) de chaque utilisateur en cliquant sur le bouton Kanban. 
- Et finalement on peut **supprimer** un utilisateur en cliquant sur supprimer. 
NB : On ne peut pas supprimer un utilisateur si celui-ci possède des kanbans dans le système. 
