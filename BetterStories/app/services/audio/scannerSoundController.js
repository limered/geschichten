import Sound from 'react-native-sound';

class ScannedSoundController{
    sound;
    load(){
        this.sound = new Sound('beep.wav', Sound.MAIN_BUNDLE);
    }
    play(){
        if(this.sound.isLoaded()){
            this.sound.play();
        }else{
            setTimeout(this.play.bind(this), 500);
        }
    }
    stop(){
        this.sound.stop();
        this.sound.reset();
    }
}

const cntrl = new ScannedSoundController();
export default scannedSoundController = cntrl;