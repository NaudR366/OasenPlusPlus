import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from "../styles/global";

export default function App({ navigation }) {
    const buttonClickedHandler = () => {
        navigation.navigate("OptionsView")
        console.log('werkt goed');
    }
    return (
        <View style={globalStyles.container}>

            <StatusBar style="auto" />

            <Image
                style={globalStyles.oasenLogoHome}
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
                style={globalStyles.informatieButton}>

                <Text
                    style={globalStyles.OptionsText}
                >{'Informatie'}
                </Text>

            </TouchableOpacity>

        </View>
    );
}