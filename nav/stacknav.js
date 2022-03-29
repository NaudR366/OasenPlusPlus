import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

// Screens
import Home from '../screens/Home.js'
import Options from '../screens/Options.js'

const screens = {
    HomeView: {
        screen: Home
    },
    OptionsView: {
        screen: Options
    },

}
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerShown: false,
        gestureEnabled: false,
        animationEnabled: true,
        cardOverlayEnabled: false
    }
});

export default createAppContainer(HomeStack);