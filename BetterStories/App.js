import React from 'react';
import ScannerView from './app/screens/ScannerView';

import StateContext from './app/services/stateContext';
import scannerController from "./app/services/scanner/ScannerController";

import bookRepository from './app/services/data/booksRepo';
import scannedSoundController from './app/services/audio/scannerSoundController';

export default class App extends React.Component {
  constructor(props){
    super(props);
    scannerController.requestPermissions();
    bookRepository.load();
    scannedSoundController.load();
  }
  render() {
    return (
      <ScannerView/>
    );
  }
}