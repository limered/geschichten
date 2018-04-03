import Scanning from './scanning';
import Default from './default';

import bookRepository from './../data/booksRepo';
import scannerController from './../scanner/ScannerController';
import AudioPlayer from './../audio/audioPlayer';
import scannedSoundController from './../audio/scannerSoundController';

export default class Playing{
    name = 'playing';
    titleText = 'Höre zu!';
    audioPlayer = new AudioPlayer();
    enter(){
        scannedSoundController.play();
        let path = bookRepository.getAudioPath(scannerController.lastScannedText);
        this.audioPlayer.playAudioFromPath(path);
    }
    leave(){
        this.audioPlayer.stopPlaying();
    }
    goToDefault(context){
        context.currentState = new Default();
    }
    goToScanning(context){
        context.currentState = new Scanning();
    }
    goToPlaying(context){}
}