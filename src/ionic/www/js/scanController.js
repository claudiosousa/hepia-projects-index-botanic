class ScanController {

    constructor($state, $ionicPlatform, $timeout, backend) {
        this.$state = $state;
        this.$timeout = $timeout;
        this.backend = backend;
        this.rfid = null;

        $ionicPlatform.ready(() => {
            if (typeof nfc !== 'undefined') {
                nfc.addNdefListener(
                    ({ tag }) => this.loadPlant(tag.id.reduce((t, e) => t + ('0' + (e & 0xFF).toString(16)).slice(-2), '')),
                    () => { },
                    reason => alert("Erreur NFC: " + reason)
                )
            }
        });
    }

    loadPlant(rfid) {
        this.rfid = rfid;
        this.backend.plant = null;

        this.backend.getPlant(this.rfid)
            .then((plant) => {
                this.backend.plant = plant;
                this.$timeout( // Avoid lag during page transition
                    () => this.rfid = null,
                    1000
                );
                this.$state.go('info');
            })
            .catch((err) => {
                alert('Erreur: ' + err + ".");
                this.$timeout(() => this.rfid = null);
            });
    }
}

angular.module('indexbotanic').controller('scanController', ScanController);
