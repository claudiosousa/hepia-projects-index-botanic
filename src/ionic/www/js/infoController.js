class infoController {

    constructor($timeout, backend, $rootScope) {
        this.$timeout = $timeout;
        this.backend = backend;
        this.plant = this.backend.plant;

        $rootScope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams) {
                if (toState.name == "info") {
                    this.$timeout(() => this.plant = this.backend.plant)
                }
            }.bind(this)
        )
    }
}

angular.module('indexbotanic').controller('infoController', infoController);
