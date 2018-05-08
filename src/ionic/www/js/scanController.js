

class ScanController {

    constructor($state, $ionicPlatform) {
        this.$state = $state;

        $ionicPlatform.ready(() => {
            nfc.addNdefListener(
                ({ tag }) => this.loadPlant(tag.id.reduce((t, e) => t + ('0' + (e & 0xFF).toString(16)).slice(-2), '')),
                () => { },
                reason => alert("Error adding NFC Listener " + reason)
            )
        });

    }

    loadPlant(rfid) {
        this.$state.go("load", { rfid });
    }
}

angular.module('indexbotanic').controller('scanController', ScanController);
