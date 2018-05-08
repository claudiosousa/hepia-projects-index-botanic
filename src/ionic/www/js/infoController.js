class InfoController {

    constructor($timeout, backend, $state, $rootScope) {
        this.$timeout = $timeout;
        this.backend = backend;

        this.title = "";
        this.imgs = [];
        this.generals = [];

        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                if (toState.name == "info") {
                    this.$timeout(() => this.update(this.backend.plant))
                }
            }.bind(this)
        )

        this.update(this.backend.plant);
        if (this.plant == null) {
            $state.go("scan");
        }
    }

    update(plant) {
        this.plant = this.backend.plant;
        if (this.plant != null) {
            this.title = this.plant.name;
            this.imgs = [this.plant.main_image, ...this.plant.images];
            this.generals = [
                { label: "Nom commun", value: this.plant.common_name },
                { label: "Description", value: this.plant.description }
            ];
        }
    }
}

angular.module('indexbotanic').controller('infoController', InfoController);
