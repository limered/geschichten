import Scanning from './scanning';
import Default from './default';

export default class Playing{
    name = 'playing';
    titleText = 'Höre zu!';
    goToDefault(context){
        context.currentState = new Default();
    }
    goToScanning(context){
        context.currentState = new Scanning();
    }
    goToPlaying(context){}
}