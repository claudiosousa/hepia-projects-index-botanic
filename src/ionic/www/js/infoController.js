class infoController {

    constructor($timeout, backend, $state, $rootScope) {
        this.$timeout = $timeout;
        this.backend = backend;

        this.title = "";
        this.imgs = [ // TODO: to empty
            "https://upload.wikimedia.org/wikipedia/commons/5/59/Flor_de_Orqu%C3%ADdea_-_Orchid_Flower.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/4/4e/Limodorum_abortivum_Mallorca_05.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/2/23/Doritis_pulcherrima_f_coerulea_toapel.jpg"
        ];
        this.generals = [];

        $rootScope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams) {
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
            //this.imgs = this.plant.images.slice();
            //this.imgs.unshift(this.plant.main_image);
            this.generals.push({ label: "Nom commun", value: this.plant.common_name });
            this.generals.push({ label: "Description", value: this.plant.description });
        }
    }
}

angular.module('indexbotanic').controller('infoController', infoController);
