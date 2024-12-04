
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FirstFlatList() {
    return (
        <View style = {styles.mainView}>

            <View style={styles.listView}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} icon={item.icon} color={item.color} />}
                />
            </View>
        </View>
    );
}

const DATA = [
    {
        title: 'Mejores Marcas',
        icon: 'star-box',
        color: 'orange'
    },
    {
        title: 'Marca Economicas',
        icon: 'leaf',
        color: 'green'
    },
    {
        title: 'Marcas mas Vendidas',
        icon: 'food',
        color: 'red'
    },
];

const Item = ({ title, icon, color }) => (
    <View style={styles.item}>
        
        <Text style={styles.title}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    styleText: {
        fontSize: 20,
        marginLeft: 15,
        marginTop: 1,
        fontWeight: "700",
        bottom: 15,
    },
    item: {
        backgroundColor: '#F1F1F1',
        paddingLeft: 5,
        paddingRight: 15,
        marginLeft:5,
        marginHorizontal: 10,
        height: 60,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 17,
        fontWeight: '700',
        paddingLeft:5
    },
    mainView: {
      top:15
    },
    listView: {
        marginLeft: 10
    }
});