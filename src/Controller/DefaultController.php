<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends AbstractController{

  public function index()
    {
      $choices = [
        "size" => [
          "small" => ["id" => "small", 
                      "label" => "S",
                      "price" => 9],
          "medium" => ["id" => "medium", 
                      "label" => "M",
                      "price" => 11],
          "family" => ["id" => "family", 
                      "label" => "Famille",
                      "price" => 16]
        ],
        "type" => [
          "napoli" => ["id" => "napoli", 
                      "label" => "Épaisse",
                      "price" => 1],
          "roma" => ["id" => "roma", 
                      "label" => "Fine",
                      "price" => 0],
        ],
        "base" => [
          "tomato" => ["id" => "tomato", 
                      "label" => "Sauce tomate",
                      "price" => 1],
          "cream" => ["id" => "cream", 
                      "label" => "Crême fraîche",
                      "price" => 1],
          "mozza" => ["id" => "mozza", 
                      "label" => "Mozzarella",
                      "price" => 0],
        ],

        "ingredients" => [
          "ham" => ["id" => "ham", 
                      "label" => "Épaule", "price" => 2,
                      "veggy" => false],
          "mushrooms" => ["id" => "mushrooms", 
                      "label" => "Champignons", "price" => 1,
                      "veggy" => true],
          "chorizo" => ["id" => "chorizo", 
                      "label" => "Chorizo", "price" => 2,
                      "veggy" => false],
          "chicken" => ["id" => "chicken", 
                      "label" => "Poulet", "price" => 2,
                      "veggy" => false],
          "tomato" => ["id" => "tomato", 
                      "label" => "Tomates séchées", "price" => 1,
                      "veggy" => true],
          "pepperoni" => ["id" => "pepperoni", 
                      "label" => "Poivrons", "price" => 1,
                      "veggy" => true],
          "ananas" => ["id" => "ananas", 
                      "label" => "Ananas", "price" => 3,
                      "veggy" => true],
          "eggplant" => ["id" => "eggplant", 
                      "label" => "Aubergine", "price" => 2,
                      "veggy" => true],
          "salmon" => ["id" => "salmon", 
                      "label" => "Saumon", "price" => 3,
                      "veggy" => false],
        ],

        "toppings" => [
          "egg" => ["id" => "egg", 
                      "label" => "Œuf", "price" => 2,
                      "veggy" => true],
          "pepper" => ["id" => "pepper", 
                      "label" => "Piment", "price" => 0,
                      "veggy" => true],
          "oregano" => ["id" => "oregano", 
                      "label" => "Origan", "price" => 0,
                      "veggy" => true],
          "coriander" => ["id" => "coriander", 
                      "label" => "Coriandre", "price" => 0,
                      "veggy" => true],
          "mozza" => ["id" => "mozza", 
                      "label" => "Double Mozza", "price" => 2,
                      "veggy" => true],
          "lards" => ["id" => "lards", 
                      "label" => "Lardons", "price" => 2,
                      "veggy" => false],
        ]

      ];

        return $this->render('index.html.twig', ["choices" => $choices]);
    }

}