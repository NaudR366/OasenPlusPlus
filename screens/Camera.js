import { StyleSheet, } from 'react-native';
import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function Camera() {
    return (
        <WebView
            showsVerticalScrollIndicator={false}
            style={styles.container}
            source={{ uri: 'https://facebook.com' }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    }
}); 