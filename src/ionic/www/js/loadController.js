class LoadController {

    constructor($timeout, backend, $state, $stateParams, $rootScope) {
        this.$timeout = $timeout;
        this.backend = backend;
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.rfid = null;

        this.loadPlant();

        $rootScope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams) {
                if (toState.name == "load") {
                    this.loadPlant();
                }
            }.bind(this)
        )
    }

    loadPlant() {
        this.rfid = this.$stateParams.rfid;
        this.backend.plant = null;

        this.backend.getPlant(this.rfid)
            .then(function(plant) {
                this.backend.plant = plant;
                this.$state.go('info');
            }.bind(this))
            .catch(function(err) {
                alert('Erreur: ' + err);
                this.$state.go('scan');
            });
    }
}

angular.module('indexbotanic').controller('loadController', LoadController);
