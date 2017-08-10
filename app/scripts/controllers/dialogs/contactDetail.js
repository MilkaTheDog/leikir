'use strict';

/**
 * @ngdoc function
 * @name leikirApp.controller:ContactDetailCtrl
 * @description
 * # ContactDetailCtrl
 * Controller of the leikirApp
 */
angular.module('leikirApp')
  .controller('ContactDetailCtrl', function ($scope, contact) {

      console.log(contact);
      var contactDetailCtrl = this;

      contactDetailCtrl.editMode = false;

      contactDetailCtrl.contact = contact;

      contactDetailCtrl.delete = function () {

          $scope.closeThisDialog("delete");
      };
  });
