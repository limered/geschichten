import QRCodeScanner from 'react-native-qrcode-scanner';
class ScannerController{
    hasPermissions = false;
    lastScannedText = '';
    onScanned;
    async requestPermissions() {
        const perm = QRCodeScanner.checkAndroid6Permissions;
        this.hasPermissions = perm;
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