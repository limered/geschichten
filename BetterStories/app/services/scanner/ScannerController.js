import QRCodeScanner from 'react-native-qrcode-scanner';
class ScannerController{
    hasPermissions = false;
    lastScannedText;
    async requestPermissions() {
        const perm = QRCodeScanner.checkAndroid6Permissions;
        this.hasPermissions = perm;
    }
}

const scanner = new ScannerController();
export default scannerController = scanner;