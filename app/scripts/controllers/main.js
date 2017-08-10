'use strict';

/**
 * @ngdoc function
 * @name leikirApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leikirApp
 */
angular.module('leikirApp')
    .controller('MainCtrl', function ($http, ngDialog) {

        var mainCtrl = this;

        mainCtrl.contacts = [];

        mainCtrl.addContact = function () {

            ngDialog.open(
                {
                    templateUrl: 'views/dialogs/addContact.html',
                    controller: 'AddContactCtrl',
                    controllerAs: 'addContactCtrl'
                }).closePromise.then(function (data) {

                if (data.value !== false && data.value !== "$closeButton") {

                    mainCtrl.contacts.push(data.value);
                }
            });
        };

        mainCtrl.openDetail = function (contact) {

            ngDialog.open({
                template: 'views/dialogs/contactDetail.html',
                controller: "ContactDetailCtrl",
                controllerAs: "contactDetailCtrl",
                resolve: {
                    contact: function() {

                        return contact;
                    }
                }
            }).closePromise.then(function (data) {

                if (data.value === "delete") {

                    mainCtrl.contacts.splice(mainCtrl.contacts.indexOf(contact), 1);
                }
            });

        };

        $http({
            method: 'GET',
            url: '/baseContacts.json'
        }).then(function (response) {

            mainCtrl.contacts = response.data;
            console.log(mainCtrl.contacts);

        }, function (response) {

            console.log(response);
        });
    });
