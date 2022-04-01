import { useRef } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, Animated } from 'react-native';
import { globalStyles } from "../styles/global";

export default function Cards({ navigation }) {
    const scrollX = useRef(new Animated.Value(0)).current
    const slidesRef = useRef(null)
    return (
        <View style={globalStyles.container}>
            <Image style={globalStyles.oasenLogoOptions} source={require('../assets/oasen.png')} />
            <TouchableOpacity onPress={() => navigation.navigate('OptionsView')} style={globalStyles.backButton}>
                <Image style={{ width: 70, height: 30 }} source={require('../assets/backArrow.png')} />
            </TouchableOpacity>

            <View style={globalStyles.CardContainer}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 250 }} scrollEnabled pagingEnabled scrollEventThrottle={16} showsHorizontalScrollIndicator={false} bounces={true}>
                    <View>
                        <Image style={globalStyles.cardImage} source={require('../assets/Circle.png')} />
                        <Text style={globalStyles.CardText} >Hier komt informatie te staan.</Text>
                    </View>
                    <View>
                        <Image style={globalStyles.cardImage} source={require('../assets/Circle.png')} />
                        <Text style={globalStyles.CardText} >Hier komt informatie te staan.</Text>
                    </View>
                    <View>
                        <Image style={globalStyles.cardImage} source={require('../assets/Circle.png')} />
                        <Text style={globalStyles.CardText} >Hier komt informatie te staan.</Text>
                    </View>
                </ScrollView>
            </View>

        </View>
    );
}
