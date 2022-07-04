import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { Card, TextInput, Title, Paragraph, Button } from 'react-native-paper';
import { useFonts, Lato_100Thin } from '@expo-google-fonts/lato';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';


const data = {
    favourites: [
        { name: 'mozzarella', id: '1', thumbnail: 'https://cdn-icons.flaticon.com/png/512/2454/premium/2454219.png?token=exp=1656954610~hmac=205b712d391169cf1d932a9d0e7ba82a' },
        { name: 'parmesan', id: '2', thumbnail: 'https://cdn-icons.flaticon.com/png/512/2497/premium/2497913.png?token=exp=1656594472~hmac=7c065c3ac82f4394166025fe725dcb8d' },
        { name: 'provolone', id: '3', thumbnail: 'https://cdn-icons.flaticon.com/png/512/2454/premium/2454219.png?token=exp=1656954610~hmac=205b712d391169cf1d932a9d0e7ba82a' },
        { name: 'blue cheese', id: '4', thumbnail: 'https://cdn-icons.flaticon.com/png/512/2454/premium/2454219.png?token=exp=1656954610~hmac=205b712d391169cf1d932a9d0e7ba82a' },
        { name: 'broccoli', id: '5', thumbnail: 'https://cdn-icons.flaticon.com/png/512/2454/premium/2454219.png?token=exp=1656954610~hmac=205b712d391169cf1d932a9d0e7ba82a' }
    ],
    bakersChoice: [
        { name: 'pancetta', id: '6', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg' },
        { name: 'speck', id: '7', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg' },
        { name: 'anchovies', id: '8', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg' },
        { name: 'zucchini', id: '9', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg' },
        { name: 'pancetta', id: '10', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg' }
    ]
}

export function HomeScreen() {
    let [fontsLoaded] = useFonts({
        Lato_100Thin
    });

    return (
        <View style={styles.container} >
            <Header />

            <TextInput
                placeholder='search for a topin'
                outlineColor='#FF9F45'
                underlineColor='#F76E11'
                style={styles.search}
            />

            <View style={styles.popular}>
                <Text style={styles.popularHeadingText}>Polular topins</Text>
                <FlatList data={data.favourites} renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.popularItem}>
                            <Image source={{ uri: item.thumbnail }} style={{ width: 60, height: 60 }} />
                            <Text style={styles.popularItemText}>{item.name}</Text>
                        </TouchableOpacity>
                    );
                }} key={({ item }) => { item.id }} horizontal />
            </View>

            {/* baker's choice */}
            <View style={styles.bakersChoice}>
                <Text style={styles.popularHeadingText}>Baker's choice</Text>
                <FlatList data={data.bakersChoice} renderItem={({ item }) => {
                    return (
                        <Card style={{marginBottom:10}}>
                            <Card.Cover source={{ uri: item.thumbnail }} />
                            <Card.Content>
                                <Title>{item.name}</Title>
                                <Paragraph>{item.note}</Paragraph>
                                <Button mode='contained' color='coral'>Order</Button>
                            </Card.Content>
                        </Card>
                    );
                }} key={({ item }) => { item.id }} />
            </View>

            <Menu />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    search: {
        marginVertical: 20,
        backgroundColor: '#FAEEE0'
    },
    popularHeadingText: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 5
    },
    popularItem: {
        width: 120,
        height: 120,
        paddingVertical: 18,
        paddingHorizontal: 18,
        backgroundColor: '#FF9F45',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15

    },
    popularItemText: {
        color: '#4A403A',
        fontWeight: 'bold'
    }
});