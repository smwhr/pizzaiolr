console.log("Pizzaiolr")

var app = angular.module('pizzaiolr',[]);

app.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.controller('OrderController', ['$scope', function($scope) {
  var $ctrl = this;

  $ctrl.orderedPizzas = [];


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