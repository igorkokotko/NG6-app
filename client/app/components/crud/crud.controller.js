import data from './crud-date.json';
class CrudController {
  constructor($scope) {
      "ngInject";
    /*this.$scope = $scope;*/
    let vm = this;
    vm.name = 'crud';
    vm.data = data;
    var store = this;
    store.data = data;/*[
    {
        "id" : 1,
        "name" : "Den",
        "nick": "Roberts",
        "age" : 21
    },
    {
        "id": 2,
        "name": "Bobby",
        "nick": "Sanders",
        "age": 35
    },
    {
        "id": 3,
        "name": "Robertro",
        "nick": "Der Toro",
        "age": 27
    }
    ];*/
    $scope.AddPerson = function(){
            if($scope.formPerson.$valid) {
                store.data.push({
                    "name" : $scope.Person.name,
                    "nick" : $scope.Person.nick,
                    "age" : $scope.Person.age
                });
                $scope.Person.name = "";
                $scope.Person.nick = "";
                $scope.Person.age = "";
            }
        };
  }
  
}

export default CrudController;
