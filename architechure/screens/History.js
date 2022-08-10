import *  as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Theme } from '../theme/Theme';

const MyComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <Searchbar
            placeholder="Search"
            value={searchQuery}
        />
    );
};

const data = {
    history: [
        { order: 'Mozzarella Pizza', price: '13450', quantity: '3 boxes', date: '15th July 2022', id: '1', status: 'https://cdn-icons-png.flaticon.com/512/3472/3472620.png' },
        { order: 'Pepperoni Pizza', price: '15450', quantity: '1 box(es)', date: '19th July 2022', id: '2', status: 'https://cdn-icons-png.flaticon.com/512/3472/3472620.png' },
        { order: 'Broccoli Pizza', price: '16450', quantity: '4 boxes', date: '11th August 2022', id: '3', status: 'https://cdn-icons-png.flaticon.com/512/3472/3472620.png' },
        { order: 'Permasan Pizza', price: '17850', quantity: '6 boxes', date: '20th August 2022', id: '4', status: 'https://cdn-icons-png.flaticon.com/512/929/929416.png' },
        { order: 'Provolone Pizza', price: '12950', quantity: '7 boxes', date: '21th August 2022', id: '5', status: 'https://cdn-icons-png.flaticon.com/512/929/929416.png' },
        { order: 'Chicken Pizza', price: '10955', quantity: '6 boxes', date: '16th September 2022', id: '6', status: 'https://cdn-icons-png.flaticon.com/512/3472/3472620.png' },
        { order: 'Blue Cheese Pizza', price: '17855', quantity: '2 boxes', date: '19th September 2022', id: '7', status: 'https://cdn-icons-png.flaticon.com/512/3472/3472620.png' },
        { order: 'Pancetta Pizza', price: '90040', quantity: '1 box(es)', date: '23rd September 2022', id: '8', status: 'https://cdn-icons-png.flaticon.com/512/3472/3472620.png' },
        { order: 'Speck Pizza', price: '12670', quantity: '10 boxes', date: '30th September 2022', id: '9', status: 'https://cdn-icons-png.flaticon.com/512/3472/3472620.png' },
        { order: 'Permasan Pizza', price: '10000', quantity: '18 boxes', date: '1st October 2022', id: '10', status: 'https://cdn-icons-png.flaticon.com/512/929/929416.png' }
    ]
}

export function History() {
    return (
        <View>
            <ScrollView style={styles.container}>
                <Text style={styles.scrollText}>Recent History</Text>
                <FlatList data={data.history} renderItem={({ item }) => {
                    return (
                        <View>
                            <View style={styles.datePart}>
                                <Text>{item.date}</Text>
                            </View>
                            <View style={styles.mainHistory}>
                                <View>
                                    <Image style={styles.dataIcon} source={require('../../assets/images/pizza.png')} />
                                </View>
                                <View>
                                    <Text style={styles.order}>{item.order}</Text>
                                    <Text style={styles.quantity}>{item.quantity}</Text>
                                </View>
                                <View>
                                    <Text style={styles.order}>PRICE</Text>
                                    <Text style={styles.quantity}>{item.price}</Text>
                                </View>
                                <View>
                                    <View>
                                        <Text style={styles.order} >Status</Text>
                                        <Image style={styles.statusIcon} source={{uri: item.status}} />
                                    </View>
                                </View>
                            </View>
                        </View>);
                }} key={({ item }) => { item.id }} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:Theme.points[2]
    },
    topBar: {
        borderRadius: 30,
        padding: 10,
        backgroundColor: '#064635',
        textAlign: 'center',
        marginHorizontal: 10
    },
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        
    },
    touch: {

    },
    touchCarrier: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        padding: 10,
        borderRadius: 30,
        backgroundColor: '#FFBC80'
    },
    touchText: {
        padding:Theme.points[2]
    },
    mainHistory: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    dataIcon: {
        width: 40,
        height: 40,
        paddingTop: 20
    },
    nameIcon: {
        width: 60,
        height: 60
    },
    statusIcon: {
        width: 35,
        height: 35
    },
    datePart: {
        backgroundColor: 'grey',
        paddingVertical: 10,
        marginTop: 15,
        marginBottom: 5
    },
    order: {
        fontSize: 14,
        fontWeight: '700',
        fontStyle: 'italic'
    },
    quantity: {
        fontWeight: 'bold',
    },
    scrollText:{
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5
    }

})
