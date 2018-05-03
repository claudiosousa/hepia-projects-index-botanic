class infoController {

    constructor($timeout, backend, $state, $rootScope) {
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

        if (this.plant == null) {
            $state.go("scan");
        }
    }
}

angular.module('indexbotanic').controller('infoController', infoController);
