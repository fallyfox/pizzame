import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Card, TextInput } from 'react-native-paper';
import { useFonts,Lato_100Thin } from '@expo-google-fonts/lato';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';


export function HomeScreen () {
    let [fontsLoaded] = useFonts({
        Lato_100Thin
    });

    return (
        <View style={styles.container} >
            <Header />

            <View>
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
                            <Text style={styles.popularItemText}>Capricciosa</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <Menu />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
        paddingHorizontal: 20
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