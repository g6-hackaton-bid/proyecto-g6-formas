//import liraries
import { View, Text, StyleSheet } from 'react-native';
import StyledText from '../components/StyledText'
import Constants from 'expo-constants'
import theme from '../theme'

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    text: {
        color: theme.appBar.textPrimary
    }
})

const AppBarScreen = () => {
    return (
        <View style={styles.container}>
            <StyledText fontWeight='bold' style={styles.text}>
                AhorraT App
            </StyledText>
        </View>
    )
}



export { AppBarScreen };
