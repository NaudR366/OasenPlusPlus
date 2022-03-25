import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from "../styles/global";

export default function App() {
    const buttonClickedHandler = () => {
        console.log('werkt goed');
    }
    return (
        <View style={globalStyles.container}>

            <StatusBar style="auto" />

            <Image
                style={globalStyles.oasenLogo}
                source={require('../assets/oasen.png')}
            />

            <Text
                style={globalStyles.textLogo}
            >{'Educatie'}
            </Text>

            <View style={globalStyles.midLine}>

                <View style={globalStyles.midLine2} />

                <View style={globalStyles.midLine3} />

            </View>

            <TouchableOpacity
                onPress={buttonClickedHandler}
                style={globalStyles.roundButton1}>

                <Image
                    style={{ width: 100, height: 100 }}
                    source={require('../assets/buttonOasen.png')}
                />

            </TouchableOpacity>

            <TouchableOpacity
                onPress={buttonClickedHandler}
                style={globalStyles.roundButton2}>

                <Text
                    style={globalStyles.textMenu}
                >{'Informatie'}
                </Text>

            </TouchableOpacity>

        </View>
    );
}