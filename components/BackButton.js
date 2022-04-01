import { View, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from "../styles/global";
import * as Haptics from 'expo-haptics';

export default function HeaderBackButton({ navTo, nav }) {
    return (
        <View style={{ right: 0, alignSelf: 'flex-end' }}>
            <TouchableOpacity onPress={() => { nav.navigate(navTo), Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) }} style={globalStyles.backButton}>
                <Image style={{ width: 50, height: 30 }} source={require('../assets/exitButton.png')} />
            </TouchableOpacity>
        </View>
    )
}