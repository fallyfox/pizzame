import { useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { Theme } from '../theme/Theme';
import { authentication } from '../../services/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';

export function Signup({navigation}) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function createUser(){
        createUserWithEmailAndPassword(authentication,email,password)
        .then(() => onAuthStateChanged(authentication,(user) => {
            const uid = user.uid;
        }))
        .catch(error => console.error(error))
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize:Theme.points[4],marginLeft:10}}>Create a new account</Text>
            <TextInput
                placeholder='Enter your Email address'
                style={styles.email}
                onChangeText={text => setEmail(text)}
            />

            <TextInput
                placeholder='Enter your Password'
                style={styles.passWord}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}

            />
            <View style={styles.signinBar}>
                <Text style={styles.signinText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                    <Text style={styles.signinText}>Create account</Text>
                </TouchableOpacity>
            </View>
            <Button 
            color={Theme.colors.ui.primary} 
            style={styles.btn} 
            mode='contained'
            onPress={createUser}
            >Sign in</Button>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Theme.colors.ui.tertiary,
        justifyContent: 'center',
        alignContent: 'center',
        padding:20
    },
    email:{
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
        backgroundColor: 'white',
        marginBottom:10
    },
    passWord:{
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
        backgroundColor: 'white',
        marginBottom:10
    },
    signinText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    signinBar:{
        flexDirection: 'row',
    },
    btn:{
        
    }
})