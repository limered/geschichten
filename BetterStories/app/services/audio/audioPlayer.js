import Sound from 'react-native-sound';
Sound.setCategory('Playback');

export default class AudioPlayer{
    currentSound;
    playAudioFromPath(path){
        this.currentSound = new Sound(path);
        this.playCurrentSound();
    }

    playCurrentSound(){
        if(this.currentSound.isLoaded()){
            this.currentSound.play();
        }else{
            setTimeout(this.playCurrentSound.bind(this), 500);
        }
    }

    stopPlaying(){
        this.currentSound.stop();
        this.currentSound.release();
    }
}