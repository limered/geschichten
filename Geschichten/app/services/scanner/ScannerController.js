import {Permissions} from 'expo';
class ScannerController{
    hasPermissions = false;
    lastScannedText = '';
    onScanned;
    async requestPermissions() {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.hasPermissions = status === 'granted';
    }
    codeScanned(result){
        if(result.data !== this.lastScannedText){
            this.lastScannedText = result.data;
            if(this.onScanned !== null){this.onScanned()}
        };
    }
}

const scanner = new ScannerController();
export default scannerController = scanner;