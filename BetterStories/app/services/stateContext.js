import Default from './states/default';

export default class StateContext {
    currentState;
    onStateChanged;

    constructor(){
        this.currentState = new Default();
    }
    goToDefault(){
        this.currentState.goToDefault(this);
        if(this.onStateChanged) this.onStateChanged();
    }
    goToScanning(){
        this.currentState.goToScanning(this);
        if(this.onStateChanged) this.onStateChanged();
    }
    goToPlaying(){
        this.currentState.goToPlaying(this);
        if(this.onStateChanged) this.onStateChanged();
    }
}