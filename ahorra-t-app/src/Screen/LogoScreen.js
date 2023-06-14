import { View, StyledText, StyleSheet, Image } from 'react-native';
import StyledText from '../components/StyledText'
import Constants from 'expo-constants'

const LogoScreen = () => {
    return (
        <View style={styles.container} >
            <Image source={require('../img/Ahorrate-01.png')} style={styles.logo} />
            <StyledText fontWeight='italic' color='secondary'>AhorraT tiempo, AhorraT esfuerzo, AhorraT excusas.</StyledText>
            <StyledText fontWeight='italic' color='secondary'>Empieza tu ahorro ya!</StyledText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 20,
        paddingVertical: '1%',
        justifyContent: 'center'
    },

    logo: {
        width: '100%',
        height: '50%',
        borderRadius: 4
    },
});

export default LogoScreen;