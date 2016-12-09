angular.module('contact-add.controller', [
    'ui.router'
])
    .controller('ContactAddCtrl', ['$http', '$state', function($http, $state) {
        this.ajouter = function() {
            $http.post('/api/contacts', this.contact)
                .then(function(res) {
                    // REDIRECTION
                    $state.go('contact-list');
                })
                .catch(function(res) {
                    console.error(res);
                })
        }
    }]);