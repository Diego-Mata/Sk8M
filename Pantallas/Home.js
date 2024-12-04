import { StyleSheet, Text, View } from 'react-native';
import Header from "./Componentes/Header"
import FirstFlatList from './Componentes/FirstFlatList';
import Category from "./Componentes/Flatlists"

export default function Home(){
    return (
        <View style={styles.father}>
            
            <View style={styles.header}>
                <Header />
            </View>
            <View style={styles.flatlist1}>
                <FirstFlatList></FirstFlatList>
            </View>
            <View style={styles.flatlist2}>
                <Category></Category>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    father:{
        flex: 1,
        backgroundColor: "black"
    },

    header:{
        flex: 2,
        backgroundColor: "white",
    },

    flatlist1:{
        flex: 1,
        backgroundColor: "white"
    },

    flatlist2:{
        flex: 6,
        backgroundColor: "white"
    },



});