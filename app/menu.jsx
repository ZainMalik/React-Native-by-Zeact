import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image } from "react-native";
import { Colors } from '@/constants/Colors';

export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme);
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    return (
        <Container style={styles.container}>
           <FlatList
           data={[]}
           renderItem={({item}) => (
               <View>
                   <Text>{item.name}</Text>
                   <Image source={item.image} />
                   <Text>{item.price}</Text>
               </View>
           )}
           >
           </FlatList>
        </Container>
    )
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
        },
        image: {
            width: '100%',
            height: '100%',
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center'
        },
        title: {
            color: 'white',
            fontSize: 42,
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            marginBottom: 120
        },
        link: {
            color: 'white',
            fontSize: 42,
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            textDecorationLine: 'underline',
            padding: 4,
        },
        button: {
            height: 60,
            borderRadius: 20,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
    });
}