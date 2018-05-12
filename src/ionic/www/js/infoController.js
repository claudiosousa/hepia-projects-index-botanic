class InfoController {

    constructor($timeout, backend, $state, $rootScope) {
        this.$timeout = $timeout;
        this.backend = backend;

        this.title = "";
        this.desc = "";
        this.ref = "#";
        this.imgs = [];
        this.infos = [];

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
            this.desc = this.plant.description;
            this.ref = this.plant.ref;
            this.imgs = [this.plant.main_image, ...this.plant.images];
            this.infos = [
                { label: "Nom français", value: this.plant.name_fr },
                { label: "Famille", value: this.plant.family },
                { label: "Genre", value: this.plant.type },
                { label: "Auteur", value: this.plant.discovery_author },
                { label: "Année de découverte", value: this.plant.discovery_year },
                { label: "Période de floraison", value: this.plant.blossoming },
                { label: "Type écologique", value: this.plant.type_ecological + " - " + this.plant.type_ecological_desc },
                { label: "Milieux", value: this.plant.environment },
                { label: "Zone géographique", value: this.plant.site }
            ];
        }
    }
}

angular.module('indexbotanic').controller('infoController', InfoController);
