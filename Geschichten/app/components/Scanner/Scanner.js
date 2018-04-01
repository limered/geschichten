import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import { BarCodeScanner } from 'expo';

import styles from './styles';
import scannerController from "./../../services/scanner/ScannerController";

export default class Scanner extends React.Component{
    render(){
        return(
            <View style={styles.scannerContainer}>
            {this.props.state.name === "scanning" ? 
                <BarCodeScanner 
                    onBarCodeRead={scannerController.codeScanned} 
                    style={StyleSheet.absoluteFill}/> : 
                <Image style={styles.scannerOverlay} source={require('./images/qr.jpg')}/>
            }
            </View>
        );
    }
}