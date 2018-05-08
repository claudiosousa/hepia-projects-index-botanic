class HeaderController {

    constructor($state) {
        this.$state = $state;
    }

    isAtHome() {
        return this.$state.is('scan') || this.$state.is('load');
    }
}

angular.module('indexbotanic').controller('headerController', HeaderController);
