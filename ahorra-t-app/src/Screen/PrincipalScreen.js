import { StyleSheet, Text, View } from 'react-native';
import { AppBarScreen } from './AppBarScreen.js'
import WelcomeScreen from './WelcomeScreen.js';

const PrincipalScreen = () => {
    return(
        <View>
            <AppBarScreen/>
            <WelcomeScreen/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //padding: 5
    },

    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
      // Puedes ajustar el estilo del texto según tus preferencias
    },
  });

//make this component available to the app
export { PrincipalScreen };
