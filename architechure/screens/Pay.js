import {View,Alert} from 'react-native';
import { Paystack } from 'react-native-paystack-webview';

export function Pay({navigation,route}){
    const {price,email,phone} = route.params;

    return (
        <View style={{ flex: 1 }}>
        <Paystack  
          paystackKey="pk_"
          amount={price}
          billingEmail={email}
          activityIndicatorColor="green"
          onCancel={(e) => {
            // handle response here
            navigation.navigate('Checkout')
          }}
          onSuccess={(res) => {
            // handle response here
            Alert.alert(
                'Payment Status',
                `Your payment of ${price} was successful`,
                [{text:'Return to Customize',onPress:navigation.navigate('Customize')}]
            )
          }}
          autoStart={true}
        />
      </View>
    )
}