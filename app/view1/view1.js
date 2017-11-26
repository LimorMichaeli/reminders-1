'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl as vm'
    });
  }])

  .controller('View1Ctrl', function () {

    debugger;
    var vm = this;
    

    // Data

    vm.todoList = [];
    vm.isEdit = false;
    init();
    // Methods
    vm.remove = remove;
    vm.init = init;
    vm.edit = edit;

    //////////

    function init() {
      debugger;
      var text = localStorage.getItem("testJSON");
      if (text != null) {
        var obj = JSON.parse(text);
        vm.todoList.push(obj);
      }
    }

    function remove() {
      var oldList = vm.todoList;
      vm.todoList = [];
      angular.forEach(oldList, function (x) {
        if (!x.done) vm.todoList.push(x);
      });

    }

    function edit(item){
      vm.isEdit = true;
    }




  });