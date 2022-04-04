import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

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
        marginTop: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
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
        marginTop: 210,
        marginLeft: 25,
    },
    scannerButton: {
        alignSelf: 'center',
        marginTop: 50,
        width: 300,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        borderWidth: 5,
        borderColor: '#5078DF',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
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
        width: 80,
        height: 60,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#838383',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },

    // Card.js 

    CardContainer: {
        marginTop: 200,
        alignSelf: 'center',
        width: 350,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderColor: '#5078DF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,

    },
    CardText: {
        marginTop: 20,
        paddingBottom: 50,
        textAlign: 'center',
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardImage: {
        alignSelf: 'center',
    }
});