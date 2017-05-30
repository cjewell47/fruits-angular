angular
  .module('FruitApp')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function RegisterCtrl(User, CurrentUserService, $state){
  const vm = this;

  vm.register = register;



  function register() {
    if (vm.registerForm.$valid) {
      User
        .register(vm.user)
        .$promise
        .then(data => {
          console.log(data);
          CurrentUserService.getUser();
          $state.go('dogsIndex');

        })
        .catch(err => {
          console.log(err);
        });
    }
  }
}
