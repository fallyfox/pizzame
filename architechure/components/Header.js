import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts,Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '../theme/Theme';

export function Header () {
    let [fontsLoaded] = useFonts({
        Pacifico_400Regular
    });

    return (
        <View style={styles.header}>
            <View style={styles.brand}>
                <Text style={styles.brandName}>Pizzame</Text>
            </View>
            <TouchableOpacity>
                <FontAwesomeIcon icon={faArrowRightToBracket} size={Theme.points[4]}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop:Theme.points[2]
    },
    brand: {
        flexDirection:'row'
    },
    brandName: {
        fontSize:Theme.points[4],
        fontWeight:'bold',
        fontFamily:'Pacifico_400Regular'
    },
});