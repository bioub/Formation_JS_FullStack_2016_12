angular.module('contact-list.controller', [])
    .controller('ContactListCtrl', ['$http', function($http) {
        this.contacts = [];

        $http.get('/api/contacts')
            .then(function(res) {
                this.contacts = res.data;
            }.bind(this))
    }]);