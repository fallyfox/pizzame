import { View, StyleSheet, Text, Image } from 'react-native';

export function Profile () {
    return (
        <View style={StyleSheet.container}>
            <View style={StyleSheet.bio}>
                <Image />
                <Text>Jack Robinson</Text>
                <Text>meetjoeblack@gmail.com</Text>
                <Text>Edit Details + icon</Text>
            </View>

            <View style={styles.details}>
                <View style={styles.city}>
                    {/* icon of map pointer */}
                    <Text style={styles.cityText}>Ikeja, Lagos</Text>
                </View>
                <View style={styles.address}>
                    {/* icon of map */}
                    <Text style={styles.addressText}>62 Gado Nasko Road, Kubwa, Bwari, FCT-Abuja</Text>
                </View>
            </View>

            <View style={styles.passwordChange}>
                <View style={styles.subject}>
                    {/* icon of eye striked */}
                    <Text>Change password</Text>
                </View>
                {/* icon point right */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    bio: {

    }
});
