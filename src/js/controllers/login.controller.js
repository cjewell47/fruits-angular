angular
  .module('FruitApp')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService'];
function LoginCtrl(User, CurrentUserService) {
  const vm = this;

  vm.login = login;

  function login() {
    User
      .login(vm.user)
      .$promise
      .then(() => {
        CurrentUserService.getUser();
      }, err => {
        console.log(err);
      }
    );
  };
}
