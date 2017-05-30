angular
  .module('FruitApp')
  .factory('Fruit', Fruit);

Fruit.$inject = ['API', '$resource'];
function Fruit(API, $resource) {
  return $resource(`${API}/fruits/:id`, { id: '@_id' } );
}
