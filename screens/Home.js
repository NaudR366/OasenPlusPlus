import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { globalStyles } from "../styles/global";
import * as Haptics from 'expo-haptics';

export default function App({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <ImageBackground source={require('../assets/bg.png')} style={{ width: '100%', height: '100%' }}>
                <StatusBar style="auto" />
                <Image style={globalStyles.oasenLogoHome} source={require('../assets/oasen.png')} />
                <Text style={globalStyles.textLogo}>Educatie</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("OptionsView"), Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) }} style={globalStyles.roundButton1}>
                    <Image style={globalStyles.playButton} source={require('../assets/startButton.png')} />
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}