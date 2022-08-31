import { useState,useEffect } from "react";
import { View,Text,StyleSheet,TouchableOpacity,ScrollView,Alert,TextInput } from "react-native";
import { Button } from "react-native-paper";
import { Theme } from '../theme/Theme';
import { db } from "../../services/firebase";
import { setDoc, doc, updateDoc, addDoc, collection } from 'firebase/firestore';

export function Checkout ({navigation,route}){
    const {
        price,
        pizzaName,
        ingredients,
        size,
        fname,
        lname,
        email,
        phone,
        lat,
        lon,
        address
    } = route.params;

    //add values to an existing document
    function create () {
        const now = new Date();
        const nowTimestamp = now.getTime();

        addDoc(collection(db,'purchases'),{
            address: address,
            email:email,
            firstname:firstName,
            lastname:lastName,
            phone:phone,
            pizzaname:orderPizzaName,
            price:orderTotal,
            size:orderPizzaSize,
            timestamp:nowTimestamp
        })
        .then(() => {
            Alert.alert(
                'Order Confirmation',
                'We have received your customized pizza order.',
                [{text:'Okay, Thanks',onPress:() => {navigation.navigate('Home')}}]
            )
        })
        .catch(error => console.log('Error received',error))
    }

    return (
        <View style={styles.container}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    
})

