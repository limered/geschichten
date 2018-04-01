import React from 'react';
import ScannerView from './app/screens/ScannerView';

import StateContext from './app/services/stateContext';

export default class App extends React.Component {
  render() {
    return (
      <ScannerView/>
    );
  }
}