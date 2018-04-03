import Playing from './playing';
import Default from './default';

import scannerController from './../scanner/ScannerController';

export default class Scanning{
    name = 'scanning';
    titleText = 'Suche ein Bildchen!';
    enter(){
        scannerController.lastScannedText = '';
    }
    leave(){}
    goToDefault(context){
        context.currentState = new Default();
    }
    goToScanning(context){}
    goToPlaying(context){
        context.currentState = new Playing();
    }
}