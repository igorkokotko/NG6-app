class HeroController {
  constructor($scope, $firebaseArray, $firebaseObject) {
    "ngInject";
    this.name = 'hero';
    var vm = this;
    var ref = firebase.database().ref();
    
    vm.data = $firebaseObject(ref);
    
    $scope.title1 = 'Button';
  $scope.title4 = 'Warn';
  $scope.isDisabled = true;

  $scope.googleUrl = 'http://google.com';
   
  }
  
}

  

export default HeroController;
