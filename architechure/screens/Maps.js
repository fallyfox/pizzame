import { View, StyleSheet,Dimensions,Text } from 'react-native';
import styled from 'styled-components/native';
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';
import { Theme } from '../theme/Theme';

const Title = styled(Text)`
    color:${Theme.colors.text.secondary};
    margin-bottom:${Theme.space[2]};
    font-size:${Theme.fonts.fontSize.title}
`;

const {width,height} = Dimensions.get('window');
const ASPECT_RATIO = width/height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 9.150245524275425, 
  longitude: 7.330573650504128,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA
};

export function Maps(){
    return (
        <View style={styles.container}>
            <MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={INITIAL_POSITION}/>
            <View style={styles.mapAutoComplete}>
                <Title>Pick delivery point</Title>
                <GooglePlacesAutocomplete placeholder='search' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        flexDirection:"row"
    },
    map:{
        height:Dimensions.get('window').height, 
        width:Dimensions.get('window').width,
    },
    mapAutoComplete:{
        position:'absolute',
        top: Constants.statusBarHeight,
        padding:8,
        borderRadius:8,
        backgroundColor:Theme.colors.bg.secondary,
        shadowColor:'black',
        shadowOffset:{width:4,height:4},
        shadowRadius:4,
        shadowOpacity:0.5,
        elevation:5,
        width:'90%',
    }
});