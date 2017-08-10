'use strict';

/**
 * @ngdoc function
 * @name leikirApp.controller:addContactCtrl
 * @description
 * # addContactCtrl
 * Controller of the leikirApp
 */
angular.module('leikirApp')
  .controller('AddContactCtrl', function ($scope) {

      var addContactCtrl = this;

      addContactCtrl.contact = {};

      addContactCtrl.submit = function() {

          console.log(addContactCtrl.contact);
          $scope.closeThisDialog(addContactCtrl.contact);
      };

      addContactCtrl.cancel = function() {

          $scope.closeThisDialog(false);
      };

  });
