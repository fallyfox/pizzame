import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Intro } from '../screens/Intro';
import { Home } from '../screens/Homescreen';
import { Popular } from '../screens/Popular';
import { Theme } from '../theme/Theme';
import { Order } from '../screens/Order';

const Stack = createNativeStackNavigator();

export function AuthNavigator () {
    return (
        <Stack.Navigator initialRouteName='Intro' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Intro' component={Intro} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Popular' component={Popular} options={{
                headerShown:true,
                title:'From Popular Pizzas',
                headerStyle:{
                    backgroundColor:Theme.colors.ui.success
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold',
                    fontSize:Theme.points[3]
                },
                headerBackTitle:'Go back'
                }} 
            />
            <Stack.Screen name='Order' component={Order} options={{headerShown:true}} />
        </Stack.Navigator>
    )
}

