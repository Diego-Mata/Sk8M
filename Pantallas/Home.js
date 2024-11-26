import { StyleSheet, Text, View } from 'react-native';
import Header from "./Componentes/Header"

export default function Home(){
    return (
        <View style={styles.father}>
            
            <View style={styles.header}>
                <Header />
            </View>
            <View style={styles.flatlist1}></View>
            <View style={styles.flatlist2}></View>
            <View style={styles.flatlist3}></View>
            <View style={styles.flatlist4}></View>
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
        flex: 2,
        backgroundColor: "green"
    },

    flatlist2:{
        flex: 2,
        backgroundColor: "black"
    },

    flatlist3:{
        flex: 2,
        backgroundColor: "blue"
    },

    flatlist4:{
        flex: 2,
        backgroundColor: "pink"
    },



});