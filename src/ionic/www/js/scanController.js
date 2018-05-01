class scanController {

    constructor($state) {
        this.$state = $state;
    }

    loadPlant(rfid) {
        this.$state.go("load", { rfid: 1234 });
    }
}

angular.module('indexbotanic').controller('scanController', scanController);
