<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends AbstractController{

  public function index()
    {
      $choices = [
        "size" => [
          "small" => ["label" => "S", "price" => 9],
          "medium" => ["label" => "M", "price" => 11],
          "family" => ["label" => "Famille", "price" => 16]
        ],
        "type" => [
          "napoli" => ["label" => "Épaisse", "price" => 1],
          "roma" => ["label" => "Fine", "price" => 0],
        ],
        "base" => [
          "tomato" => ["label" => "Sauce tomate", "price" => 1],
          "cream" => ["label" => "Crême fraîche", "price" => 1],
          "mozza" => ["label" => "Mozzarella", "price" => 0],
        ],

        "ingredients" => [
          "ham" => ["label" => "Épaule", "price" => 2, "veggy" => false],
          "mushrooms" => ["label" => "Champignons", "price" => 1, "veggy" => true],
          "chorizo" => ["label" => "Chorizo", "price" => 2, "veggy" => false],
          "chicken" => ["label" => "Poulet", "price" => 2, "veggy" => false],
          "tomato" => ["label" => "Tomates séchées", "price" => 1, "veggy" => true],
          "pepperoni" => ["label" => "Poivrons", "price" => 1, "veggy" => true],
          "ananas" => ["label" => "Ananas", "price" => 3, "veggy" => true],
          "eggplant" => ["label" => "Aubergine", "price" => 2, "veggy" => true],
          "salmon" => ["label" => "Saumon", "price" => 3, "veggy" => false],
        ],

        "toppings" => [
          "egg" => ["label" => "Œuf", "price" => 2, "veggy" => true],
          "pepper" => ["label" => "Piment", "price" => 0, "veggy" => true],
          "oregano" => ["label" => "Origan", "price" => 0, "veggy" => true],
          "coriander" => ["label" => "Coriandre", "price" => 0, "veggy" => true],
          "mozza" => ["label" => "Double Mozza", "price" => 2, "veggy" => true],
          "lards" => ["label" => "Lardons", "price" => 2, "veggy" => false],
        ]

      ];

        return $this->render('index.html.twig', ["choices" => $choices]);
    }

}