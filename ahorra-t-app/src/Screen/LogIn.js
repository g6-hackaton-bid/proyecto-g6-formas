import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native';

// create a component
const LogIn = (props) => {
    const[email, setEmail] = useState("");
    const[clave, setClave] = useState("");

    const {setToken, setIsLogin, setLocalId} = props.p;

    const handleInicioSesion = () =>{
        const apiKey = "AIzaSyAWxbAWbcRTIl_hm3pX5FoHQl4tuJxuuJw";
        const URL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + apiKey;

        const datos = {email: email, password: clave, returnSecureToken: true };
        const options = {
            method: 'POST',
            header: {
                'Acept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(datos),
        }
        //hacer peticiones con fetch
        fetch(URL, options)
        .then(response => response.json())
        .then(result => {
            const rs = result.idToken;
            if(rs!=null){
                setToken(result.idToken);
                setLocalId(result.localId);
                setIsLogin(true);
            } 
            else{
                alert("Error de usuario o contraseña");
            }          
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title} >Iniciar Sesión</Text>
            <TextInput style={styles.input} placeholder='Email' onChangeText={(txt)=>setEmail(txt)}/>
            <TextInput style={styles.input} placeholder='Contraseña' onChangeText={(txt)=>setClave(txt)} secureTextEntry={true}/>
            
            <TouchableOpacity style={styles.button} onPress={handleInicioSesion}>
                <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        borderRadius: 15,
        marginTop:'50%'
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
      },

    button: {
        backgroundColor: '#007bff',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

//make this component available to the app
export {LogIn};
