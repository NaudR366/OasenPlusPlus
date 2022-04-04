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
                    <View style={{ marginLeft: 40, marginRight: 30, alignSelf: 'center' }} >
                        <Image style={globalStyles.cardImage} source={require('../assets/Card-1.png')} />
                        <Text style={globalStyles.CardText} >Grondwater oppompen</Text>
                    </View>
                    <View style={{ marginLeft: 60, marginRight: 20, alignSelf: 'center' }} >
                        <Image style={globalStyles.cardImage} source={require('../assets/Card-2.png')} />
                        <Text style={globalStyles.CardText} >Beluchting</Text>
                    </View>
                    <View style={{ marginLeft: 40, marginRight: 40, alignSelf: 'center' }} >
                        <Image style={globalStyles.cardImage} source={require('../assets/Card-3.png')} />
                        <Text style={globalStyles.CardText} >Zandfiltratie</Text>
                    </View>
                </ScrollView>
            </View>

        </View>
    );
}
