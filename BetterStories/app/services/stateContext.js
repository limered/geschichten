import Default from './states/default';

export default class StateContext {
    currentState;
    onStateChanged;

    constructor(){
        this.currentState = new Default();
    }
    goToDefault(){
        this.currentState.leave();
        this.currentState.goToDefault(this);
        this.currentState.enter();
        if(this.onStateChanged) this.onStateChanged();
    }
    goToScanning(){
        this.currentState.leave();
        this.currentState.goToScanning(this);
        this.currentState.enter();
        if(this.onStateChanged) this.onStateChanged();
    }
    goToPlaying(){
        this.currentState.leave();
        this.currentState.goToPlaying(this);
        this.currentState.enter();
        if(this.onStateChanged) this.onStateChanged();
    }
}