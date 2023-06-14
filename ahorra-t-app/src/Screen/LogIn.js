import {View, Text, StyleSheet} from 'react-native';
import StyledText from '../components/StyledText';
import { TouchableOpacity } from 'react-native';

    
const LogIn = () => {
    return(
        <View style={styles.container} >
             <Text style={{ textAlign: "center"}} fontWeight='italic' color='secondary'>Unete Ahorra.</Text>
            <Text style={{ textAlign: "center"}} fontWeight='italic' color='secondary'>Crea una cuenta donde empezar a conocer{'\n'}sobre educación financiera{'\n'}además tendras acceso a una cuenta{'\n'}bancaria y otros beneficios!</Text>
            
            <View>
            <StyledText align='center' color='secondary' fontWeight='bold'>Vamos a empezar</StyledText>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Empezar</Text>
                    </TouchableOpacity>
            </View>
            <StyledText align='center' color='secondary' fontWeight='bold'>¿Ya tienes Cuenta?</StyledText>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Long in</Text>
                    </TouchableOpacity>
            <View>

            </View>
        </View>

        
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 20,
        paddingVertical: 90,
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

export default LogIn;


    