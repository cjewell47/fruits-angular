angular
  .module('FruitApp')
  .service('CurrentUserService', CurrentUserService);

CurrentUserService.$inject = ['TokenService'];
function CurrentUserService(TokenService) {
  const self = this;

  self.getUser = () => {
    const decoded = TokenService.decodeToken();
    console.log(decoded);

    if (decoded) {
      User
      .get({ id: decoded.id }).$promise
      .then(data => {
        console.log(data);
      });
    }
  };

}
