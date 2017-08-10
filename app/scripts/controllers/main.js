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
        // mainCtrl.filter = {
        //     username: ""
        // };

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
            });

            // ngDialog.open(
            //     {
            //         templateUrl: 'views/dialogs/addTranslation.html',
            //         controller: 'addTranslationCtrl',
            //         controllerAs: 'addTranslationCtrl',
            //         resolve: {
            //             asset: function () {
            //                 return asset;
            //             },
            //             assetId: function () {
            //                 return assetId;
            //             }
            //         }
            //     }).closePromise.then(function (data) {
            //
            //     if (data.value === true) {
            //
            //         projectCtrl.load();
            //     }
            // });

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
