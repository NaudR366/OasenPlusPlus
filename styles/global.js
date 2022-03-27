import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

    //Home.js

    container: {
        backgroundColor: 'white'
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
        position: 'absolute',
        marginLeft: 100,
        marginTop: 250,
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        borderWidth: 20,
        borderColor: '#5078DF',
        backgroundColor: 'white',
    },
    roundButton2: {
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
    oasenLogo: {
        width: 300,
        height: 100,
        margin: 50
    },
    textLogo: {
        position: 'absolute',
        marginLeft: 140,
        marginTop: 170,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5078DF'
    },
    textMenu: {
        position: 'absolute',
        marginLeft: 100,
        marginTop: 170,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    }
    // backgroundColor: '#D0ECFF',
    //   position: 'absolute',
    //   bottom: 0,
    //   height: 422,
    //   width: 390,
    
});