import { View, StyleSheet,Dimensions } from 'react-native';
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';

const {width,height} = Dimensions.get('window');

const ASPECT_RATIO = width/height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 9.05529768622223, 
  longitude: 7.490250700334827,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA
};

export function Maps(){
    return (
        <>
        <MapView style={styles.map} provider={PROVIDER_GOOGLE} />

        <View style={styles.mapAutoComplete}>
            <GooglePlacesAutocomplete placeholder='search' />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    map:{
        height:Dimensions.get('window').height, 
        width:Dimensions.get('window').width,
    },
    mapAutoComplete:{
        position:'absolute',
        top: Constants.statusBarHeight,
        padding:8,
        borderRadius:8,
        backgroundColor:'#fff',
        shadowColor:'black',
        shadowOffset:{width:4,height:4},
        shadowRadius:4,
        shadowOpacity:0.5,
        elevation:5,
        width:'100%',
    }
});