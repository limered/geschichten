import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

import styles from './styles';
import bookRepository from './../../services/data/booksRepo';
import scannerController from './../../services/scanner/ScannerController';

export default class Scanner extends React.Component{
    scanner;
    onScanned(e){
        scannerController.lastScannedText = e.data;
        if(bookRepository.hasPathForKey(e.data)){
            this.props.onScanned();
        }else{
            setTimeout(this.scanner.reactivate.bind(this.scanner), 2000);
        }
    }
    render(){
        return(
            <View style={styles.scannerContainer}>
            {this.props.state.name === "scanning" ? 
                <QRCodeScanner 
                    ref={node=>{ this.scanner = node }}
                    onRead={this.onScanned.bind(this)}
                    style={StyleSheet.absoluteFill}/> :
                <Image style={styles.scannerOverlay} source={require('./images/qr.jpg')}/>
            }
            </View>
        );
    }
}