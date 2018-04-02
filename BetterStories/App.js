import React from 'react';
import ScannerView from './app/screens/ScannerView';

import StateContext from './app/services/stateContext';
import scannerController from "./app/services/scanner/ScannerController";

import DataLoader from './app/services/data/dataLoader';

export default class App extends React.Component {
  constructor(props){
    super(props);
    scannerController.requestPermissions();
    // let loader = new DataLoader();
    // loader.getFileList();
  }
  render() {
    return (
      <ScannerView/>
    );
  }
}