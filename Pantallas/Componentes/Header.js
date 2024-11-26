import { StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function Header(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SK8 M</Text>
            <Text style={styles.slogan}>The best place for your new era</Text>
            <Searchbar
            mode='bar'
            placeholder="Barra de Busqueda"
            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
    container:{
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
    },

    slogan: {
        fontSize: 18,
        fontWeight: "light",
        marginBottom: 15,
    }
})