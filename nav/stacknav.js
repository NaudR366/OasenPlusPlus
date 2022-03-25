import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

// Screens
import Home from '../screens/Home.js'
import Camera from '../screens/Camera.js'

const screens = {
    HomeView: {
        screen: Camera
    },
    CameraView: {
        screen: Camera
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