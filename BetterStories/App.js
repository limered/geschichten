import React from 'react';
import ScannerView from './app/screens/ScannerView';

import StateContext from './app/services/stateContext';
import scannerController from "./app/services/scanner/ScannerController";

import BookRepository from './app/services/data/booksRepo';

export default class App extends React.Component {
  constructor(props){
    super(props);
    scannerController.requestPermissions();
    this.run();
  }
  async run(){
    let repo = new BookRepository();
    await repo.load();
  }
  render() {
    return (
      <ScannerView/>
    );
  }
}