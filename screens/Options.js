import { ImageBackground, Text, View, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from "../styles/global";

export default function Options({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <ImageBackground source={require('../assets/bg.png')} style={{ width: '100%', height: '100%' }}>
                <Image style={globalStyles.oasenLogoOptions} source={require('../assets/oasen.png')} />

                <TouchableOpacity onPress={() => navigation.navigate('HomeView')} style={globalStyles.backButton}>
                    <Image style={{ width: 70, height: 30 }} source={require('../assets/backArrow.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={null} style={globalStyles.scannerButton}>
                    <Image style={{ width: 200, height: 150, bottom: 15 }} source={require('../assets/scannerButton.png')} />
                    <View style={globalStyles.OptionsLabel} />
                    <Text style={globalStyles.OptionsText}>Scanner</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('CardsView')} style={globalStyles.KaartenButton}>
                    <Image style={{ width: 150, height: 150, bottom: 20 }} source={require('../assets/kaartenButton.png')} />
                    <View style={globalStyles.OptionsLabel} />
                    <Text style={globalStyles.OptionsText}>Kaarten</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}