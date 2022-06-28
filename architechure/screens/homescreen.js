import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Card, TextInput } from 'react-native-paper';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Lato_100Thin } from '@expo-google-fonts/lato';

export function HomeScreen () {
    let [fontsLoaded] = useFonts({
        Pacifico_400Regular
    });

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
                <Image 
                    source={require('../../assets/images/enter.png')}
                    style={styles.siginIcon}
                />
            </View>

            <TextInput 
                placeholder='search for a topin'
                outlineColor='#FF9F45'
                underlineColor='#F76E11'
                style={styles.search}
            />

            <Card>
                <Card.Cover source={require('../../assets/images/eating-pizza.jpg')} />
            </Card>

            <View style={styles.popular}>
                <Text style={styles.popularHeadingText}>Polular topins</Text>
                <View style={styles.popularScroll}>
                    <TouchableOpacity style={styles.popularItem}>
                        <Image 
                            source={require('../../assets/images/enter.png')}
                            style={styles.siginIcon}
                        />
                        <Text style={styles.popularItemText}>Capricciosa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.popularItem}>
                        <Image 
                            source={require('../../assets/images/enter.png')}
                            style={styles.siginIcon}
                        />
                        <Text style={styles.popularItemText}>Capricciosa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.popularItem}>
                        <Image 
                            source={require('../../assets/images/enter.png')}
                            style={styles.siginIcon}
                        />
                        <Text style={styles.popularItemText}>Capricciosa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.popularItem}>
                        <Image 
                            source={require('../../assets/images/enter.png')}
                            style={styles.siginIcon}
                        />
                        <Text style={styles.popularItemText}>Capricciosa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.popularItem}>
                        <Image 
                            source={require('../../assets/images/enter.png')}
                            style={styles.siginIcon}
                        />
                        <Text style={styles.popularItemText}>Capricciosa</Text>
                    </TouchableOpacity>
                </View>
            </View>

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
        fontWeight:'bold',
        fontFamily:'Pacifico_400Regular'
    },
    search: {
        marginVertical: 20,
        backgroundColor:'#FAEEE0'
    },
    popularScroll:{
        flexDirection:'row',
    },
    popularHeadingText:{
        fontSize:20,
        marginTop:20,
        marginBottom:5
    },
    popularItem:{
        width: 120,
        height:120,
        paddingVertical: 18,
        paddingHorizontal:18,
        backgroundColor: '#FF9F45',
        alignItems:'center',
        justifyContent:'center',
        marginRight:15
        
    },
    popularItemText:{
        color:'#4A403A',
        fontWeight:'bold'
    }
});