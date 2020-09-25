# pizzaiolr

Etape 1 : 
  - formulaire de création
  - récapitulatif de la commande

 Etape 2 :
  - préalablement au formulaire, choix de la formule qui limite les options du formulaire : calculer le prix
  - alternative : proposer la formule avec le meilleur prix

 Etape 3 :
  - stocker les commandes en base de données
  - les afficher sur une interface d'administration

 Etape 4 : payer


 # Prix à la carte

 - Pâte (select) : épaisse (1) ; fine (0)
 - Taille (select) : S (9), M (11), Famille (16)
 - Fond (radio) : tomate (1) ; crême (1) ; mozza (0)
 - Garnitures (checkbox) : épaule (2) ; champignons (1) ; chorizo (2) ; poulet (2) ; tomate (1) ; poivrons (1) ; ananas (3) ; aubergine (2)
 - Extra (checkbox) : oeuf (2) ; piment (0); origan (0); coriande (0); double mozza (2) ; lardons (1)


 # Formules

 ## à la carte 
   - (somme des ingrédients)
 ## formules solo :
   - petite faim (1 S ; 2 garnitures ; 1 extra) : 11
   - maxi faim (1M ; 3 garnitures ; 2 extra) : 15
   - végé (S ou M ; 3 garnitures (uniquement végé) ; 1 extra (uniquement végé)) : 12
 ## formule duo :
    - 2 pizzas, S ou M ; 2 garnitures chaque ; 2 extra chaques : (20 les deux)
