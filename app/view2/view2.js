'use strict';

angular.module('myApp.view2', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl as vm'
    });
  }])

  .controller('View2Ctrl', function () {
    debugger;
    var vm = this;

    vm.todoAdd = todoAdd;
    vm.save = save;



    function todoAdd() {
      debugger;
      vm.save({ 'title': vm.title, 'description': vm.description, 'date':vm.date });
      vm.title = "";
      vm.description="";
      vm.date="";
    }

    function save(myObj) {
      debugger;
      var myJSON = JSON.stringify(myObj);
      localStorage.setItem("testJSON", myJSON);

    }



  });