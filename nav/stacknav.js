import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

// Screens
import Home from '../screens/Home.js'

const screens = {
    HomeView: {
        screen: Home
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