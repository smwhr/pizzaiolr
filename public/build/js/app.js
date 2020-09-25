console.log("Pizzaiolr")

var app = angular.module('pizzaiolr',[]);

app.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.controller('OrderController', ['$scope', function($scope) {
  var $ctrl = this;

  $ctrl.orderedPizzas = [];

  var formulas = {
    "petite-faim":{
      "label": "Petite faim",
      "price": 11,
      "eligible": function(pizza){
        return pizza.size.id == "small"
        && Object.entries(pizza.ingredients).length <= 2
        && Object.entries(pizza.toppings).length <= 2
      }
    },
    "maxi-faim":{
      "label": "Maxi faim",
      "price": 15,
      "eligible": function(pizza){
        return pizza.size.id == "medium"
        && Object.entries(pizza.ingredients).length <= 3
        && Object.entries(pizza.toppings).length <= 2
      }
    },
    "veggy":{
      "label": "Végétarien",
      "price": 12,
      "eligible": function(pizza){
        return (pizza.size.id == "medium" || pizza.size.id == "small")
        && Object.entries(pizza.ingredients).length <= 3
        && Object.entries(pizza.ingredients).filter(entry => !(entry[1].veggy)).length == 0
        && Object.entries(pizza.toppings).length <= 1
        && Object.entries(pizza.toppings).filter(entry => !(entry[1].veggy)).length == 0
      }
    },


  }


  $ctrl.order = function(){
    var pizzaOrder = {...{
      "type" : $scope.pizza_type,
      "size" : $scope.pizza_size,
      "base" : $scope.pizza_base,
      "ingredients" : Object.fromEntries(
                          Object.entries($scope.pizza_ingredients)
                                .filter(entry => entry[1] !== false)
                      ),
      "toppings" : Object.fromEntries(
                          Object.entries($scope.pizza_toppings)
                                .filter(entry => entry[1] !== false)
                      ),
    }}

    pizzaOrder.price = pizzaOrder.type.price
                     + pizzaOrder.size.price
                     + pizzaOrder.base.price
                     + Object.entries(pizzaOrder.ingredients).reduce((s, i) => s+i[1].price, 0)
                     + Object.entries(pizzaOrder.toppings).reduce((s, i) => s+i[1].price, 0)

    pizzaOrder.eligibleFormulas = Object.entries(formulas)
                                        .map(f_ent => ({"id":f_ent[0], ... f_ent[1]}))
                                               .filter(f => f.eligible(pizzaOrder))
                                               .sort((fa,fb) =>  fa.price - fb.price)
                                               .filter(f => f.price < pizzaOrder.price)
                                

    console.log(pizzaOrder)

    $ctrl.orderedPizzas.push(pizzaOrder);
    $scope.pizza_type = null;
    $scope.pizza_size = null;
    $scope.pizza_base = null;
    $scope.pizza_ingredients = null;
    $scope.pizza_toppings = null;
  }

  $ctrl.remove = function(pkey){
    $ctrl.orderedPizzas.splice(pkey, 1);
  }

  $ctrl.chose = function(element, choices){
    console.log("Change", element, choices)
    if(element == "type") $scope.step = Math.max($scope.step, 2);
    if(element == "size") $scope.step = Math.max($scope.step, 3);
    if(element == "base") $scope.step = Math.max($scope.step, 4);
    if(element == "ingredients") $scope.step = Math.max($scope.step, 5);
    if(element == "toppings") $scope.step = Math.max($scope.step, 6);
  }

  


}]);