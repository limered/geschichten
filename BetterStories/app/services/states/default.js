import Scanning from './scanning';

export default class Default{
    name = 'default';
    titleText = 'Drücke Start!';
    enter(){}
    leave(){}
    goToDefault(context){}
    goToScanning(context){
        context.currentState = new Scanning();
    }
    goToPlaying(context){}
}