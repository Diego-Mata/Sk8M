import { Text, View, StyleSheet, FlatList, Image } from "react-native";

export default function Category() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      img: require('./Recursos/t1.jpg'),
      title: "..."
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      img: require('./Recursos/t2.jpg'),
      title: "..."
    },
  ];

  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.text1}>Tablas</Text>
      </View>
        <View style={styles.flatlist}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={({ item }) => <Item img={item.img} title={item.title} />}
            keyExtractor={item => item.id}
            />
            <Text style={styles.text1}> Ruedas </Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={({ item }) => <Item img={item.img} title={item.title} />}
            keyExtractor={item => item.id}
          />
        </View>
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
    marginTop: 10,
  },

  item: {
    marginTop: 15,
    marginLeft: 20,
    borderRadius: 20,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    position: 'relative', 
    width: 200,
    height: 300,
    borderRadius: 25,
  },

  image: {
    width: '105%',
    height: '100%',
    borderRadius: 25, 
  },
  
  title: {
    position: 'absolute',  
    bottom: 50,            
    left: 20,              
    color: 'white',        
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 60,
  },
  flatlist:{
    botoom: 50
  }
});
