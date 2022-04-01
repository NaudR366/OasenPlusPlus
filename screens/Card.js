import { useRef } from 'react';
import { Text, View, Image, ScrollView, Animated } from 'react-native';
import { globalStyles } from "../styles/global";
import BackButton from '../components/BackButton.js'

export default function Cards({ navigation }) {
    const scrollX = useRef(new Animated.Value(0)).current
    const slidesRef = useRef(null)
    return (
        <View style={globalStyles.container}>
            <Image style={globalStyles.oasenLogoOptions} source={require('../assets/oasen.png')} />
            <BackButton nav={navigation} navTo="OptionsView" />

            <View style={globalStyles.CardContainer}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 250 }} horizontal scrollEnabled pagingEnabled scrollEventThrottle={16} showsHorizontalScrollIndicator={false} bounces={true}>
                    <View style={{ marginLeft: 30, marginRight: 30, alignSelf: 'center' }} >
                        <Image style={globalStyles.cardImage} source={require('../assets/Circle.png')} />
                        <Text style={globalStyles.CardText} >Hier komt informatie te staan.</Text>
                    </View>
                    <View style={{ marginLeft: 50, marginRight: 30, alignSelf: 'center' }} >
                        <Image style={globalStyles.cardImage} source={require('../assets/Circle.png')} />
                        <Text style={globalStyles.CardText} >Hier komt informatie te staan.</Text>
                    </View>
                    <View style={{ marginLeft: 30, marginRight: 30, alignSelf: 'center' }} >
                        <Image style={globalStyles.cardImage} source={require('../assets/Circle.png')} />
                        <Text style={globalStyles.CardText} >Hier komt informatie te staan.</Text>
                    </View>
                </ScrollView>
            </View>

        </View>
    );
}
