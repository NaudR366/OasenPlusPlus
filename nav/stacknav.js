import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

// Screens
import Home from '../screens/Home.js'
import Options from '../screens/Menu.js'
import Cards from '../screens/Cards.js';
import Scanner from '../screens/Scanner.js'

const screens = {
    HomeView: {
        screen: Home
    },
    CameraView: {
        screen: Scanner
    },
    OptionsView: {
        screen: Options
    },
    CardsView: {
        screen: Cards
    },

}
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerShown: false,
        gestureEnabled: true,
        animationEnabled: true,
        cardOverlayEnabled: false
    }
});

export default createAppContainer(HomeStack);