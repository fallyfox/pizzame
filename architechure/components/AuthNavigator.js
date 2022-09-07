import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Intro } from '../screens/Intro';
import {Home} from '../screens/homescreen';
import { Popular } from '../screens/Popular';
import { Theme } from '../theme/Theme';
import { Signup } from '../screens/Signup';
import { Signin } from '../screens/Signin';
import { Order } from '../screens/Order';
import { Checkout } from '../screens/Checkout';
import { Pay } from '../screens/Pay';

const Stack = createNativeStackNavigator();

export function AuthNavigator () {
    return (
        <Stack.Navigator initialRouteName='Intro' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Intro' component={Intro} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='Signin' component={Signin} />
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
            <Stack.Screen name='Checkout' component={Checkout} options={{headerShown:true}} />
            <Stack.Screen name='Pay' component={Pay} options={{headerShown:true}} />
        </Stack.Navigator>
    )
}

