import Scanning from './scanning';

export default class Default{
    name = 'default';
    titleText = 'Drücke Start!';
    goToDefault(context){}
    goToScanning(context){
        context.currentState = new Scanning();
    }
    goToPlaying(context){}
}