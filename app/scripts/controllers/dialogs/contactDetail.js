'use strict';

/**
 * @ngdoc function
 * @name leikirApp.controller:ContactDetailCtrl
 * @description
 * # ContactDetailCtrl
 * Controller of the leikirApp
 */
angular.module('leikirApp')
  .controller('ContactDetailCtrl', function (contact) {

      console.log(contact);
      var contactDetailCtrl = this;
      contactDetailCtrl.contact = contact;
  });
