import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class MessageHeader extends React.Component {
    render(){
        return (
            <View style={styles.header}>
                <Text>Suche ein Bildchen</Text>
            </View>
        );
    }
}