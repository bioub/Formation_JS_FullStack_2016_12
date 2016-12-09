angular.module('app.module', [
    'contact-list.controller',
    'contact-add.controller',
    'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider.state('contact-list', {
            url: '/',
            templateUrl: '/app/contact-list/contact-list.template.html',
            controller: 'ContactListCtrl',
            controllerAs: 'ctcList'
        })

        $stateProvider.state('contact-add', {
            url: '/ajouter',
            templateUrl: '/app/contact-add/contact-add.template.html',
            controller: 'ContactAddCtrl',
            controllerAs: 'ctcAdd'
        })

        $stateProvider.state('contact-show', {
            url: '/afficher/:id',
            templateUrl: '/app/contact-show/contact-show.template.html',
            controller: 'ContactShowCtrl',
            controllerAs: 'ctcShow'
        })

        // Dans le controller
        // var id = $stateParams.id;

    }])


.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
}]);