import React from 'react';
import { View, Text } from 'react-native';
import Camera from '../components/Camera.js'
import BackButton from '../components/BackButton.js'

export default function Scanner({ navigation }) {
    return (

        <View style={{ flex: 1 }}>
            <View style={{ marginTop: -50, flex: 0.3, backgroundColor: '#67AEDF', borderColor: '#D0ECFF', borderBottomWidth: 10 }} >
                <Text style={{ marginTop: 115, marginLeft: 35, position: 'absolute', alignItems: 'flex-start', fontSize: 35, color: 'white' }} >Scan kaarten</Text>
                <BackButton nav={navigation} navTo="OptionsView" />
            </View>
            <Camera />
        </View>
    )
}