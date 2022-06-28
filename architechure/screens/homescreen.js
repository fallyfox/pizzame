import { View, StyleSheet, Image, Text } from 'react-native';
import { Card, TextInput } from 'react-native-paper';

export function HomeScreen () {
    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <View style={styles.brand}>
                    <Image 
                        source={require('../../assets/images/pizza.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.brandName}>pizzame</Text>
                </View>
                <TextInput 
                    placeholder='search for a topin'
                />
                <Image 
                    source={require('../../assets/images/enter.png')}
                    style={styles.siginIcon}
                />
            </View>

           <Card>
            <Card.Cover source={require('../../assets/images/eating-pizza.jpg')} />
           </Card>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    brand: {
        flexDirection:'row'
    },
    logo: {
        width: 48,
        height: 48,
        marginRight:5
    },
    siginIcon:{
        width: 40,
        height:40
    },
    brandName: {
        fontSize:32,
        fontWeight:'bold'
    }
});