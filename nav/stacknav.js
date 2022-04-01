import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

// Screens
import Home from '../screens/Home.js'
import Options from '../screens/Options.js'
import Cards from '../screens/Card.js';

const screens = {
    HomeView: {
        screen: Home
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
        gestureEnabled: false,
        animationEnabled: true,
        cardOverlayEnabled: false
    }
});

export default createAppContainer(HomeStack);