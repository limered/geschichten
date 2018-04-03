import Playing from './playing';
import Default from './default';

export default class Scanning{
    name = 'scanning';
    titleText = 'Suche ein Bildchen!';
    enter(){}
    leave(){}
    goToDefault(context){
        context.currentState = new Default();
    }
    goToScanning(context){}
    goToPlaying(context){
        context.currentState = new Playing();
    }
}