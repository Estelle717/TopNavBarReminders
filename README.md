# TopNavBarReminders

Le but de ce projet est de creer une application qui affichera des rappels a des moments reguliers et predefinis pour certaines habitudes ou certains actes a effectuer.  
Au moins dans un premier temps, cette application fonctionnera sous la forme d'une extension de navigateur chrome.  
L'application doit repondre a certains criteres.  

Les criteres pour la version 1 sont les suivants:  
    - chaque notification doit contenir:  
        * un symbole representant l'habitude,  
        * l'heure du rappel,  
        * quelques mots pour decrire l'action a effectuer  
    - la notification ne doit pas empecher la navigation  
    - la notification doit pouvoir disparaitre en un clic  
    - les informations ne doivent pas se perdre si la page est fermee, si la session est fermee, ou si l'ordinateur est eteint  
    - le stockage ne doit durer que la journee  
    - l'extension doit offrir la possibilite d'ajouter une nouvelle habitude  

Les tests de fonctionnement de l'extension peuvent se faire a travers le hardcodage de la premiere habitude -- boire regulierement de l'eau (rappel toutes les deux heures a partir de 10h du matin jusqu'a 10h du soir).

