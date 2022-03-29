import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from "../styles/global";

export default function Options({ navigation }) {
    const buttonClickedHandler = () => {
        console.log('werkt goed');
    }
    return (
        <View style={globalStyles.container}>

            <StatusBar style="auto" />

            <Image
                style={globalStyles.oasenLogoOptions}
                source={require('../assets/oasen.png')}
            />

            <View style={globalStyles.midLine4}>

                <View style={globalStyles.midLine5} />

                <View style={globalStyles.midLine6} />

                <View style={globalStyles.midLine7} />

            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('HomeView')}
                style={globalStyles.backButton}>

                <Image
                    style={{ width: 70, height: 30 }}
                    source={require('../assets/backArrow.png')}
                />

            </TouchableOpacity>

            <TouchableOpacity
                onPress={buttonClickedHandler}
                style={globalStyles.scannerButton}>

                <Image
                    style={{ width: 200, height: 150, bottom: 15 }}
                    source={require('../assets/scannerButton.png')}
                />

                <View style={globalStyles.OptionsLabel} />

                <Text
                    style={globalStyles.OptionsText}
                >{'Scanner'}
                </Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={buttonClickedHandler}
                style={globalStyles.KaartenButton}>

                <Image
                    style={{ width: 150, height: 150, bottom: 20 }}
                    source={require('../assets/kaartenButton.png')}
                />

                <View style={globalStyles.OptionsLabel} />

                <Text
                    style={globalStyles.OptionsText}
                >{'Kaarten'}
                </Text>

            </TouchableOpacity>





        </View>
    );
}