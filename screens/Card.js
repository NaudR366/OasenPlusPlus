import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { globalStyles } from "../styles/global";

export default function Cards({ navigation }) {
    const buttonClickedHandler = () => {
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
                onPress={() => navigation.navigate('OptionsView')}
                style={globalStyles.backButton}>

                <Image
                    style={{ width: 70, height: 30 }}
                    source={require('../assets/backArrow.png')}
                />

            </TouchableOpacity>
            <View style={globalStyles.CardButton}>

                <Image
                    style={{ width: 300, height: 500, bottom: 15 }}
                    source={require('../assets/card.png')}
                />
                <Text
                    style={globalStyles.CardText}
                >{'Hier komt informatie te staan.'}
                </Text>
            </View>
                  <View style={globalStyles.CardButton}>

                <Image
                    style={{ width: 300, height: 500, bottom: 15 }}
                    source={require('../assets/card.png')}
                />
                <Text
                    style={globalStyles.CardText}
                >{'Hier komt informatie te staan.'}
                </Text>
            </View>
        </View>
    );
}
