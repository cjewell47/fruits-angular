angular
  .module('FruitApp')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService'];
function RegisterCtrl(User, CurrentUserService){
  const vm = this;

  vm.register = register;

  function register() {
    if (vm.registerForm.$valid) {
      User
      .register(vm.user)
      .$promise
      .then(() => {
        CurrentUserService.getUser();
      }, err => {
        console.log(err);
      });
    }
  }
}
