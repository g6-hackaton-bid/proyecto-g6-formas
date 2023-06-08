import { View, Text, StyleSheet, Image } from 'react-native';
import StyledText from '../components/StyledText'
import Constants from 'expo-constants'
import { TouchableOpacity } from 'react-native';
import LogoScreen from './LogoScreen';


// create a component
const WelcomeScreen = () => {
    return (
        <View style={styles.container} >
            <View>
                <LogoScreen/>
                <View>
                    <StyledText align='center' color='secondary' fontWeight='bold'>Si ya tienes Inicia Sesión</StyledText>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <StyledText align='center' color='secondary' fontWeight='bold'>Aún no tienes cuenta? haz clic y registrate!</StyledText>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Registrarme</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 20,
        paddingVertical: 20,
        justifyContent: 'center',
    },

    button: {
        backgroundColor: '#789DCA',
        borderRadius: 40,
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '3%',
        marginBottom: '10%',
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});


//make this component available to the app
export default WelcomeScreen;
