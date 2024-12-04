import { Text, View, StyleSheet, FlatList, Image, Dimensions } from "react-native";


export default function Spots() {
  const DATA = [
    {
        id: '1',
        img: require('./Componentes/Recursos/Kaos Temple.jpg'),
        title: "Kaos Temple, Oviedo, España"
    },
    {
      id: '2',
      img: require('./Componentes/Recursos/Skatepark Péitruss.jpg'),
      title: "Skatepark Péitruss, Luxemburgo"
    },
    {
        id: '3',
        img: require('./Componentes/Recursos/Gratitude Trails,.jpg'),//aqui habia una coma entre el nombre y el punto
        title: "Gratitude Trails, Andros, Grecia."
      },
      {
        id: '4',
        img: require('./Componentes/Recursos/Livingston Skatepark.jpg'),
        title: "Livingston Skatepark, Escocia."
      },
      {
        id: '5',
        img: require('./Componentes/Recursos/Mystic Skatepark.jpg'),
        title: "Mystic Skatepark, Praga, Chequia."
      },
      {
        id: '6',
        img: require('./Componentes/Recursos/THE BLOCK, CALIFORNIA.jpg'),
        title: "The Block, California"
      },
  ];

  const renderItem = ({ item }) => (
    <Item img={item.img} title={item.title} />
  ); 
  
  return (
    <View style={styles.main}>
      <FlatList
        data={DATA}
        numColumns={2}
        columnWrapperStyle={{ 
            justifyContent: "space-between",
            marginHorizontal: 20,  
        }}
        ListHeaderComponent={() => (
            <Text style={styles.text1}>Best SK8 Spots</Text>
          )}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        /* renderItem={({ item }) => <Item img={item.img} title={item.title} />}
        keyExtractor={item => item.id} */
        
      />
    </View>
  );
}

const Item = ({ img, title }) => (
  <View style={styles.item}>
    <View style={styles.imageContainer}>
      <Image source={img} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  text1: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 50,
  },

  item: {
    marginTop: -5,
    marginRight: 5,
    borderRadius: 20,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    position: 'relative', 
    width: 170,
    height: 270,
    borderRadius: 25,
  },

  image: {
    width: '105%',
    height: '100%',
    borderRadius: 25, 
  },
  
  title: {
    position: 'absolute',  
    bottom: 30,            
    left: 20,              
    color: 'white',        
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 75,
  },
});