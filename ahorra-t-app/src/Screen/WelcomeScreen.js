import { View, Text, StyleSheet, Image } from 'react-native';
import StyledText from '../components/StyledText'
import Constants from 'expo-constants'


// create a component
const WelcomeScreen = () => {
    return (
        <View style={styles.container} >
            <Image source={require('../img/Ahorrate-01.png')} style={styles.logo}/>
            <StyledText fontWeight='bold' color='secondary'>AhorraT tiempo, AhorraT esfuerzo, AhorraT excusas.</StyledText>
            <StyledText fontWeight='bold' color='secondary'>Empieza tu ahorro ya!</StyledText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 20,
        paddingVertical: 20,
        justifyContent: 'center'
    },

    logo: {
        width: '100%',
        height: '50%',
        borderRadius: 4 
    },
  });


//make this component available to the app
export default WelcomeScreen;
