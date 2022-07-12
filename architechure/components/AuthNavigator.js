import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Intro } from '../screens/Intro';
import { HomeScreen } from '../screens/Homescreen';
import { Profile } from '../screens/Profile';
import { Popular } from '../screens/Popular';

const Stack = createNativeStackNavigator();

export function AuthNavigator () {
    return (
        <Stack.Navigator initialRouteName='Intro' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Intro' component={Intro} />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='Popular' component={Popular} options={{
                headerShown:true,
                title:'From Popular Pizzas',
                headerStyle:{
                    backgroundColor:'#65C18C'
                },
                headerTintColor:'#C1F4C5',
                headerTitleStyle:{
                    fontWeight:'bold',
                    fontSize:20
                },
                headerBackTitle:'Go back'
                }} 
            />
        </Stack.Navigator>
    )
}

