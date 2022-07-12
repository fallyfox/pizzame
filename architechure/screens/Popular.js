import { View,Text,StyleSheet,Image, TextInput,TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

export function Popular ({route,navigation}) {
    const {pizzaImg,pizzaName,pizzaRating,pizzaPrice} = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Image source={{uri:pizzaImg}} style={styles.thumbnail}/>
                <View style={styles.pizzaDetails}>
                    <Text style={styles.title}>{pizzaName}</Text>
                    <View style={styles.rating}>
                        <FontAwesomeIcon icon={faStar} color='#FF9F45' size={24} style={{marginRight:5}} />
                        <FontAwesomeIcon icon={faStar}color='#FF9F45' size={24} style={{marginRight:5}}/>
                        <FontAwesomeIcon icon={faStar}color='#FF9F45' size={24} style={{marginRight:5}}/>
                        <FontAwesomeIcon icon={faStar} color='#FF9F45'size={24} style={{marginRight:5}}/>
                        <FontAwesomeIcon icon={faStarHalfStroke} color='#FF9F45' size={24} style={{marginRight:5}}/>
                    </View>
                    <Text style={styles.price}>NGN{pizzaPrice}</Text>
                </View>
            </View>
            <View style={styles.delivery}>
                <Text style={styles.heading}>Order {pizzaName}</Text>
                <TextInput keyboardType='default' placeholder='first name' style={styles.input} />
                <TextInput keyboardType='default' placeholder='last name' style={styles.input} />
                <TextInput keyboardType='email-address' placeholder='email address' style={styles.input} />
                <TextInput keyboardType='phone-pad' placeholder='phone number' style={styles.input} />
                <TouchableOpacity style={styles.orderNow}>
                    <Text style={styles.orderNowText}>Order Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10
    },
    details:{
        flexDirection:'row',
        backgroundColor:'#D9F8C4',
        padding:10
    },
    thumbnail:{
        width:100,
        height:100,
        marginRight:18
    },
    pizzaDetails:{
        justifyContent:'space-between'
    },
    title:{
        fontSize:28,
        fontWeight:'bold'
    },
    rating:{
        flexDirection:'row'
    },
    price:{
        fontSize:18
    },
    delivery:{
        marginTop:20
    },
    heading:{
        fontSize:28,
        textAlign:'center',
        marginBottom:16
    },
    input:{
        borderWidth:1,
        borderColor:'gray',
        borderRadius:50,
        paddingHorizontal:10,
        paddingVertical:12,
        marginBottom:10
    },
    orderNow:{
        backgroundColor:'#064635',
        borderRadius:50,
        paddingHorizontal:10,
        paddingVertical:12
    },
    orderNowText:{
        fontSize:28,
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold'
    }
})