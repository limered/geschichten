import React from 'react';
import ScannerView from './app/screens/ScannerView';

import StateContext from './app/services/stateContext';
import scannerController from "./app/services/scanner/ScannerController";

export default class App extends React.Component {
  constructor(props){
    super(props);
    scannerController.requestPermissions();
  }
  render() {
    return (
      <ScannerView/>
    );
  }
}