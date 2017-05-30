angular
  .module('FruitApp')
  .controller('FruitsIndexCtrl', FruitsIndexCtrl);

FruitsIndexCtrl.$inject = ['Fruit'];
function FruitsIndexCtrl(Fruit) {
  const vm = this;

  Fruit
    .query()
    .$promise
    .then(fruits => {
      vm.fruits = fruits;
    });

}
