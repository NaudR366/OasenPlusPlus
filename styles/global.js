import { StyleSheet } from "react-native";
import { RotationGestureHandler } from "react-native-gesture-handler";

export const globalStyles = StyleSheet.create({

    //Home.js

    container: {
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    midLine: {
        position: 'absolute',
        width: 390.18,
        height: 600,
        top: 280,
        bottom: 0,
        backgroundColor: '#67AEDF',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100
    },
    midLine2: {
        position: 'absolute',
        width: 390.18,
        height: 500,
        marginLeft: 250,
        top: 90,
        bottom: 0,
        backgroundColor: '#D0ECFF',
        borderTopLeftRadius: 200,
        borderTopRightRadius: 100
    },
    midLine3: {
        position: 'absolute',
        width: 390.18,
        height: 500,
        marginLeft: -250,
        top: 90,
        bottom: 0,
        backgroundColor: '#D0ECFF',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 200
    },
    roundButton1: {
        marginTop: 50
    },
    informatieButton: {
        position: 'absolute',
        marginLeft: 70,
        marginTop: 700,
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#5078DF',
        backgroundColor: '#67AEDF',
    },
    oasenLogoHome: {
        width: 300,
        height: 100,
        alignContent: "center",
        alignSelf: "center",
        marginTop: 75
    },
    textLogo: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5078DF',
    },
    playButton: {
        alignSelf: "center",
        width: 170,
        height: 170,
        marginTop: 50
    },
    textMenu: {
        position: 'absolute',
        marginLeft: 100,
        marginTop: 170,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },

    //Options.js

    oasenLogoOptions: {
        width: 150,
        height: 50,
        position: 'absolute',
        top: -100,
        left: 20,
        marginTop: 200
    },
    midLine4: {
        height: 700,
        width: 700,
        backgroundColor: '#67AEDF',
        marginTop: 200,
        borderTopLeftRadius: 200,
    },
    midLine5: {
        height: 400,
        width: 400,
        backgroundColor: '#67AEDF',
        top: -160,
        left: 200,
        borderTopLeftRadius: 300
    },
    midLine6: {
        height: 700,
        width: 700,
        backgroundColor: '#D0ECFF',
        marginTop: -330,
        borderTopLeftRadius: 200,
    },
    midLine7: {
        height: 400,
        width: 400,
        backgroundColor: '#D0ECFF',
        top: -800,
        left: 200,
        borderTopLeftRadius: 300
    },
    scannerButton: {
        position: 'absolute',
        marginLeft: 50,
        marginTop: 250,
        width: 300,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        borderWidth: 5,
        borderColor: '#5078DF',
        backgroundColor: 'white',
    },
    KaartenButton: {
        position: 'absolute',
        marginLeft: 50,
        marginTop: 500,
        width: 300,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        borderWidth: 5,
        borderColor: '#5078DF',
        backgroundColor: 'white',
    },
    OptionsLabel: {
        position: 'absolute',
        backgroundColor: '#5078DF',
        top: 160,
        width: 250,
        height: 60,
        borderRadius: 20,
    },
    OptionsText: {
        position: 'absolute',
        top: 175,
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    backButton: {
        position: 'absolute',
        marginTop: 100,
        right: 0,
        width: 100,
        height: 70,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#5078DF',
        backgroundColor: '#838383',
    },

    // Card.js 

    CardButton: {
        position: 'absolute',
        top: 200,
        left: 30,
        marginBottom: 200,
        width: 350,
        height: 650,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 20,
        borderWidth: 5,
        borderColor: '#5078DF',
    },
    CardText: {
        position: 'relative',
        top: 25,
        paddingBottom: 50,
        textAlign: 'center',
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
    },
});