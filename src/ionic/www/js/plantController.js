class PlantController {

    constructor($timeout, backend) {
        this.$timeout = $timeout;
        this.backend = backend;

        this.tasks = [
            { title: 'asdf' },
            { title: 'asdf2' },
            { title: 'asdf3' },
            { title: 'asdf4' },
            { title: 'asdf5' },
        ]

    }

    loadPlant(rfid) {
        this.plant = null;

        return this.backend.getPlant(rfid)
            .then(plant => this.$timeout(() => this.plant = plant))
            .catch(err => alert('Plante inconnue'));
    }
}

angular.module('indexbotanic').controller('plantController', PlantController);